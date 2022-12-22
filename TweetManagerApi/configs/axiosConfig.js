const axios = require('axios');
const config = require('./baseConfig');

axios.defaults.baseURL = config.TWITTER.BASE_URL;
//axios.defaults.headers.common['Authorization'] = `Bearer ${config.TWITTER.BEARER_TOKEN}`;

axios.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
})

module.exports = axios;
