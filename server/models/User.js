import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    stateId: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    role: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    shopId: {
      type: String,
      default: "1",
    },
  }, {timestamps: true}
);

const User = mongoose.model("User", UserSchema);

export default User;