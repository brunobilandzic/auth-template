import mongoose from "mongoose";

const userObject = {
  email: { type: String, required: true },
};

module.exports =
  mongoose.models.AppUser ||
  mongoose.model("AppUser", new mongoose.Schema(userObject));
