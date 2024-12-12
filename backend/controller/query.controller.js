const query = require("../service/query.service");
const httpResponseCodes = require("../utils/http");
const { prepareResponse } = require("../utils/response");

exports.insertData = async (req, res) => {
  try {
    // const tableName = req.params.tableName;
    // console.log("Table Name:", tableName);

    let result = await query.addData(req.tableName, req.body);
    res
      .status(httpResponseCodes.CREATED)
      .json(prepareResponse("CREATED", "Created SuccessFully", result, null));
  } catch (error) {
    res
      .status(httpResponseCodes.SERVER_ERROR)
      .json(
        prepareResponse("SERVER_ERROR", "Internal Server Error", null, error)
      );
  }
};

exports.insertManyData = async (req, res) => {
  try {
    let result = await query.addBulkData(req.tableName, req.body);
    res
      .status(httpResponseCodes.CREATED)
      .json(prepareResponse("CREATED", "Created SuccessFully", result, null));
  } catch (error) {
    res
      .status(httpResponseCodes.SERVER_ERROR)
      .json(
        prepareResponse("SERVER_ERROR", "Internal Server Error", null, error)
      );
  }
};

exports.updateData = async (req, res) => {
  try {
    console.log(req.params.tableName);
    let result = await query.updateData(
      req.params.tableName,
      req.params,
      req.body
    );
    res
      .status(httpResponseCodes.OK)
      .json(
        prepareResponse("UPDATE", "Data updated Successfully", result, null)
      );
  } catch (error) {
    res
      .status(httpResponseCodes.SERVER_ERROR)
      .json(
        prepareResponse("SERVER_ERROR", "Internal Server Error", null, error)
      );
  }
};

exports.destroyData = async (req, res) => {
  try {
    let result = await query.destroyData(req.tableName, req.params);
    res
      .status(httpResponseCodes.OK)
      .json(
        prepareResponse("DELETE", "Data deleted Successfully", result, null)
      );
  } catch (error) {
    res
      .status(httpResponseCodes.SERVER_ERROR)
      .json(
        prepareResponse("SERVER_ERROR", "Internal Server Error", null, error)
      );
  }
};

exports.getAllData = async (req, res) => {
  try {
    let result = await query.getAllData(req.tableName);
    res
      .status(httpResponseCodes.OK)
      .json(prepareResponse("OK", "Data fetched Successfully", result, null));
  } catch (error) {
    res
      .status(httpResponseCodes.SERVER_ERROR)
      .json(
        prepareResponse("SERVER_ERROR", "Internal Server Error", null, error)
      );
  }
};

exports.getOneData = async (req, res) => {
  try {
    let result = await query.getOneDataByCond(req.tableName, req.params);
    res
      .status(httpResponseCodes.OK)
      .json(
        prepareResponse("OK", "One Data fetched Successfully", result, null)
      );
  } catch (error) {
    res
      .status(httpResponseCodes.SERVER_ERROR)
      .json(
        prepareResponse("SERVER_ERROR", "Internal Server Error", null, error)
      );
  }
};
