const {isEmail} = require('validator')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Please enter an Name'],
  },
  email:{
    type: String,
    required: [true, 'Please enter an Email'],
    unique: true,
    lowecase: true,
    validate: [isEmail, 'Please provide a valid email']
  },
  password:{
    type: String,
    required: [true, 'Please enter an Password'],
  },
  isAdmin:{
    type: Boolean,
  },
  
})

const User = mongoose.model('User', userSchema)


module.exports = User