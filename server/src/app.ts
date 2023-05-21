/** @format */
require("dotenv").config();

import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";

import Transactions from "./models/Transactions";

// Instantiation of application
const app: Application = express();

// Port for App to run
const PORT: number = 3001;

// Database Url Connection loaded from .env file.
const DB_HOST: string = process.env.DB_URL || "";

app.use(express.json());

// GET all transactions route
app.get("/transactions", async (req: Request, res: Response) => {
  const allTransactions = await Transactions.find();
  return res.status(200).json(allTransactions);
});

// Get Single transaction by id route
app.get("/transactions/:id", async (req, res) => {
  const { id } = req.params;
  const transaction = await Transactions.findById(id);
  return res.status(200).json(transaction);
});

// Connect to cloud Atlas with Mongoose as ODM
const main = async () => {
  try {
    await mongoose.connect(DB_HOST);
    app.listen(PORT, (): void => {
      console.log("SERVER IS UP ON PORT:", PORT);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Run application
main();
