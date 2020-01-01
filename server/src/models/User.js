const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: false,
    sparse: true
  },
  password: {
    type: String,
    required: false
  },
  guest: {
    type: Boolean,
    default: true
  }
})

const User = mongoose.model('User', UserSchema)
module.exports = User