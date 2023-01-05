const config = require("../configs/baseConfig");
const axios = require("../configs/axiosConfig");

const user = require('../models/user');

const twitterServices = require("../services/twitterServices");

exports.authenticateOnTwitter = async (req, res) => {
    const token = req.headers.authorization.split("Bearer ")[1];
    if (!token)
        return res.status(400).send("No token was passed by");

    const userData = await twitterServices.authenticateUser(token);
    if (!userData)
        return res.status(400).send("Unable to retrieve user data");

    const hasUser = (await user.findById(userData._id)) != null;
    if (hasUser)
        await user.updateOne({ _id: userData._id }, userData);
    else
        await user.create(userData);

    res.send({
        _id: userData._id,
        username: userData.username,
        name: userData.name,
        profileImageUrl: userData.profileImageUrl,
    });
};