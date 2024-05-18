const express = require('express');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log("triggering next");
    next();
    console.log("completee");
})
const emailRoutes = require('./email/emailRoutes');
app.use('/api/email', emailRoutes);

module.exports = app;  