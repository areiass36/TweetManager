require('dotenv').config();

console.log("Base url " + process.env.TWITTER_BASE_URL);

module.exports =
{
    PORT: process.env.PORT || 3000,
    ENVIRONMENT: process.env.ENVIRONMENT || "Development",
    TWITTER: {
        BASE_URL: process.env.TWITTER_BASE_URL,
        API_KEY: process.env.TWITTER_API_KEY,
        API_KEY_SECRET: process.env.TWITTER_API_KEY_SECRET,
        BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN,
        USER_ACCESS_TOKEN: process.env.USER_ACCESS_TOKEN,
        USER_ACCESS_TOKEN_SECRET: process.env.API_KEY_SECRET
    }
};