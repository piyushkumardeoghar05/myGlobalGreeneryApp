const nodemailer = require('nodemailer');

module.exports.MailSender = async function MailSender (str,data){
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bhanu0312pratap@gmail.com',
        pass: 'knqwlhscvwqkrurl'
      }
    });
    let Ohtml,Osubject,Otext;
    if(str=='signup'){
      Osubject=`Thank You for Signing In ${data.name}`;
      Ohtml=`
      <h1>Welcome to Global Greenery</h1>
      Hope you have a good time
      `;

    }
    else if(str=='forgotPassword'){
      console.log(data.resetPassswordLink);
      Osubject=`Reset Password`;
      Ohtml=`
      <h1>Global Greenery</h1>
      Hi, ${data.name} Here is your link to reset password ! ${data.resetPassswordLink}

      `;
    }
    const mailOptions = {
      from: '"Global Greenery"<bhanu0312pratap@gmail.com>',
      to: data.email,
      subject: Osubject,
      html:Ohtml 
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
     console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        // do something useful
      }
    });
  }
   
