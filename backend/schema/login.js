const mongoose = require("mongoose");

const RegisterData = new mongoose.Schema({
  name: String,
  password: String,
  phone: String,
  email: String,
});

const Register = mongoose.model("Register", RegisterData);

module.exports = Register;