const httpResCode = require("./http");
// global.crypto = require("crypto");
const CryptoJS = require("crypto-js");

require("dotenv").config();

const prepareResponse = (statusText, msg, data, err) => {
  console.log(err);
  return {
    status: httpResCode[statusText],
    msg,
    data: CryptoJS.AES.encrypt(
      JSON.stringify(data),
      process.env.CYS
    ).toString(),
    err,
  };
};

const prepareBody = (req, res, next) => {
  if (req.get("Referrer") !== "http://localhost:4000/api-docs/") {
    req.body = JSON.parse(
      CryptoJS.AES.decrypt(req.body.cypher, process.env.CYS).toString(
        CryptoJS.enc.Utf8
      )
    );
  }
  next();
};

module.exports = {
  prepareResponse,
  prepareBody
};
