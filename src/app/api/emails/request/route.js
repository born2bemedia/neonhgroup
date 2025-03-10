import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      yourName,
      email,
      phone,
      message,
      are,
      company,
      eventName,
      eventLink,
      industry,
      eventLocation,
      eventDate,
      eventTopic,
      participationType
    } = bodyJSON;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptionsRecipient = {
      from: '"Neonhrgroup" <noreply@neonhrgroup.com>',
      to: "noreply@neonhrgroup.com",
      subject: "Consultation Request",
      text: `Name: ${yourName}
Email: ${email}
Phone: ${phone}
Message: ${message}
Are: ${are}
Company: ${company}
Event Name: ${eventName}
Event Link: ${eventLink}
Industry: ${industry}
Event Location: ${eventLocation}
Event Date: ${eventDate}
Event Topic: ${eventTopic}
Type of Participation: ${participationType}`,
    };

    const mailOptionsClient = {
      from: '"Neonhrgroup" <noreply@neonhrgroup.com>',
      to: email,
      subject: "Neonhrgroup: Your Application Received",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif;">
          <thead>
            <tr>
              <th style="background-image: url('https://neonhrgroup.com/images/email-header.jpg'); background-size: contain; background-position: center center; background-repeat: no-repeat; height: 102px;"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
                <h2 style="text-align: left; font-size: 20px;">Dear ${yourName},</h2>
                <p style="font-size: 16px; line-height: 19px;">Thank you for your interest in joining Neonhrgroup. We’re pleased to confirm that we have received your application.</p>
                <p style="font-size: 16px; line-height: 19px;">Our team is currently reviewing the details and will be in touch with you shortly to discuss the next steps. In the meantime, feel free to reach out to us if you have any questions or need assistance.</p>
                <p style="font-size: 16px; line-height: 19px;">Thank you for choosing Neonhrgroup, and we look forward to connecting with you soon.</p>
                <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                  Best regards,<br>
                  The Neonhrgroup Team
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="width: 50%; background-image: url('https://neonhrgroup.com/images/email-footer.jpg'); background-size: contain; background-position: center; background-repeat: no-repeat; height: 102px; text-align: center; padding: 0;">
                <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
                  <tr>
                    <td></td>
                    <td style="width: 50%; text-align: start; vertical-align: middle;">
                      <ul style="margin:0;padding:0;">
                        <li style="list-style: disc; color: #1E40AF; font-size: 10px; line-height: 12px;"><b>Registration:</b> <span style="color: #000000;">86-90 Paul Street, London, <br> Greater London, England, EC2A 4NE</span></li>
                        <li style="list-style: disc; color: #1E40AF; font-size: 10px; line-height: 12px;"><b>Email:</b> <a href="mailto:info@neonhrgroup.com" style="color: #000;">info@neonhrgroup.com</a></li>
                        <li style="list-style: disc; color: #1E40AF; font-size: 10px; line-height: 12px;"><b>Phone:</b> <a href="tel:+447482191976" style="color: #000;">+447482191976</a></li>
                      </ul>
                    </td>
                  </tr>
                </table>
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