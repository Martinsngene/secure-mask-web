/** @format */

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const transactionsSchema = new Schema({
  id: String,
  cardName: String,
  Status: String,
  description: String,
  createdAt: Date,
  updatedAt: Date,
});

const Transactions = model("Transactions", transactionsSchema);

export default Transactions;
