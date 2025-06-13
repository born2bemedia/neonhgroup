import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { firstName, email, phone, service, company, website, message, agreeToPolicy } = bodyJSON;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptionsRecipient = {
      from: '"Neon HR Group" <noreply@neonhrgroup.com>',
      to: "noreply@neonhrgroup.com",
      subject: "Order Form Submission",
      text: `Name: ${firstName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nCompany name: ${company}\nCompany website: ${website}\nMessage: ${message}\nAgree to Policy: ${agreeToPolicy}`,
    };

    const mailOptionsClient = {
      from: '"Neon HR Group" <noreply@neonhrgroup.com>',
      to: email,
      subject: "Your Service Request Has Been Received",
      html: `
         <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif;">
          <thead>
            <tr>
              <th style="background-image: url('https://neonhrgroup.com/images/letter-top.jpg'); background-size: cover; background-position: center center; background-repeat: no-repeat; height: 102px;"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
              <p style="font-size:24px;color:#FF5900;font-weight:700;margin:0;">Your Service Request Received</p>
              <br>
              <br>
                <h2 style="text-align: left; font-size: 20px;margin:0;">Dear ${firstName},</h2>
                <p style="font-size: 16px; line-height: 19px;margin:0;">Thank you for submitting your request for a <b>${service}</b> via our online form.</p>
                <br>
                <br>
                <p style="font-size: 16px; line-height: 19px;margin:0;">We have successfully received your inquiry and our team is already reviewing the details.</p>
                <br>
                <br>
                <p style="font-size: 16px; line-height: 19px;margin:0;">
                You can expect to be contacted shortly via your preferred communication method to discuss your needs and next steps.
                <br>
                If you have any additional information to share in the meantime, feel free to reply to this email or contact us directly at <a href="mailto:info@neonhrgroup.com" style="color:#FF5900;text-decoration: underline;">info@neonhrgroup.com</a>
                </p>
                <br>
                <br>
                <p style="font-size: 24px; line-height: 28px; font-weight: 700;margin:0;">
                  Best regards,<br>
                  <span style="color:#FF5900;font-size: 24px; line-height: 28px; font-weight: 700;margin:0;">The Neonhrgroup Team</span>
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="width: 50%; background-image: url('https://neonhrgroup.com/images/letter-bottom.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; height: 102px; padding: 0;">
                <ul style="margin:0;padding:0;display: flex; align-items:center;">
                  <li style="list-style: none; color: #9DA3BB; font-size: 12px; line-height: 14px;">Phone: <br> <a href="tel:+10000000000" style="color: #ffffff; font-size:12px;line-height:14px;">+1(000) 000-0000</a></li>
                  <li style="list-style: none; color: #9DA3BB; font-size: 12px; line-height: 14px;">Email: <br> <a href="mailto:info@neonhrgroup.com" style="color: #ffffff; font-size:12px;line-height:14px;">info@neonhrgroup.com</a></li>
                </ul>
              </td>
            </tr>
          </tfoot>
        </table>
      `,
    };

    await transporter.sendMail(mailOptionsRecipient);
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}