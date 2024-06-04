import express from "express";
import cookies from "cookie-parser";
import {} from "dotenv/config";
import { connectDb } from "./config/dbConnection.js";
import userRoute from "./routes/user.js";
import categoryRoute from "./routes/categories.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { authenticate, authorizeAdmin } from "./middlewares/authMiddleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());
// routers
app.use("/api/v1/user/", userRoute);
app.use("/api/v1/categories/", authenticate, authorizeAdmin, categoryRoute);
app.use(errorHandler);

(await connectDb()) &&
  app.listen(PORT, () => {
    console.log("Server is Listening @ 3000");
  });
