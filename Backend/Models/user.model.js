const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  description: { type: String },
});

const userModel = model("userProfile", userSchema);
module.exports = userModel;
