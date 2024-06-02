import express from "express";
import {} from "dotenv/config";
import { connectDb } from "./config/dbConnection.js";
import userRoute from "./routes/user.js";

const app = express();
const PORT = process.env.PORT || 3000;



// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/api/v1/user/", userRoute);

(await connectDb()) &&
  app.listen(PORT, () => {
    console.log("Server is Listening @ 3000");
  });
