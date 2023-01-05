const axios = require('../configs/axiosConfig');
const config = require('../configs/baseConfig');

exports.authenticateUser = async (userCode) => {
    try {
        const auth = await generateAccessToken(userCode);
        const user = await getUserData(auth.access_token);
        return {
            _id: user.id,
            username: user.username,
            name: user.name,
            accessToken: auth.access_token,
            profileImageUrl: user.profile_image_url,
            refreshToken: auth.refresh_token,
            deletedTweetsCount: 0
        };
    }
    catch (e) {
        console.log(e);
    }
    return null;
}

async function generateAccessToken(code) {
    const headers = {
        'Authorization': `Basic ${config.TWITTER.BASIC_AUTH}`,
        'content-type': 'application/x-www-form-urlencoded'
    }

    const body = {
        'code': code,
        'grant_type': 'authorization_code',
        'client_id': config.TWITTER.CLIENT_ID,
        'redirect_uri': config.SPA_URL,
        'code_verifier': 'challenge'
    }

    return (await axios.post('oauth2/token', body, { headers })).data;
}

async function getUserData(accessToken) {
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
    };

    return (await axios.get('users/me?user.fields=description,profile_image_url', { headers })).data.data;
}