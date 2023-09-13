const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '<EMAIl>',
        pass: '<PASSWORD>'
    }
});

app.post('/sendCode', (req, res) => {
    console.log('Received request to send code:', req.body);
    const email = req.body.email;
    const code = Math.floor(1000 + Math.random() * 9000);

    const mailOptions = {
        from : "noreply@gmail.com",
        to: email,
        subject: 'Verification Code',
        text: `Your verification code is: ${code}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.status(500).send(error.message);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Code sent successfully!!!');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });