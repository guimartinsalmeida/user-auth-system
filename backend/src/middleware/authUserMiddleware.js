const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require('dotenv').config();
const secret = process.env.SECRET;

const checkToken = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    jwt.verify(token, secret);
    req.user = decoded;
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
    return res.status(422).json({ message: "Email is mandatory" });
  }
  if (!password) {
    return res.status(422).json({ message: "Password is mandatory" });
  }
  if (password !== confirmpassword) {
    return res.status(422).json({ message: "Passwords do not match" });
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
    return res.status(422).json({ message: "Email is mandatory" });
  }
  if (!password) {
    return res.status(422).json({ message: "Password is mandatory" });
  }
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(422).json({ message: "User not found, try another email or password" });
  }
  req.user = user;
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(401).json({ message: "Password is not valid" });
  }
  next();
};


const validateAdmin = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    if (!decoded.isAdmin) {
      return res.status(403).json({ message: "Access Denied: Admins Only" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = {
  checkToken,
  validateUserCreation,
  validateUserLogin,
  validateAdmin
};
