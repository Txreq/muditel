const fs = require("fs");
const nodemailer = require("nodemailer");

// loading html template
let htmlTemplate = fs.readFileSync("./templates/message.html", "utf-8");

const template = (senderName, senderEmail, date, messageContent) => {
    return htmlTemplate
        .replace(/{senderName}/g, senderName)
        .replace(/{senderEmail}/g, senderEmail)
        .replace(/{date}/g, date)
        .replace(/{messageContent}/g, messageContent);
};

// configuring transporter
let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: "SSLv3",
    },
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});

// send email function
const sendEmail = async (req, res, msg) => {
    try {
        let info = await transporter.sendMail({
            from: `${msg?.sender.name} <${process.env.EMAIL}>`,
            to:
                typeof msg?.to == "undefined"
                    ? "tareqdev.17@gmail.com"
                    : msg?.to,
            subject: msg?.subject,
            html: template(
                msg?.sender.name,
                msg?.sender.email,
                new Date(),
                msg?.content
            ),
        });

        return info;
    } catch (err) {
        return err;
    }
};

module.exports = { sendEmail };
