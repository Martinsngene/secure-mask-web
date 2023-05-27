/** @format */
require("dotenv").config();

import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import { auth } from "express-openid-connect";

import Transactions from "./models/Transactions";

// Instantiation of application
const app: Application = express();

// Port for App to run
const PORT: number = 3001;

// Database Url Connection loaded from .env file.
const DB_HOST: string = process.env.DB_URL || "";

app.use(express.json());

// Config object for auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: "http://localhost:3001",
  clientID: "mmdtOFjm7mH0hjVxnfSSpvPWTsroqQzP",
  issuerBaseURL: "https://martinium3.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

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
