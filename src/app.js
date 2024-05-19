const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const emailRoutes = require('./email/emailRoutes');
const textMessageRoutes = require('./textmessage/textmessageRoutes');
const phoneCallRoutes = require('./phonecall/phonecallRoutes');

app.use('/api/email', emailRoutes);
app.use('/api/textmessage', textMessageRoutes);
app.use('/api/phonecall', phoneCallRoutes);

module.exports = app;  