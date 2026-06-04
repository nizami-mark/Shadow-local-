import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, phone, aov, adSpend, message } = await req.json();

    if (!name || !email || !company || !phone) {
      return NextResponse.json(
        { error: 'Name, email, brand/website name, and phone number are required fields.' },
        { status: 400 }
      );
    }

    // Build submission data dictionary
    const submission = {
      id: `lead_${Date.now()}`,
      name,
      email,
      company,
      phone,
      aov: aov || 'N/A',
      adSpend: adSpend || 'N/A',
      message: message || 'N/A',
      timestamp: new Date().toISOString(),
    };

    // Save submission locally under public/submissions.json as double redundancy
    let localSaved = false;
    try {
      const publicDir = path.join(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      const backupPath = path.join(publicDir, 'submissions.json');
      let currentSubmissions = [];
      if (fs.existsSync(backupPath)) {
        const fileContent = fs.readFileSync(backupPath, 'utf8');
        try {
          currentSubmissions = JSON.parse(fileContent);
        } catch (_) {}
      }
      currentSubmissions.push(submission);
      fs.writeFileSync(backupPath, JSON.stringify(currentSubmissions, null, 2), 'utf8');
      localSaved = true;
    } catch (e) {
      console.error('[Contact API] Failed to write backup submissions file:', e);
    }

    // SMTP Variables setup
    const smtpUser = process.env.SMTP_USER || process.env.ZOHO_USER || '';
    const smtpPass = process.env.SMTP_PASS || process.env.ZOHO_PASSWORD || '';
    
    // Auto-detect Gmail if user is a Gmail address and host is unspecified
    let defaultHost = 'smtp.zoho.com';
    if (smtpUser.toLowerCase().endsWith('@gmail.com')) {
      defaultHost = 'smtp.gmail.com';
    }
    
    const smtpHost = process.env.SMTP_HOST || process.env.ZOHO_HOST || defaultHost;
    const smtpPort = parseInt(process.env.SMTP_PORT || process.env.ZOHO_PORT || '465');

    // If SMTP credentials aren't set in environment, do not throw, return safe response so layout functions smoothly
    if (!smtpUser || !smtpPass) {
      console.warn('[Contact API] SMTP credentials not set. Simulated delivery. To trigger real-time Gmail alerts, configure SMTP_USER and SMTP_PASS variables.');
      return NextResponse.json({
        success: true,
        message: 'You are all done, our strategist will get back to you in a short while.',
        simulated: true,
        data: submission
      });
    }

    // Build the Nodemailer SMTP mail transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Elegant and highly-readable email structure matching the Shadow Studio brand attributes
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border-radius: 16px; background-color: #121212; color: #f5f5f5; border: 1px solid #f4703a; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
        <div style="text-align: center; margin-bottom: 25px;">
          <h1 style="color: #f4703a; font-size: 26px; margin: 0; font-weight: 800; tracking: 0.05em;">SHADOW STUDIO</h1>
          <p style="color: #888888; font-size: 14px; margin: 5px 0 0 0;">NEW STRATEGY LEAD INQUIRY</p>
        </div>
        
        <div style="background-color: #1a1a1a; padding: 20px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #f4703a;">
          <p style="font-size: 16px; line-height: 1.6; margin: 0;">Excellent news! A prospective studio partner has completed the built-in consultation request form. Details below:</p>
        </div>
        
        <table style="width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 25px;">
          <tr>
            <td style="padding: 12px; font-weight: bold; width: 150px; border-bottom: 1px solid #222; color: #f4703a; font-size: 14px;">Full Name:</td>
            <td style="padding: 12px; border-bottom: 1px solid #222; font-size: 15px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #222; color: #f4703a; font-size: 14px;">Email:</td>
            <td style="padding: 12px; border-bottom: 1px solid #222; font-size: 15px;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #222; color: #f4703a; font-size: 14px;">Brand/Company:</td>
            <td style="padding: 12px; border-bottom: 1px solid #222; font-size: 15px;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #222; color: #f4703a; font-size: 14px;">Phone/WhatsApp:</td>
            <td style="padding: 12px; border-bottom: 1px solid #222; font-size: 15px;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #222; color: #f4703a; font-size: 14px;">Average Order Value (AOV):</td>
            <td style="padding: 12px; border-bottom: 1px solid #222; font-size: 15px; color: #ffffff;">${aov}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #222; color: #f4703a; font-size: 14px;">Monthly Ad Spend:</td>
            <td style="padding: 12px; border-bottom: 1px solid #222; font-size: 15px; font-weight: bold; color: #10b981;">${adSpend}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #f4703a; font-size: 14px; vertical-align: top;">Business Goals:</td>
            <td style="padding: 12px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #ffffff;">${message}</td>
          </tr>
        </table>
        
        <div style="border-top: 1px solid #222; padding-top: 15px; text-align: center; font-size: 12px; color: #666666;">
          Lead ID: ${submission.id} • Submitted at ${submission.timestamp}
        </div>
      </div>
    `;

    // Modern and elegant automated customer confirmation receipt template
    const userEmailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 35px 30px; border-radius: 16px; background-color: #0d0d0d; color: #e5e5e5; border: 1px solid #f4703a; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #f4703a; font-size: 28px; margin: 0; font-weight: 900; letter-spacing: 0.05em;">SHADOW STUDIO</h1>
          <div style="width: 40px; height: 2px; margin: 15px auto 0 auto; background: #f4703a;"></div>
        </div>
        
        <div style="margin-bottom: 25px;">
          <p style="font-size: 18px; font-weight: 700; color: #ffffff; margin-top: 0;">Hey ${name},</p>
          <p style="font-size: 15px; line-height: 1.7; color: #cccccc; margin-bottom: 15px;">
            Gotcha! We have successfully received your brand growth briefing for <strong>${company}</strong>. Our scaling strategists are already diving deep into your brand's performance indicators.
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #cccccc; margin-bottom: 25px;">
            We are going to perform a thorough review on your digital presence, marketing structure, and operational bottlenecks. Expect a highly actionable direct outreach from our growth team in short order.
          </p>
        </div>

        <div style="background-color: #141414; border: 1px solid #222222; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
          <h3 style="color: #ffffff; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid #222222; padding-bottom: 8px;">Growth Briefing Summary</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="font-size: 14px;">
              <td style="color: #888888; padding: 6px 0;">Brand/Website:</td>
              <td style="color: #ffffff; font-weight: 600; text-align: right; padding: 6px 0;">${company}</td>
            </tr>
            <tr style="font-size: 14px;">
              <td style="color: #888888; padding: 6px 0;">Phone/WhatsApp:</td>
              <td style="color: #ffffff; font-weight: 600; text-align: right; padding: 6px 0;">${phone}</td>
            </tr>
            <tr style="font-size: 14px;">
              <td style="color: #888888; padding: 6px 0;">Average Order Value (AOV):</td>
              <td style="color: #ffffff; font-weight: 600; text-align: right; padding: 6px 0;">${aov}</td>
            </tr>
            <tr style="font-size: 14px;">
              <td style="color: #888888; padding: 6px 0;">Monthly Ad Spend:</td>
              <td style="color: #10b981; font-weight: 700; text-align: right; padding: 6px 0;">${adSpend}</td>
            </tr>
          </table>
        </div>

        <div style="text-align: center; margin-bottom: 30px;">
          <p style="font-size: 13px; color: #888888; margin: 0 0 15px 0;">Looking forward to taking your brand to the next tier.</p>
          <p style="font-size: 15px; font-weight: 800; color: #f4703a; margin: 0;">— The Shadow Studio Team</p>
        </div>
        
        <div style="border-top: 1px solid #1f1f1f; padding-top: 20px; text-align: center; font-size: 11px; color: #555555;">
          This is an automated confirmation of receipt. If you have any immediate updates or general questions, feel free to reply directly to this email or message us on WhatsApp.
        </div>
      </div>
    `;

    // 1. Attempt actual SMTP mail delivery to nizami.shadowstudio@gmail.com (Internal Alert)
    try {
      await transporter.sendMail({
        from: `"${name} @ Shadow Studio" <${smtpUser}>`,
        to: 'nizami.shadowstudio@gmail.com',
        replyTo: email,
        subject: `🔥 New Brand Inquiry: ${company} (${name})`,
        html: emailHtml,
        text: `Brand Inquiry Details:\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nAOV: ${aov}\nMonthly Ad Spend: ${adSpend}\nMessage: ${message}`
      });
    } catch (adminError) {
      console.error('[Contact API] Failed to send admin alert email:', adminError);
    }

    // 2. Attempt automated confirmation copy to the customer's personal email
    try {
      await transporter.sendMail({
        from: `"Shadow Studio" <${smtpUser}>`,
        to: email,
        subject: `⚡ Shadow Studio | Your Brand Growth Audit is Cooking!`,
        html: userEmailHtml,
        text: `Hey ${name},\n\nGotcha! We have successfully received your brand growth briefing for ${company}. Our scaling strategists are already diving deep into your indicators.\n\nSummary Profile:\n- Brand: ${company}\n- Phone: ${phone}\n- AOV: ${aov}\n- Monthly Ad Spend: ${adSpend}\n\nWe look forward to collaborating shortly.\n\n— The Shadow Studio Team`
      });
    } catch (userError) {
      console.error('[Contact API] Failed to send automated customer confirmation email:', userError);
    }

    return NextResponse.json({
      success: true,
      message: 'You are all done, our strategist will get back to you in a short while.',
      simulated: false
    });
  } catch (error: any) {
    console.error('[Contact API] Failed to execute sendMail:', error);
    return NextResponse.json(
      { error: 'SMTP Send Failure: ' + (error?.message || error) },
      { status: 500 }
    );
  }
}
