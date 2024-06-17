import jwt from "jsonwebtoken";

const generateToken = (res, userId, isAdmin) => {
  const token = jwt.sign({ userId, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return token;
};

export { generateToken };
