const router = require("express").Router();
const {
  signup,
  signin,
  updateProfile,
  searchUserByCond,
  getProfile,
  deleteProfile,
} = require("../controller/auth.controller");
const { asyncHandler } = require("../middleware/asyncHandler");
const { prepareBody } = require("../utils/response");

const { verifySign } = require("../utils/token");
const {
  signup: signupValidator,
  signin: signinValidator,
  search: searchValidator,
  update: updateValidator,
} = require("../validators/auth.validators");

router.route("/signup").post( prepareBody,signupValidator, asyncHandler("users", signup));
router.route("/signin").post(prepareBody,signinValidator, asyncHandler("user", signin));
router
  .route("/search-profile")
  .post(verifySign, searchValidator, asyncHandler("user", searchUserByCond));
router
  .route("/update-profile")
  .patch(verifySign, updateValidator, asyncHandler("user", updateProfile));
router.route("/profile").get(verifySign, asyncHandler("user", getProfile));
router
  .route("/delete-profile")
  .delete(verifySign, asyncHandler("user", deleteProfile));

//avtar upload

//forgot pass

//reset pass

module.exports = router;
