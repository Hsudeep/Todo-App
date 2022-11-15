const express = require("express");
const connection = require("./Config/db");
const authentication = require("./MiddleWare/authentication");
const userController = require("./Routes/user.routes");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Todo App Backend");
});
app.use("/users", userController);
app.use(authentication);

connection.then(() => {
  app.listen(process.env.PORT, (req, res) => {
    console.log("Server started in http://localhost:8000");
  });
});
