import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/gmail';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbyHm77S-_kMbEKWjl-bfeSwFCI51z2N5WqhvyHQVnsYBC2YI1HDKyssRwZxMdqV61zI/exec';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role, org, phone, newsletter } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Forward to Google Sheets via GAS
    const gasBody = new URLSearchParams({ name, email, role: role || '', org: org || '', phone: phone || '', newsletter: newsletter || 'לא' });
    await fetch(GAS_URL, { method: 'POST', mode: 'no-cors' as RequestMode, body: gasBody }).catch(() => {});

    // Send confirmation email to the registrant
    await sendEmail({
      to: email,
      subject: 'אישור הרשמה — וובינר KNBL · מסע לקוח וסטוריטלינג',
      body: `שלום ${name},

תודה שנרשמת לוובינר שלנו!

📅 יום שני · 29.6.26
🕙 11:00
📹 בשידור ב־ZOOM

נשלח אליך את קישור הכניסה לפני האירוע.

מחכים לראותך,
צוות KNBL

---
KNBL · knbl360.com`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webinar registration error:', error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
