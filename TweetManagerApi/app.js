require('dotenv').config();

const config =
{
    PORT: process.env.PORT || 3000,
    ENVIRONMENT: process.env.ENVIRONMENT || "Development"
};

const express = require('express');
const app = express();

app.use("/user", require('./routes/user'));

app.listen(config.PORT, () => {
    console.log(`Server is running on port: ${config.PORT}`, `\nRunning environment: ${config.ENVIRONMENT}`);
});