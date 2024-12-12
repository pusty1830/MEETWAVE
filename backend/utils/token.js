const JWT = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET;
const httpRes = require("../utils/http");
const { prepareResponse } = require("./response");

let generateSign = (email, name, user_status, id, roll) => {
  let payload = {
    email: email,
    name: name,
    user_status: user_status,
    id: id,
    roll: roll,
  };
  var token = JWT.sign(payload, JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};

let verifySign = (req, res, next) => {
  const bearerToken = req.get("Authorization") || req.headers["x-access-token"];
  if (!bearerToken) {
    return res
      .status(httpRes.UNAUTHORIZED)
      .json(
        prepareResponse("UNAUTHORIZED", "acess token is missing", null, null)
      );
  }
  try {
    JWT.verify(bearerToken, JWT_SECRET_KEY, function (err, decoded) {
      if (err) {
        return res
          .status(httpRes.UNAUTHORIZED)
          .json(
            prepareResponse(
              "UNAUTHORIZED",
              "Acess Token is not found ",
              null,
              null
            )
          );
      }
      res.decoded = decoded;
      next();
    });
  } catch (error) {
    return res
      .status(httpRes.SERVER_ERROR)
      .json(
        prepareResponse("SERVER_ERROR", "Internal server error", null, error)
      );
  }
};

module.exports = {
  generateSign,
  verifySign,
};
