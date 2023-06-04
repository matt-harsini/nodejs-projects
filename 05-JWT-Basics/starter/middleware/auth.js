const jwt = require("jsonwebtoken");
const APIError = require("../errors/custom-error");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new APIError("Invalid credentials", 401);
  }
  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
  } catch (error) {
    console.log(error);
    throw new APIError("Not authorized to access this route", 401);
  }
  next();
};

module.exports = authMiddleware;
