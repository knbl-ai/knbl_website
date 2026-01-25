import { google } from 'googleapis';

/**
 * Simplified Gmail service based on user-provided pattern
 */
export async function sendEmail({
    subject,
    body,
    to,
}: {
    subject: string;
    body: string;
    to?: string;
}) {
    const SENDER_EMAIL = (process.env.SENDER_EMAIL_FORM || '').trim();
    const TARGET_EMAIL = (process.env.TARGET_EMAIL_FORM || '').trim();
    const clientEmail = (process.env.GOOGLE_CLOUD_CLIENT_EMAIL || '').trim();
    const projectId = (process.env.GOOGLE_CLOUD_PROJECT_ID || '').trim();
    let privateKey = process.env.GOOGLE_CLOUD_PRIVATE_KEY || '';

    if (privateKey.includes('\\n')) {
        privateKey = privateKey.replace(/\\n/g, '\n');
    }
    privateKey = privateKey.trim();

    if (!SENDER_EMAIL || !TARGET_EMAIL || !clientEmail || !privateKey || !projectId) {
        throw new Error('Missing environment variables for Gmail service');
    }

    const recipient = (to || TARGET_EMAIL).trim();

    try {
        const googleAuth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
                project_id: projectId,
            },
            scopes: ['https://www.googleapis.com/auth/gmail.send'],
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const authClient: any = await googleAuth.getClient();
        // Impersonate the sender
        authClient.subject = SENDER_EMAIL;

        const gmail = google.gmail({ version: 'v1', auth: authClient });

        const emailLines = [
            `From: ${SENDER_EMAIL}`,
            `To: ${recipient}`,
            `Subject: ${subject}`,
            `Content-Type: text/plain; charset=utf-8`,
            `MIME-Version: 1.0`,
            ``,
            body,
        ];

        const email = emailLines.join('\r\n');

        const encodedEmail = Buffer.from(email)
            .toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        const result = await gmail.users.messages.send({
            userId: 'me',
            requestBody: {
                raw: encodedEmail,
            },
        });

        return {
            success: true,
            messageId: result.data.id,
        };
    } catch (error) {
        console.error('Failed to send email:', error instanceof Error ? error.message : error);
        throw error;
    }
}
