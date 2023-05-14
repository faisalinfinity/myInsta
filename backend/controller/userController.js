const { userModel } = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const saltRounds = 10;
const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await userModel.find({ username });
    if (user.length) {
      return res.status(409).send("username not available");
    }

    if (user.length && user[0].email == email) {
      return res.status(409).send("user already exist");
    }

    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) {
        return res.status(400).send(err.message);
      }
      req.body.password = hash;

      let new_user = new userModel(req.body);
      new_user.save();
      res.send("registration successfull");
    });
  } catch (error) {
    res.send(error.message);
  }
};

const login = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user;
    if (email) user = await userModel.find({ email });

    if (username) user = await userModel.find({ username });

    if (!username && !email)
      return res.status(400).send("please send email/username ");

    if (user.length == 0) return res.status(409).send("user not regitered");

    let hash = user[0].password;
    bcrypt.compare(password, hash, function (err, result) {
      if (err) return res.status(400).send(err.message);

      if (result)
        return res.status(201).json({
          token: jwt.sign({ userId: user[0]._id }, process.env.SECRET_KEY),
        });

      return res.status(401).send("incorrect password");
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  register,
  login,
};
