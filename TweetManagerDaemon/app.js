const config = require("./configs/baseConfig");
const cron = require("node-cron");

const mongoose = require('mongoose');
mongoose.connect(config.MONGO_CONNECTION_STRING);

require("./crons/tweetDeleter")();

//cron.schedule("* * * * * *", require("./crons/tweetDeleter"));

