require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const log = require('../middleware/log');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.sendEmail = async (sender, receiver, subject, message) => {
    console.log("hit the sendEmail function in emailService.js, attempting to send");
    const msg = {
        to: sender, // Change to your recipient
        from: process.env.FROM_EMAIL, // Change to your verified sender
        subject: subject,
        text: message,
        html: message,
    }
    try {
        sgMail.send(msg);
        log.Info("Sending Email through Send Grid API");
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.log(error.response.body);
        }
    }
}