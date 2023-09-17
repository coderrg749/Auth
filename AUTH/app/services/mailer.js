"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendOtp(otp, email) {
  // console.log(otp, email);
  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASS,
    },
  });
  let mailDetails = {
    from: process.env.MAIL_ID, // sender address
    to: `${email}`, // list of receivers
    subject: `Email Verification`, // Subject line
    text: `This is otp: and will expire in 5 minutes`, // plain text body
    html: `<b>This is the signup otp ${otp}?</b>`, // html body
  };
  const info = await mailTransporter.sendMail(mailDetails);
  // INFO CONTAIN ALOT OF THINGS AS RESPONSE BELOW ARE FEW WHICH WE CHECK 
  if(info.response.split(' ')[0]==="250"&&info.response.split(' ')[2]==="OK"){
    console.log(`Message sent successfully!`);
    return true;
  }else{
    return false
  } 
}

module.exports = sendOtp;
