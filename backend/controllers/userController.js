const User = require('../models/userModel');

// Controller logic
const getUsers = async (req, res) => {
  const users = await User.findAll();
  console.log(users)
  res.json(users);
};

module.exports = { getUsers };
