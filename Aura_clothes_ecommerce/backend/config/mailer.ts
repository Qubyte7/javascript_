import nodemailer from 'nodemailer';

//configure the transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,

    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})

interface MailOptions {
    from: string;
    to: string;
    subject: string;
    text?: string; // Plain text body
    html?: string; // HTML body
  }
  
  export const sendEmail = async ({toEmail}:{toEmail:string}) => {
    try {
      await transporter.sendMail({
        from: `"Aura Shoe commerce" <${process.env.EMAIL_USER}>`, // Sender address
        to: toEmail, // Recipient
        subject: "Welcome", // Subject line
        text:"", // Plain text body
        html: "<h1>Welcome</h1>", // HTML body (optional)
      });
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  };