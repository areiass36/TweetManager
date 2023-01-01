const config = require('../configs/baseConfig');
const axios = require('../configs/axiosConfig');

exports.getUser = async (req, res) => {

    axios.defaults.headers.common['Authorization'] = `Bearer ${config.TWITTER.BEARER_TOKEN}`;

    try {
        const result = await axios.get(`/tweets?ids=1602634446347304960`,);
        res.send(result.data);
        return;
    } catch (e) {
        res.send(e);
        return;
    }

}