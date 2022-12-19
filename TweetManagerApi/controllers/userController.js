const config = require('../configs/baseConfig');
const axios = require('../configs/axiosConfig');

exports.getUser = (req, res) => {
    axios.get(`/tweets`).then((resp) => {
        console.log(resp);
    });
}