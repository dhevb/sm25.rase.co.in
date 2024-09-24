import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import qr from "qrcode";

interface FormData {
  name: string;
  PaperTitle?: string; // Making PaperTitle optional
  // Add other properties here as needed
}

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    console.log("Request body:", reqBody); // Log the request body to debug
    const { email, formData } = reqBody as {
      email: string;
      formData: FormData;
    };

    if (!formData) {
      throw new Error("formData is undefined");
    }

    console.log("formData:", formData); // Log the formData to debug

    // Extract name and PaperTitle from formData
    const { name, PaperTitle } = formData;

    if (!name) {
      throw new Error("name is undefined");
    }

    // Generate QR code data
    const qrCodeData = { ...formData, name };

    // Convert qrCodeData to a string
    const qrCodeDataString = JSON.stringify(qrCodeData);

    // Generate QR code
    const qrDataURL = await qr.toDataURL(qrCodeDataString);

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "rase@nitsri.ac.in",
        pass: "srtnizrkhvpingdy",
      },
    });

    // Email options
    const mailOptions = {
      from: "holisticeducation052021@gmail.com",
      to: email,
      subject:
        "Submission Reminder, Accommodation Registration, and Attendance Mode Confirmation",
      html: `
       <p style="font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; color: #a52a2a; ">Department of Holistic Education</p>
      <img src="https://i.pinimg.com/736x/58/1b/c2/581bc29d2d2454f96c1fce932af83462.jpg" alt="QR Code" style="display: block; height:60px; width: 60px; align-items: center; margin: 20px auto;">
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">Dear, ${name}</p>
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">We hope this message finds you well.</p>
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">We are pleased to inform you that the RASE 2024 Programme Schedule is now available on our website. You can view it here: <a href="https://sk24.rase.co.in/raseschdule.pdf">RASE 2024 Programme Schedule</a>.</p>
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">If you require accommodation, please register yourself on our website <a href="https://ac.rase.co.in">RASE Accommodation</a> and send us your details. If you have already submitted your accommodation request, kindly send your details in response to this email as well.</p>
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">For participants attending in offline mode, please ensure you carry a government ID proof, such as an Aadhaar card, for security reasons.</p>
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">Please note that the paper presentation is scheduled for June 30, 2024.</p>
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">Thank you for your prompt attention to these matters. We look forward to your participation in RASE 2024.</p>
      <p style="font-family: Arial, sans-serif; text-align: right; font-size: 14px; font-weight: bold; color:#a52a2a; ">Warm Regards</p>
      <p style="font-family: Arial, sans-serif; text-align: right; font-size: 14px; font-weight: bold; color:#a52a2a; ">Dr. Thakur SKR</p>
      <p style="font-family: Arial, sans-serif; text-align: right; font-size: 14px; font-weight: bold; color:#a52a2a; ">(Conference Director)</p>
      <p style="font-family: Arial, sans-serif; text-align: right; font-size: 14px; font-weight: bold; color:#a52a2a; ">Sci/Engr-SF, ISRO and Director, DHE & VBITR </p>
      <p style="font-family: Arial, sans-serif; text-align: right; font-size: 14px; font-weight: bold; color:#a52a2a; ">7627888222 | 60054 95506 | rase@nitsri.ac.in | info@rase.co.in | www.raseconferences.com</p> 
      `,
      attachments: [
        {
          filename: "qr.png",
          content: qrDataURL.split(";base64,").pop(),
          encoding: "base64",
        },
      ],
    };

    // Send mail
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Internal error" });
  }
}

export const dynamic = "force-static";
