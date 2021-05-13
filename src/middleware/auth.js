const jwt = require("jsonwebtoken");
const UserData = require("../models/user");

const auth = async (req, res, next) => {
  try {
    console.log("runs first");
    console.log("auth here");
    const token = req.cookies.jwt;
    console.log(token);
    const verifyUser = jwt.verify(token, process.env.S_KEY);
    console.log(verifyUser);

    const user = await UserData.findOne({ _id: verifyUser._id });
    console.log(user);
    req.token = token;
    req.user = user;

    next();
  } catch (e) {
    res.status(404).send(e);
  }
};

module.exports = auth;
