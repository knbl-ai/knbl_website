import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, pageUrl } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL;

    if (!scriptUrl) {
      console.error('Missing GOOGLE_SHEETS_WEB_APP_URL environment variable');
      // If not configured yet, log error but you could return 500.
      return NextResponse.json(
        { error: 'Server configuration error: Web App URL missing' },
        { status: 500 }
      );
    }

    // Prepare data to send to Google Apps Script
    const payload = {
      email,
      source: 'Website Newsletter Popup',
      consentStatus: 'Approved',
      subscriptionStatus: 'Subscribed',
    };

    // Note: Google Apps Script sometimes requires following redirects 
    // fetch API in Node.js follows redirects by default.
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script returned status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === 'error') {
      console.error('Error from Google Apps Script:', data.message);
      return NextResponse.json(
        { error: 'Failed to add to sheet' },
        { status: 500 }
      );
    }

    // Success (even if it was a duplicate, the script returns success so the UI shows the success message)
    return NextResponse.json({ success: true, message: data.message });

  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
