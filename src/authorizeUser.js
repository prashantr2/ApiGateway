const axios = require('axios');
const { AUTH_SERVICE_URL } = require('./serverConfig');

const authorizeUser = async(req, res, next) => {
    try {
        const response = await axios.get(`${AUTH_SERVICE_URL}/api/v1/isAuthenticated`, {
            headers: {
                'x-access-token': req.headers['x-access-token'],
            }
        });
        if (response.data.success) {
            next();
        } else {
            res.status(401).json({
                msg: 'Unauthorized'            
            })
        }
    } catch (error) {
        res.status(401).json({
            msg: 'Unauthorized'            
        })
    }
}

module.exports = authorizeUser;