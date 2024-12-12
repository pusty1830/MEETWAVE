const User = require("../service/user.service");
const { getRawData } = require("../utils/function");
const { hashedPass, comparedPass } = require("../utils/password");

const httpRes = require("../utils/http");
const { prepareResponse } = require("../utils/response");
const { generateSign } = require("../utils/token");



exports.signup = async (req, res) => {
  console.log("recived data",req.body)
  try {
    let body = req.body;
    const password = req.body.password?.trim() || "";
    body.password = hashedPass(password);
    let result = await User.addUser(body);
    result = getRawData(result);
    res
      .status(httpRes.CREATED)
      .json(
        prepareResponse(
          "CREATED",
          "Cogratulation!! Your profile is created.",
          result,
          null
        )
      );
  } catch (error) {
    res
      .status(httpRes.SERVER_ERROR)
      .json(
        prepareResponse("SERVER_ERROR", "Internal Server ERROR", null, error)
      );
  }
};

exports.signin = async (req, res) => {
  try {
    let result = await User.getOneUserByCond({
      email: req.body.email,
      status: req.body.status,
    });
    result = getRawData(result);
    if (result) {
      let isMatch = comparedPass(req.body.password, result.password);
      if (!isMatch) {
        res
          .status(httpRes.FORBIDDEN)
          .json(
            prepareResponse("UNAUTHORIZED", "Invalid Password", null, null)
          );
      } else {
        let token = generateSign(
          result.email,
          result.userName,
          result.status,
          result.is,
          result.roll
        );
        result.accessToken = token;
        res
          .status(httpRes.OK)
          .json(prepareResponse("OK", "Login SuccessFul", result, null));
      }
    } else {
      res
        .status(httpRes.NOT_FOUND)
        .json(prepareResponse("NOT_FOUND", "Account Not Found", null, null));
    }
  } catch (error) {
    res
      .status(httpRes.SERVER_ERROR)
      .json(
        prepareResponse("SERVER_ERROR", "Internal Server ERROR", null, error)
      );
  }
};

// exports.adminSignin = async (req, res) => {
//   try {
//     let result=
//   } catch (error) {
//     res
//       .status(httpRes.SERVER_ERROR)
//       .json(
//         prepareResponse("SERVER_ERROR", "Internal Server ERROR", null, error)
//       );
//   }
// };

exports.searchUserByCond = async (req, res) => {
  try {
    let cond = req.body.data;
    let page = req.body.page;
    let pageSize = req.body.pageSize;
    let order = req.body.order;
    if (cond.supervisorId === "") {
      cond.supervisorId = req.decoded.id;
    }
    let users = User.getAllUserByCondAndPagination(cond, page, pageSize, order);
    res
      .status(httpRes.OK)
      .json(prepareResponse("OK", "Search SuccessFul", users, null));
  } catch (error) {
    res
      .status(httpRes.SERVER_ERROR)
      .json(
        prepareResponse("SERVER_ERROR", "Internal Server ERROR", null, error)
      );
  }
};

exports.updateProfile = async (req, res) => {
  try {
    let user = await User.getOneUserByCond({
      id: req.query?.id || req.decoded.id,
    });
    if (req.body.password) {
      req.body.password = hashedPass(req.body.password);
      if (user) {
        const hash = comparedPass(req.body.password, user.password);
        if (!hash) {
          return res
            .status(httpRes.FORBIDDEN)
            .json(prepareResponse("FORBIDDEN", "Invalid Password", null, null));
        } else {
          await User.updateUser(req.body?.id || req.decoded.id, req.body);
          res
            .status(httpRes.OK)
            .json(
              prepareResponse("OK", "User update successfully", user, null)
            );
        }
      }
    }
  } catch (error) {
    res
      .status(httpRes.SERVER_ERROR)
      .json(
        prepareResponse("SERVER_ERROR", "Internal Server ERROR", null, error)
      );
  }
};

exports.getProfile = async (req, res) => {
  try {
    let user = await User.getOneUserByCond({ id: req.decoded.id });
    if (user) {
      res
        .status(httpRes.OK)
        .json(
          prepareResponse("OK", "user profileget successfully", user, null)
        );
    } else {
      res
        .status(httpRes.NOT_FOUND)
        .json(
          prepareResponse("NOT_FOUND", "Acoocunt is not found", null, null)
        );
    }
  } catch (error) {
    res
      .status(httpRes.SERVER_ERROR)
      .json(
        prepareResponse("SERVER_ERROR", "Internal Server ERROR", null, error)
      );
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    let userId = req.decoded.id;
    let user = User.getOneUserByCond({ id: userId });
    if (user) {
      await User.deleteUser(userId);
      res
        .status(httpRes.OK)
        .json(
          prepareResponse(
            "OK",
            "User profile Deleted Succeessfully",
            null,
            null
          )
        );
    } else {
      res
        .status(httpRes.NOT_FOUND)
        .json(
          prepareResponse("NOT_FOUND", "User profile not found", null, null)
        );
    }
  } catch (error) {
    res
      .status(httpRes.SERVER_ERROR)
      .json(
        prepareResponse("SERVER_ERROR", "Internal Server ERROR", null, error)
      );
  }
};

//forgot pass

//reset pass

//upload Avtar
