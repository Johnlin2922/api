const emailService = require("./emailService");

exports.sendEmail = (req, res) => {
    res.send("Attempting to send email");
};