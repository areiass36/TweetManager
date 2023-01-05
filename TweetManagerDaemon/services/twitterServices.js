const axios = require('../configs/axiosConfig');
const config = require('../configs/baseConfig');

exports.getUserLastTweets = async (user) => {
    try {
        const result = await getLastTweets(user._id, user.accessToken);
        return result.map(r => r.id);
    } catch (e) {
        console.log(e);
    }
    return [];
}

exports.tryDeleteTweet = async (id, accessToken) => {
    try {
        const sla = await deleteTweet(id, accessToken);
        return true;
    } catch (e) {
        console.log(e);
    }
    return false;
};

async function deleteTweet(id, accessToken) {
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
    };

    return (await axios.delete(`/tweets/${id}`, { headers })).data;
}

async function getLastTweets(id, accessToken) {
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
    };

    return (await axios.get(`/tweets/search/recent?query=from:${id}&max_results=100`, { headers })).data.data;
}
