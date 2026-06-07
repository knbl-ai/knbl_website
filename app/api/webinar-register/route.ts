import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/gmail';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    await sendEmail({
      to: email,
      cc: 'ravit@kanibal.co.il',
      subject: 'יאללה להמיר ממסע לקוח!',
      body: `שלום ${name},

שמחה פלוס פלוס שנרשמת לוובינר הקרוב שלנו, בו נפצח יחד עם ניר זברו את הסודות לסוריטלינג מושלם עבור מסע לקוח.
מסע לקוח שמוכר, ממיר, זכיר למותג שלכם.

הנה לינק לשמירה ליומן שלכם: https://calendarlink.com/event/Criyp

צוות KNBL
knbl360.com`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webinar email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
