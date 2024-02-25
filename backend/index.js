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

  if (existingUser) {
    res.json("already a user");
  } else {
      RegisterData.create(req.body)
      .then((data) => res.json(data))
      .catch((error) => res.json(error));
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
