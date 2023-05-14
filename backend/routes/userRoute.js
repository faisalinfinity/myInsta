const express = require("express");
const { register, login, getLoginUser } = require("../controller/userController");
const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/loggeduser",getLoginUser)

module.exports = {
  userRoute,
};
