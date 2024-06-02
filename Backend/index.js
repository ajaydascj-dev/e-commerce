import express from "express";
import {} from "dotenv/config";
import { connectDb } from "./config/dbConnection.js";

const app = express();
const PORT = process.env.PORT || 3000;



await connectDb() && app.listen(PORT, () => {
    console.log("Server is Listening @ 3000");
  });
