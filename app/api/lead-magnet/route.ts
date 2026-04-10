import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '2');

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // 1. Add/Update contact in Brevo
    // Documentation: https://developers.brevo.com/reference/createcontact
    try {
      await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          listIds: [BREVO_LIST_ID],
          updateEnabled: true, // Updates the contact if it already exists
        }),
      });
    } catch (contactError) {
      // We log but don't block the email if contact creation fails
      console.error('Failed to save contact to Brevo:', contactError);
    }

    // 2. Brevo API call to send transactional email
    // Documentation: https://developers.brevo.com/reference/sendtransacemail
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Shadow Studio',
          email: 'nizami.shadowstudio@gmail.com',
        },
        to: [
          {
            email: email,
          },
        ],
        subject: 'Your ROI Audit Guide - Shadow Studio',
        htmlContent: `
          <html>
            <head></head>
            <body style="font-family: sans-serif; line-height: 1.6; color: #333;">
              <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h1 style="color: #f4703a;">Your ROI Audit Guide is here!</h1>
                <p>Hello,</p>
                <p>Thank you for requesting our ROI Audit Guide. This framework is designed to help you identify bottlenecks in your ad spend, ACOS, and creative output.</p>
                <p style="margin: 30px 0;">
                  <a href="https://docs.google.com/spreadsheets/d/1Plhu1OIv0rRy4Jjw8zFQZ1IBgtaRVjsw/edit?usp=sharing&ouid=102034258856644575129&rtpof=true&sd=true" 
                     style="background-color: #f4703a; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    Access ROI Audit Spreadsheet & Guide
                  </a>
                </p>
                <p>If you have any questions or want us to walk you through it, feel free to book a call with us.</p>
                <p style="margin: 20px 0;">
                  <a href="https://form.jotform.com/260972545860061" 
                     style="display: inline-block; border: 1px solid #f4703a; color: #f4703a; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    Book Your Strategy Call
                  </a>
                </p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 12px; color: #888;">
                  Best regards,<br>
                  <strong>The Shadow Studio Team</strong>
                </p>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API error:', errorData);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead magnet error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
