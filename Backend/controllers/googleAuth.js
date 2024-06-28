import passport from "passport";
import asyncHandler from "express-async-handler";

const successUrl ="http://localhost:5173/" ;
const errorUrl =  "http://localhost:5173/error"

const googleLoginAuth = asyncHandler( (req, res,next) => {
 
  passport.authenticate("google", { scope: ["profile", "email"] })(req, res, next);
});



const googleLoginCallback = asyncHandler((req, res, next) => {
  passport.authenticate(
    "google",
    {
      failureMessage: "Cannot login with Google",
      failureRedirect: errorUrl,
    },
    (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect(errorUrl);
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        console.log(req.user);
        return res.redirect(successUrl);
      });
    }
  )(req, res, next);
});

export { googleLoginAuth, googleLoginCallback };
