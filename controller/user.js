//const { User } = require("../model/user");

exports.createUser = (req, res) => {
  res.status(201).json({
    message: "left to create",
  });
};

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    message: "left to get all users",
  });
};

exports.getUser = (req, res) => {
  res.status(200).json({
    message: "left to get user",
  });
};

exports.replaceUser = (req, res) => {
  res.status(200).json({
    message: "left to replace user",
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    message: "left to update user",
  });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({
    message: "left to delete user",
  });
};
