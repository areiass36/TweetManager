const config = require('./configs/baseConfig');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

mongoose.connect(config.MONGO_CONNECTION_STRING);

const express = require('express');
const app = express();

const specs = swaggerJsdoc(require("./configs/swaggerConfig"));
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);

app.use(cors());
app.use("/user", require('./routes/user'));
app.use("/auth", require('./routes/auth'));

app.listen(config.PORT, () => {
    console.log(
        `Server is running on port: ${config.PORT}`,
        `\nRunning environment: ${config.ENVIRONMENT}`,
        `\nHappy new year!`);
});