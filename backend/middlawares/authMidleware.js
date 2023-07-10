const User = require('../models/userModel');
require('dotenv').config();
const jwt = require('jsonwebtoken')

// This middlare checks if a user has accss to the router bt checking if the token is a match
// the function
const userVerification = (req, res) => {
  // return res.json('peaple pinaple')
    const token = req.cookies.token
    if (!token) {
      return res.json({ status: false })
    }
    jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
      if (err) {
       return res.json({ status: false })
      } else {
        const user = await User.findById(data.id)
        if (user) return res.json({ status: true, user: user.userName })
        else return res.json({ status: false })
      }
    })
    // METHOD TWO

    // const { token } = req.cookies;
    // if(token){
    //   jwt.verify(token, process.env.JWT_SECRET, async(err, data) => {
    //     if(err) throw err;
    //     const { userName, email, _id} = await User.findById(data.id)
    //     res.json({userName, email, _id});
    //   })
    // } else {
    //   return res.json({error})
    // }
  }

module.exports = { userVerification }