const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config()
const secret = process.env.SECRET;

const handleError =  (err) =>{
  console.log(err.message)
  let errors = '' 
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    errors = `This ${field} is already registered`;
  } else if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors = properties.message;
    });
  }
  return errors
}

exports.welcome = async (_req, res)=>{
  return res.json({message: 'Welcome to the api'})
}
exports.welcomeAdmin = async (_req, res)=>{
  return res.json({message: 'Welcome Admin'})
}

exports.findAll = async (_req,res)=>{
  try {
    const users = await User.find({}, '-password')
    if (!users) {
      res.status(404).json({ message: "Users not found" });
    }
    res.status(200).json({ users });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' });
  }
}

exports.findUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id, "-password");
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
  
};

const maxAge = 3 * 24 * 60 * 60
const createToken = ( id) =>{
  return jwt.sign({id}, secret,{
    expiresIn: maxAge
  })
}

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
    const user = await User.create({name,email,password: passwordHash});
    const token = createToken(user._id)
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000, sameSite: 'Lax'})
    await user.save();
    res.status(201).json({ user: user._id});
  } catch (error) {
    const errors = handleError(error);
    res.status(400).json({errors});
  }
};

exports.login = async (req, res) => {
   try {
    const user = req.user
    const token = createToken(user._id)
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000, sameSite: 'Lax'})
    await user.save();
    res.status(200).json({ message: "User Authenticated succesfuly", user: user._id });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred on the server, try again later" });
  }
};
