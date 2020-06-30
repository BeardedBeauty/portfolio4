const nodemailer = require('nodemailer');
var app = express();

let transporter = nodemailer.createTransport({
    //     service: "gmail",
    host: 'smtp.gmail.com',
    auth: {
        user: "john.w.ochs0@gmail.com",
        pass: ""
    }
});

let mailOptions = {
    from: "?",
    to: "john.w.ochs0@gmail.com",
    subject: "portfolio message",
    text: 'yeet yeet mcskeet'
};

transporter.sendMail(mailOptions, (err, data) => {
    err ? console.log(err) : console.log("mailed");
});