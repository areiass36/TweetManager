const config = require('./configs/baseConfig');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(config.MONGO_CONNECTION_STRING);
const express = require('express');
const app = express();

app.use(cors());
app.use("/user", require('./routes/user'));
app.use("/auth", require('./routes/auth'));

app.listen(config.PORT, () => {
    console.log(
        `Server is running on port: ${config.PORT}`,
        `\nRunning environment: ${config.ENVIRONMENT}`,
        `\nHappy new year!`);
});