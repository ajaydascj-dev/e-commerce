import express from "express";
import  "dotenv/config";
import cors from "cors";
import { connectDb } from "./config/dbConnection.js";
import userRoute from "./routes/user.js";
import categoryRoute from "./routes/categories.js";
import productRoute from "./routes/products.js";
import googleAuthRoute from "./routes/googleAuth.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { authenticate, authorizeAdmin } from "./middlewares/authMiddleware.js";
import passport from "passport";
import "./config/passport.js";
import session from "express-session";

const app = express();
const PORT = process.env.PORT || 3000;



// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "drtgdrgr",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());
// routers
app.use("/api/v1/user/", userRoute);
app.use("/api/v1/categories/", authenticate, authorizeAdmin, categoryRoute);
app.use("/api/v1/products/", productRoute);
app.use("/api/v1/" , googleAuthRoute);
app.use(errorHandler);

(await connectDb()) &&
  app.listen(PORT, () => {
    console.log("Server is Listening @ 3000");
  });
