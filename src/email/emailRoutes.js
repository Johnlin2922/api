const express = require('express');
const router = express.Router();
const emailController = require('./emailController');
const log = require('../middleware/log');

const logger = (req, res, next) => {
    log.Info("Email API request received");
    next();
    log.Info("Email API request handled");
    res.send("Email Sent Successfully");
}

router.use(logger);

router.post('/', emailController.sendEmail);

module.exports = router;