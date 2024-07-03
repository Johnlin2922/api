const log = require('../middleware/log');
const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSID, authToken);

exports.sendPhoneCall = async (fromNumber, toNumber, twmilContent) => {
    log.Info("Phone Call Service, sending api request");
    log.Info(`attempting to make call from ${fromNumber} to ${toNumber} with content ${twmilContent}`);
    client.calls.create({
        from: fromNumber,
        to: toNumber,
        twiml: twmilContent
    }, (error, call) => {
        if (error) {
            log.Error(error);
        }
        else {
            log.Info(call.sid);
        }
    });
}