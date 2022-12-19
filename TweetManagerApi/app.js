const config = require('./configs/baseConfig');

const express = require('express');
const app = express();

app.use("/user", require('./routes/user'));

app.listen(config.PORT, () => {
    console.log(`Server is running on port: ${config.PORT}`, `\nRunning environment: ${config.ENVIRONMENT}`);
});