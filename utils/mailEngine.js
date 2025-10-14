import nodemailer from "nodemailer";
import { jobMailTemplate } from "../templates/jobMail.js";
import path from "path";

export const sendEmail = async (
  to,
  subject,
  recipientName,
  role,
  skills,
  customMessage,
  applicantName,
  applicantRole,
  applicantEmail,
  applicantPhone,
  companyName
) => {
  try {
    const resumePath = path.resolve(
      "uploads/Vaishnav_SN-MERN-Stack-SDE_Resume.pdf"
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const jobMail = jobMailTemplate(
      subject,
      recipientName,
      role,
      skills,
      customMessage,
      applicantName,
      applicantRole,
      applicantEmail,
      applicantPhone,
      companyName
    );

    const mailOptions = {
      from: `"Vaishnav SN" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: jobMail,
      attachments: [
        {
          filename: "Vaishnav_SN-MERN_DEV_Resume.pdf",
          path: resumePath,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
  }
};
