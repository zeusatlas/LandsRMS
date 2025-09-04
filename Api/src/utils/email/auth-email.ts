import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import moment from 'moment';
import { generateUserActionHTML } from './templates/accountEmailTemp';
import { schoolTemplate } from './templates/schoolTemplate';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

interface UserActionEmailRequest {
  action: string;
  message: string;
  code?: string;
  to: string;
}

interface SchoolEmailRequest {
  action: string;
  message: string;
  to: string;
  authorizer?: string,
  postion?: string
}

export const sendAccountEmailEmail = async (req: UserActionEmailRequest) => {
  try {
    const html = generateUserActionHTML({
      action: req.action,
      message: req.message,
      code: req.code, // optional
      date: moment().format('DD-MM-YYYY'),
      authorizerName: "Florence Ayisi Tieku",
      authorizerPosition: 'Product Manager',
    });

    const mailOptions = {
      from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
      to: req.to,
      subject: req.action,
      html,
      replyTo: 'no-reply@invalid.com',
    };

    await transporter.sendMail(mailOptions);

  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('We were unable to send the email at this time. Please try again later.');
  }
};

export const sendSchoolEmailService = async (req: SchoolEmailRequest) => {
  try {
    const html = schoolTemplate({
      action: req.action,
      message: req.message,
      date: moment().format('DD-MM-YYYY'),
      authorizer: req.authorizer || 'Florence Ayisi Tieku',
      position: req.postion || 'Product Manager',
    });

    const mailOptions = {
      from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
      to: req.to,
      subject: req.action,
      html,
      replyTo: 'no-reply@invalid.com',
    };

    await transporter.sendMail(mailOptions);

  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('We were unable to send the email at this time. Please try again later.');
  }
};
