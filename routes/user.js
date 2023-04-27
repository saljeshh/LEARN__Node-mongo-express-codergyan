const express = require("express");
const userController = require("../controller/user.js");

const router = express.Router();

router
  .get("/user", userController.getAllUsers)
  .get("/user:id", userController.getUser)
  .put("/user:id", userController.replaceUser)
  .put("/user:id", userController.updateUser)
  .delete("/user:id", userController.deleteUser);

module.exports = router;
