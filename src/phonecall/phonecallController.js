const phonecallService = require("./phonecallService");

exports.sendPhoneCall = (req, res) => {
    phonecallService.sendPhoneCall(req)
};