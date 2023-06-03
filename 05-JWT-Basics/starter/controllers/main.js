const APIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new APIError("Please provide email and password", 400);
  }
  const id = new Date().getDate();
  const token = jwt.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.send({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new APIError("Invalid credentials", 401);
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
  } catch (error) {
    console.log(error);
    throw new APIError("Not authorized to access this route", 401);
  }
  console.log(token);
  const luckyNumber = Math.floor(Math.random() * 200);
  res.status(200).json({
    msg: `Hello John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
