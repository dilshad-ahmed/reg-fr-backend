const express = require("express");
const {
  registerationUser,
  getAllUsers,
} = require("../controllers/userController.js");

const userRouter = express.Router();

userRouter.get("/users-list", getAllUsers);
userRouter.post("/registration", registerationUser);

module.exports = userRouter;
