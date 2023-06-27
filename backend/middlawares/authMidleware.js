const User = require('../models/userModel');
require('dotenv').config();
const jwt = require('jsonwebtoken')

// This middlare checks if a user has accss to the router bt checking if the token is a match
// the function
const userVerification = (req, res) => {
    const token = req.cookies.token;
    if(!token){
        return res.json({status:false})
    };
    jwt.verify(token, process.env.JWT_SECRET, async (err, data ) => {
        if(err){
            return res.json({status:false})
        } else {
            const user = await User.findById(data._id)
            if(user){
                return res.json({status: true, user: user.userName})
            } else return res.json({status: false})
        };
    });

};

module.exports = { userVerification }