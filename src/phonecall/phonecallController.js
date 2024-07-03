const phonecallService = require("./phonecallService");
const log = require('../middleware/log');

const validateRequest = (req, res, requiredFields) => {
    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).send({ error: `${field} is required` });
        }
    }
}

exports.sendPhoneCall = (req, res) => {
    const requiredFields = ['from_number', 'to_number', 'body'];

    const validationError = validateRequest(req, res, requiredFields);

    const fromNumber = req.body.from_number;
    const toNumber = req.body.to_number;
    const twmilContent = req.body.body;

    if (validationError) {
        log.Error("Unable to handle Request, some fields missing");
    }

    phonecallService.sendPhoneCall(fromNumber, toNumber, twmilContent)
};