const { v4: uuidv4 } = require("uuid");

const User = require("../models/user");

const cookie_middleware = async (req, res, next) => {
  let userId = req.cookies.userId;
  if (!userId) {
    userId = uuidv4();
    res.cookie("userId", userId, { httpOnly: true, sameSite: "strict" });
    const newUser = new User({ userId, score: 0, prizes: [] });
    await newUser.save();
  }
  req.userId = userId;
  next();
};

module.exports = { cookie_middleware };
