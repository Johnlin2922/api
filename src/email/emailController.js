const emailService = require("./emailService");

const validateRequest = (req, res, requiredFields) => {
    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).send({ error: `${field} is required` });
        }
    }
}

exports.sendEmail = (req, res) => {

    const requiredFields = ['from_email', 'to_email', 'subject', 'msg'];

    const validationError = validateRequest(req, res, requiredFields);

    if (validationError) {
        log.Error("Unable to handle Request, some fields missing");
    }

    try {
        const fromEmail = req.body.from_email;
        const toEmail = req.body.to_email;
        const subject = req.body.subject;
        const content = req.body.msg;
        emailService.sendEmail(fromEmail, toEmail, subject, content)
    }
    catch (error) {
        res.send("Invalid format, Please check with John")
    }
};