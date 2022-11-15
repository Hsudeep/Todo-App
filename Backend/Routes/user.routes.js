const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const userController = express.Router();

//getting all users
userController.get("/", async (req, res) => {
  const users = await userModel.find();

  if (!users) {
    return res.status(404).send("No users Found");
  }
  return res.send({ users, message: "Users fetched Successfully" });
});

//get one user by using ID
userController.get("/:id", async (req, res) => {
  const { id } = req.params;

  const users = await userModel.findOne({ _id: id });

  if (!users) {
    return res.status(404).send("No user Found");
  }
  return res.send({ users, message: "User fetched Successfully" });
});

//creating user
userController.post("/createUser", (req, res) => {
  const { name, username, email, password, description } = req.body;

  bcrypt.hash(password, 6, async (err, hash) => {
    if (err) {
      return res.status(400).send("Enter correct Password");
    }
    const user = new userModel({
      name,
      username,
      email,
      password: hash,
      description,
    });

    await user.save();
    return res.status(201).send("User created Successfully");
  });
});

//login user
userController.post("/login", async (req, res) => {
  const { username, email, password } = req.body;
  // console.log(username, email, password);
  const user = await userModel.findOne({ $or: [{ email }, { username }] });

  if (!user) {
    return res.status(404).send("User not Found");
  }

  const hash = user.password;
  const userId = user._id;
  bcrypt.compare(password, hash, (err, result) => {
    if (result) {
      let token = jwt.sign({ email, username, userId }, "secret");
      return res.status(200).send({ message: "Login Success", token });
    }
    return res.status(404).send("User Not Found");
  });
});

//upcoming google auth, github auth
module.exports = userController;
