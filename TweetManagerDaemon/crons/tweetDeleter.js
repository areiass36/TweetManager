const user = require("../models/user");
const twitterService = require("../services/twitterServices");

async function tweetDeleter() {
    const users = await user.find({});
    users.forEach(async u => {
        const tweets = await twitterService.getUserLastTweets(u);

        tweets.forEach(async t => {
            await twitterService.tryDeleteTweet(t, u.accessToken);
            await user.updateOne({ _id: u._id }, { deletedTweetsCount: ++u.deletedTweetsCount });
        })
    });
}

module.exports = tweetDeleter;