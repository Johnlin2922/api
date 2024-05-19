const express = require('express');
const router = express.Router();
const phonecallController = require('./phonecallController');
const log = require('../middleware/log');

const logger = (req, res, next) => {
    log.Info("PhoneCall API request received");
    next();
    log.Info("PhoneCall API request handled");
    res.send("PhoneCall Sent Successfully");
}

router.use(logger);

router.post('/', phonecallController.sendPhoneCall);

module.exports = router;