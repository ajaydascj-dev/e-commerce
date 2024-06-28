import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import existingUser from "../services/user.js";
import passport from "passport";
// import findbyId from "../services/user.js";
import userServices from "../services/user.js";


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/v1/auth/google/callback",
      passReqToCallback: true,
      scope: ["profile", "email"],
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      console.log(profile) ;
      try {
        let user = await userServices.existingUser(profile.emails[0].value);
        if (user) {
          return cb(null, user);
        }else {
          return cb(null, false, { message: 'User not found' });
        }
      } catch (error) {
        console.error("Error in GoogleStrategy:", error);
        return cb(error, null);
      }
    }
  )
);

// Set the user to session
passport.serializeUser((user, cb) => {
  console.log("Serilized the user", user);
  cb(null, user.id);
});
// take the user from session and decode it
passport.deserializeUser(async (id, cb) => {
  try {
    const user = await userServices.findbyId(id);
    console.log("deserialized");
    if (user) {
      cb(null, user);
    }else {
      cb(new Error("User not found"), null);
    }
  } catch (error) {
    console.log(error)
    cb(error, null);
  }
});

