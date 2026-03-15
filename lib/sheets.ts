import { google } from 'googleapis';

const SPREADSHEET_ID = '1vwid4Dx-uX0Xb997WCICj-uC5m91kpvp8ks-FLT6ssw';

export async function appendSheetRow(values: string[]) {
    const clientEmail = (process.env.GOOGLE_CLOUD_CLIENT_EMAIL || '').trim();
    const projectId = (process.env.GOOGLE_CLOUD_PROJECT_ID || '').trim();
    let privateKey = process.env.GOOGLE_CLOUD_PRIVATE_KEY || '';

    if (privateKey.includes('\\n')) {
        privateKey = privateKey.replace(/\\n/g, '\n');
    }
    privateKey = privateKey.trim();

    if (!clientEmail || !privateKey || !projectId) {
        throw new Error('Missing environment variables for Google Sheets service');
    }

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: clientEmail,
            private_key: privateKey,
            project_id: projectId,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [values],
        },
    });
}
