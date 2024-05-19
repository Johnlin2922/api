const textMessageService = require("./textmessageService");

exports.sendTextMessage = (req, res) => {
    textMessageService.sendTextMessage(req)
};