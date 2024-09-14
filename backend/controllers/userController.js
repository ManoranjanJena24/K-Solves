const User = require('../models/userModel');

// Controller logic
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

module.exports = { getUsers };
