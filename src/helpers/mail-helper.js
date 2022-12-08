const nodemailer = require("nodemailer");

class MailHelper {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
        });
    }

    async sendMail(receiver, subject, text = "", html = "") {
        return this.transporter.sendMail({
            from: process.env.MAIL_USER,
            to: receiver,
            subject: subject,
            text: text,
            html: html,
        });
    }
}

module.exports = new MailHelper();
