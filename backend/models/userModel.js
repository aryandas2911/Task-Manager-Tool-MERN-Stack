import mongoose, { mongo } from "mongoose";

//User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//User database model
const userModel = mongoose.model("user", userSchema);

export default userModel;
