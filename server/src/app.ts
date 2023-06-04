/** @format */
require("dotenv").config();

import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import { auth } from "express-openid-connect";
import cors from "cors";
import { requiresAuth } from "express-openid-connect";

import Transactions from "./models/Transactions";

// Instantiation of application
const app: Application = express();

// Port for App to run
const PORT: number = 3001;

// Database Url Connection loaded from .env file.
const DB_HOST: string = process.env.DB_URL || "";

// Enable CORS for localhost:3000
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));

// Config object for auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
// app.get("/", (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
// });

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
// GET all transactions route
app.get(
  "/transactions",
  requiresAuth(),
  async (req: Request, res: Response) => {
    // const allTransactions = await Transactions.find();
    // return res.status(200).json(allTransactions);
    return res.send("Hello World");
  }
);

// Get Single transaction by id route
app.get("/transactions/:id", async (req, res) => {
  const { id } = req.params;
  const transaction = await Transactions.findById(id);
  return res.status(200).json(transaction);
});

// Connect to cloud Atlas with Mongoose as ODM
const main = async () => {
  try {
    // await mongoose.connect(DB_HOST);
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
