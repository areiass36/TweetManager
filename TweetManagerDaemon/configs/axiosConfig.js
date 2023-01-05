const axios = require('axios');
const config = require('./baseConfig');

axios.defaults.baseURL = config.TWITTER.BASE_URL;

axios.interceptors.request.use(request => {
    //console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
});

module.exports = axios;
