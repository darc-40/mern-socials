const User = require('../models/userModel');
const jwt = require('jsonwebtoken')


// create a token logic
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn:'2d'});
} 

// We want to write a signUp and LOgin logic 
const register =  async (req, res) => {
    const {email, password, userName } = req.body;
    try {
        const user = await User.signup(email,password, userName);
        const token = createToken(user._id)
        res.cookie({"token":token }, {
            withCredentials:true,
            httpOnly:false
        });
        res.status(200).json({userName, token});
        console.log(token)
    } catch (error) {
        res.status(400).json({error})
        console.log({msg:error})
    }
    
};
module.exports = { register }