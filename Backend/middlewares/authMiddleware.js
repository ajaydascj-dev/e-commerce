import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors/index.js";

const authenticate = (req, res, next) => {
  // Read JWT from 'jwt' cookie
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthorizedError("Authentication invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the job routes
    req.user = payload;
    next();
  } catch (error) {
    throw new UnauthorizedError("Authentication invalid");
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
