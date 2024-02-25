const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT;
const password = encodeURIComponent(process.env.PASSWORD);
const URL = `mongodb+srv://Inventory:${password}@cluster0.xiezz0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const RegisterData = require("./schema/login.js");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const nodemailer = require("nodemailer");
const Apppassword = encodeURIComponent(process.env.MAIL_PASSWORD);

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/Login", (req, res) => {
  const { Input, password } = req.body;

  RegisterData.findOne({ name: Input }).then((data) => {
    if (data) {
      if (data.password === password) {
        res.json("success");
      } else {
        res.json("failed");
      }
    } else {
      res.json("no data found");
    }
  });
});

app.post("/register", async (req, res) => {
  const { name, password, email, phone } = req.body;
  const existingUser = await RegisterData.findOne({ name });
  const existingEmail = await RegisterData.findOne({ email });
  const existingNumber = await RegisterData.findOne({ phone });

  if (existingUser) {
    res.json("Username Already Exists");
  } else {
    if (existingEmail || existingNumber) {
      res.json("Phone number or email already used");
    } else {
      RegisterData.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.json(error));
    }
  }
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pipelineoffecial@gmail.com",
    pass: Apppassword,
  },
});

app.post("/sendpassword/:email", async (req, res) => {
  const { email } = req.params;

  const user = await RegisterData.findOne({ email });

  if (user) {
    const gotpassword = user.password;
    const username = user.name;
    console.log(gotpassword, username);

    await transporter.sendMail({
      to: email,
      subject: `your password ms/mr ${username}`,
      text: `Your password is: ${gotpassword}`,
    });

    res.json("password sent");
  } else res.json("usernot found!!..");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
