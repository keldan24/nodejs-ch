const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'my-mail@gmail.com',
        pass: 'mypassword'
    }
});

const mailOptions = {
    from: 'my-mail@gmail.com',
    to: 'recipients@gmail.com',
    subject: 'Test Email',
    text: 'Hello, this is a test email sent from Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
