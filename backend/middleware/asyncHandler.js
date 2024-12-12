const httpRes = require("../utils/http");
const { prepareResponse } = require("../utils/response");

const asyncHandler = (tblname, cb) => async (req, res, next) => {
  try {
    req.tableName = tblname;
    if (tblname === "") {
      req.tableName = req.params.tableName;
      delete req.params.tableName;
    }
    await cb(req, res, next);
  } catch (err) {
    return res
      .status(httpRes.SERVER_ERROR)
      .json(prepareResponse("SERVER_ERROR", "InternalServer Error", null, err));
  }
};

module.exports = {
  asyncHandler,
};
