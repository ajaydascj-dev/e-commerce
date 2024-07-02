import passport from "passport";
import asyncHandler from "express-async-handler";
import { generateToken } from "../utils/createToken.js";

const errorUrl = "http://localhost:5173/login";

const googleLoginAuth = asyncHandler((req, res, next) => {
  passport.authenticate("google", { scope: ["profile", "email"] })(
    req,
    res,
    next
  );
});

const googleLoginCallback = asyncHandler(async (req, res, next) => {
  passport.authenticate(
    "google",
    {
      failureMessage: "Cannot login with Google",
      // failureRedirect: errorUrl,
    },
    (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        const message = "User Not Found"
         res.redirect(`${errorUrl}?error=${message}`)
      }
      req.logIn(user, (err) => {
        if (err) {
          console.log(err, "35");
          return next(err);
        }
        const token = generateToken(res, user._id, user.isAdmin);
        const existingUser = { ...user };
        existingUser.token = token;
        res.redirect(
          `http://localhost:5173/api/v1/auth/google/callback?user=${encodeURIComponent(
            JSON.stringify(existingUser)
          )}`
        );
      });
    }
  )(req, res, next);
});

export { googleLoginAuth, googleLoginCallback };
