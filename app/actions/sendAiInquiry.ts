'use server';

import { sendEmail } from '@/lib/gmail';

export async function sendAiInquiry(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { success: false, error: 'Name, email, and message are required' };
    }

    const body = `
AI Video Production Inquiry

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Message: ${message}
    `.trim();

    try {
        await sendEmail({
            subject: 'Ai video production inquiry',
            body: body,
        });
        return { success: true };
    } catch (error) {
        console.error('Failed to send AI inquiry:', error);
        return { success: false, error: 'Failed to send inquiry. Please try again later.' };
    }
}
