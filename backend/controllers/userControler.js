const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// create a token logic
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "2d" });
};

// We want to write a signUp and LOgin logic
const register = async (req, res) => {
  const { email, password, userName } = req.body;
  try {
    const user = await User.signup(email, password, userName);
    const token = createToken(user._id);
    res.cookie(
      { token: token },
      {
        withCredentials: true,
        httpOnly: false,
      }
    );
    res.status(200).json({ userName, token });
    console.log(token);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log({ error });
  }
};
// the login logic
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signin(email, password);
    const token = createToken(user._id);
    res.cookie(
      { token: token },
      {
        withCredentials: true,
        httpOnly: false,
      }
    );
    res.status(200).json({ email, token });
    console.log(email);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log({ error });
  }
};

// Logout logic
const logout = (req,res) => {
  res.cookie('token', '').json(true)
}
module.exports = { register, login, logout };
