import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  let token;
  // Read JWT from 'jwt' cookie

  token = req.cookies.jwt;
  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } else {
    res.status(401);
    next(1);
  }
};

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    next(1);
  }
};

export { authenticate, authorizeAdmin };
