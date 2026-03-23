const nodemailer = require("nodemailer");

async function sendNotification(to, subject, text) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: songshuang.lyk ,
        pass: lyk4gmail,
      },
    });

    const info = await transporter.sendMail({
      from: "mercari-notification",
      to,
      subject,
      text,
    });
    console.log(info);
  } catch (e) {
    console.error(e);
  }
  console.log("sentNotification done");
}

module.exports = { sendNotification };
