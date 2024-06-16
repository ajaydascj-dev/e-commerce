import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors/index.js";

const authenticate = (req, res, next) => {
  let token;
  // Read JWT from 'jwt' cookie

  token = req.cookies.jwt;
  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } else {
   throw new UnauthorizedError("No Token");
    
  }
};

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new UnauthorizedError("You are not authorized");
  }
};

export { authenticate, authorizeAdmin };
