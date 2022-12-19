const axios = require('axios');
const config = require('./baseConfig');

axios.defaults.baseUrl = config.TWITTER.BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${config.TWITTER.BEARER_TOKEN}`;

module.exports = axios;
