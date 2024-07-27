const secret = process.env.SECRET;
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const checkToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }
  try {
    jwt.verify(token, secret);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Invalid Token" });
  }
  
};
const validateUserCreation = async (req, res, next) => {
  const { name, email, password, confirmpassword } = req.body;

  if (!name) {
    return res.status(422).json({ message: "Name is mandatory" });
  }
  if (!email) {
    return res.status(422).json({ message: "email is mandatory" });
  }
  if (!password) {
    return res.status(422).json({ message: "password is mandatory" });
  }
  if (password !== confirmpassword) {
    return res.status(422).json({ message: "Password is no the same" });
  }
  const userExist = await User.findOne({ email });

  if (userExist) {
    return res.status(422).json({ message: "Use another email" });
  }
  next();
};

const validateUserLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(422).json({ message: "email is mandatory" });
  }
  if (!password) {
    return res.status(422).json({ message: "password is mandatory" });
  }
  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(422)
      .json({ message: "User not found, try another email or password" });
  }

  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(401).json({ message: "password is not valid" });
  }
  next();
};
module.exports = {
  checkToken,
  validateUserCreation,
  validateUserLogin,
};
