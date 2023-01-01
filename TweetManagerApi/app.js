const config = require('./configs/baseConfig');
const cors = require('cors');

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