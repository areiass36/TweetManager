const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        _id: String,
        username: { type: String, required: true },
        name: { type: String, required: true },
        accessToken: { type: String, required: true },
        profileImageUrl: { type: String, required: true },
        refreshToken: { type: String, required: true },
        deletedTweetsCount: { type: Number, required: true }
    },
    {
        collection: "user"
    }
)

const user = mongoose.model("user", userSchema);
module.exports = user;