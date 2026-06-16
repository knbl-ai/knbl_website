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

    const scriptUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL || 'https://script.google.com/macros/s/AKfycbwxfWQYqxTrjdkJYB63IF5g-OJRthKLpWRS7B-i9eFOzLCek5XPsiyp0d6pYG2Eyz87/exec';
    
    console.log('Using Script URL:', scriptUrl);

    // Prepare data to send to Google Apps Script
    const payload = {
      email,
      source: 'Website Newsletter Popup',
      consentStatus: 'Approved',
      subscriptionStatus: 'Subscribed',
    };

    console.log('Sending payload:', payload);

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('Response Status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Response not OK:', errorText);
      throw new Error(`Google Apps Script returned status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Data received:', data);

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
