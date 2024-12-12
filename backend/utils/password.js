const bcrypt = require("bcryptjs");

const hashedPass = (pass) => bcrypt.hashSync(pass, 10);

const comparedPass = (pass, hashpass) => bcrypt.compareSync(pass, hashpass);

module.exports = {
  hashedPass,
  comparedPass,
};
