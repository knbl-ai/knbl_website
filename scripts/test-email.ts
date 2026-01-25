import * as dotenv from 'dotenv';
import path from 'path';
import { sendEmail } from '../lib/gmail';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function main() {
    console.log('Sending test email...');
    try {
        const result = await sendEmail({
            subject: 'TEST',
            body: 'TEST',
        });
        console.log('Email sent successfully!', result);
    } catch (error) {
        console.error('Failed to send test email:', error);
        process.exit(1);
    }
}

main();
