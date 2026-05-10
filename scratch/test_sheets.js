const fetch = require('node-fetch');

const scriptUrl = 'https://script.google.com/macros/s/AKfycbysQLmCE4pnqYnWSXo1Vwbm1sxXeFdThuPx61FnFJ27KGzSn0gosFj3M4Ahio9hpnJGIA/exec';

const payload = {
  email: 'test-direct@example.com',
  source: 'Script Test',
  consentStatus: 'Approved',
  subscriptionStatus: 'Subscribed',
};

async function test() {
  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('Status:', response.status);
    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
