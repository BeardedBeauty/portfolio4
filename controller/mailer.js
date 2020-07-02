const nodemailer = require('nodemailer');
require("dotenv").config();
const nodeMailerPassword = process.env.mailer
// var app = express();

module.exports = {
    send: function (req, res) {
        let transporter = nodemailer.createTransport({
            //     service: "gmail",
            host: 'smtp.gmail.com',
            auth: {
                user: "john.w.ochs0@gmail.com",
                pass: nodeMailerPassword
            }
        });

        let mailOptions = {
            from: "",//req.body.email,
            to: "infraredbob@gmail.com",
            subject: `${req.body.name} ${req.body.email}`,
            text: req.body.content
        };

        transporter.sendMail(mailOptions, (err, body) => {
            console.log(res)
            if (err) throw err
            else { res.body = body };
        });
    }
}