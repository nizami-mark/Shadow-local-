import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const firstName = name ? name.split(' ')[0] : 'there';

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '2');

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // 1. Add/Update contact in Brevo
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
          attributes: {
            FIRSTNAME: firstName,
            FULLNAME: name || '',
          },
          listIds: [BREVO_LIST_ID],
          updateEnabled: true,
        }),
      });
    } catch (contactError) {
      console.error('Failed to save contact to Brevo:', contactError);
    }

    // 2. Brevo API call to send transactional email
    const blueprintUrl = "https://docs.google.com/spreadsheets/d/1Plhu1OIv0rRy4Jjw8zFQZ1IBgtaRVjsw/edit?usp=sharing&ouid=102034258856644575129&rtpof=true&sd=true";
    
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Nizami // Shadow Studio',
          email: 'nizami.shadowstudio@gmail.com',
        },
        to: [
          {
            email: email,
            name: name || '',
          },
        ],
        subject: `your audit is in here, ${firstName}`,
        htmlContent: `
          <html>
            <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px;">
              <p>Hey ${firstName},</p>
              
              <p>Most eCommerce brands get stuck at 2M monthly because the systems that got them there aren't the same ones that will get them to 7M.</p>
              
              <p>Your audit guide is ready: <a href="${blueprintUrl}" style="color: #f4703a; font-weight: bold; text-decoration: underline;">Open the Blueprint →</a></p>
              
              <p>We don't look at "vanity metrics." This framework is designed to find the <strong>Bottleneck</strong>.</p>
              
              <p>Is it your creative fatigue? Your offer resonance? Or is your demand engine simply not "Unified"?</p>
              
              <p>Spend 90 minutes with this. It’s better to find the math error now than to try and scale a broken engine.</p>
              
              <p>Talk soon,<br>
              <strong>Nizami</strong><br>
              Shadow Studio</p>
              
              <p style="margin-top: 30px; font-size: 13px; color: #666; border-top: 1px solid #eee; padding-top: 15px;">
                <img src="https://ais-dev-7y6zva7of2jca57cuutgav-311807151341.asia-east1.run.app/nizami-dp.png" alt="Nizami" style="width: 50px; height: 50px; border-radius: 25px; margin-bottom: 10px; display: block;" />
                <em>p.s. If you want to skip the "do-it-yourself" part and just see the roadmap for 7M+, reply "SYSTEM" and we can chat about your specific setup.</em>
              </p>
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
