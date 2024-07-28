const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config()
const secret = process.env.SECRET;

exports.welcome = async (_req, res)=>{
  return res.json({message: 'Welcome to the api'})
}
exports.welcomeAdmin = async (_req, res)=>{
  return res.json({message: 'Welcome Admin'})
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

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      passwordHash,
    });
    await user.save();
    res.status(201).json({ message: "User successfully created" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred on the server, try again later" });
  }
};

exports.login = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email }); 
   try {
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );    res.status(200).json({ message: "User Authenticated succesfuly", token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred on the server, try again later" });
  }
};
