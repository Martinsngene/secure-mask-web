/** @format */

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const usersSchema = new Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  cardAddress: String,
  profilePicture: String,
});

const Users = model("Users", usersSchema);

export default Users;
