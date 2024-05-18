const emailService = require("./emailService");

exports.sendEmail = (req, res) => {
    const fromEmail = req.body.from_email;
    const toEmail = req.body.to_email;
    const subject = req.body.subject;
    const content = req.body.msg;
    emailService.sendEmail(fromEmail, toEmail, subject, content)
};