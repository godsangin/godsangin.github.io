// import { createTransport } from 'nodemailer';
//let nodemailer = require("nodemailer");
import * as nodemailer from 'nodemailer';
let senderInfo = require('../config/senderInfo.json');
//import senderInfo from '../config/senderInfo.json';
// 메일발송 객체
export let mailSender = {
  // 메일발송 함수
  sendGmail: function (param) {
    console.log(param+"가져옴");
    let transporter = nodemailer.createTransport({
      service: 'gmail',   // 메일 보내는 곳
      prot: 587,
      host: 'smtp.gmail.com',  
      secure: false,  
      requireTLS: true ,
      auth: {
        user: senderInfo.user,  // 보내는 메일의 주소
        pass: senderInfo.pass   // 보내는 메일의 비밀번호
      }
    });
    // 메일 옵션
    let mailOptions = {
      from: senderInfo.user, // 보내는 메일의 주소
      to:senderInfo.user, // 수신할 이메일
      subject: "내쓰플 문의입니다", // 메일 제목
      text: param // 메일 내용
    };
    console.log(mailOptions);
    // 메일 발송    
    transporter.sendMail(mailOptions, function (error, info) {
      console.log("sendmail 실행됨");
      console.log(mailOptions);
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  }
}


module.exports = mailSender;