const sgMail = require('@sendgrid/mail');
const log = require('../middleware/log');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.sendPhoneCall = async () => {
    log.Info("Phone Call Service, sending api request")
}