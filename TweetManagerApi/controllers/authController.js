const config = require("../configs/baseConfig");
const axios = require("../configs/axiosConfig");

const mongoose = require('mongoose');

const twitterServices = require("../services/twitterServices");

exports.authenticateOnTwitter = async (req, res) => {
    const token = req.headers.authorization.split("Bearer ")[1];
    if (!token)
        return res.status(400).send("No token was passed by");

    const userData = await twitterServices.authenticateUser(token);
    if (!userData)
        return res.status(400).send("Unable to retrieve user data");

    mongoose.connect(config.MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });


    res.send("OK :)");
};