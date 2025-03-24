import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

const formatArray = (arr) =>
  Array.isArray(arr) ? arr.map((item) => item?.value || item).join(", ") : arr || "Not specified";

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
      website,
      industry,
    } = bodyJSON;

    const formattedAre = formatArray(are);

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
      to: process.env.RECIPIENT_EMAIL || "noreply@neonhrgroup.com",
      subject: "Consultation Request",
      text: `Name: ${yourName}
Email: ${email}
Phone: ${phone}
Message: ${message}
Are: ${formattedAre} 
Company: ${company}
Event Name: ${website}
Industry: ${industry}`,
    };

    const mailOptionsClient = {
      from: '"Neonhrgroup" <noreply@neonhrgroup.com>',
      to: email,
      subject: "Neonhrgroup: Your Application Received",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif;">
          <thead>
            <tr>
              <th style="background-image: url('https://neonhrgroup.com/images/letter-top.jpg'); background-size: contain; background-position: center center; background-repeat: no-repeat; height: 102px;"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
              <p style="font-size:24px;color:#FF5900;font-weight:700;">Request Received </p>
              <br>
              <br>
                <h2 style="text-align: left; font-size: 20px;">Dear ${yourName},</h2>
                <p style="font-size: 16px; line-height: 19px;">Thank you for submitting your HR consultation request at Neon HR Group. We have received your inquiry, and our team is already reviewing it.</p>
                <br>
                <br>
                <p style="font-size: 16px; line-height: 19px;">We will contact you via your preferred method of communication as soon as possible. If you have any urgent questions, feel free to contact us.</p>
                <br>
                <br>
                <p style="font-size: 16px; line-height: 19px;">Looking forward to assisting you.</p>
                <br>
                <br>
                <p style="font-size: 24px; line-height: 28px; font-weight: 700;">
                  Best regards,<br>
                  <span color: #FF5900;font-size: 24px; line-height: 28px; font-weight: 700;>The Neonhrgroup Team</span>
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="width: 50%; background-image: url('https://neonhrgroup.com/images/letter-bottom.jpg'); background-size: contain; background-position: center; background-repeat: no-repeat; height: 102px; text-align: center; padding: 0;">
                <ul style="margin:0;padding:0;display: flex; align-items:center;">
                  <li style="list-style: disc; color: #9DA3BB; font-size: 12px; line-height: 14px;">Phone: <br> <a href="tel:+10000000000">+1(000) 000-0000</a></li>
                  <li style="list-style: disc; color: #9DA3BB; font-size: 12px; line-height: 14px;">Email: <br> <a href="mailto:info@neonhrgroup.com" style="color: #ffffff; font-size:12px;line-height:14px;">info@neonhrgroup.com</a></li>
                </ul>
              </td>
            </tr>
          </tfoot>
        </table>
      `,
    };

    // Отправка писем
    await transporter.sendMail(mailOptionsRecipient);
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}
