const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const emailRoutes = require('./email/emailRoutes');

app.use('/api/email', emailRoutes);

module.exports = app;  