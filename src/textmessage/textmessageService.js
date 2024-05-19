const sgMail = require('@sendgrid/mail');
const log = require('../middleware/log');

//sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.sendTextMessage = async () => {
    log.Info("Text Message Service, sending api request")
}