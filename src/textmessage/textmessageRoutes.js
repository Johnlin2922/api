const express = require('express');
const router = express.Router();
const textMessageController = require('./textmessageController');
const log = require('../middleware/log');

const logger = (req, res, next) => {
    log.Info("TextMessage API request received");
    next();
    log.Info("TextMessage API request handled");
    res.send("TextMessage Sent Successfully");
}

router.use(logger);

router.post('/', textMessageController.sendTextMessage);

module.exports = router;