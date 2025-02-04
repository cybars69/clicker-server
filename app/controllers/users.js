const User = require("../models/user");

const getUser = async ({ userId, fields }) => {
  return await User.findOne({ userId }, fields);
};

module.exports = { getUser };
