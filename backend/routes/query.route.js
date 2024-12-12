const {
  insertData,
  insertManyData,
  updateData,
  destroyData,
  getAllData,
  getOneData,
} = require("../controller/query.controller");
const { asyncHandler } = require("../middleware/asyncHandler");
const { prepareBody } = require("../utils/response");

const router = require("express").Router();

//insert
router
  .route("/:tableName/create")
  .post(prepareBody, asyncHandler("", insertData));

//insert many
router
  .route("/insert-many")
  .post(prepareBody, asyncHandler("", insertManyData));

//update
router
  .route("/update-record/:id")
  .patch(prepareBody, asyncHandler("", updateData));

//delete
router.route("/delete-record/:id").delete(asyncHandler("", destroyData));

//get all
router.route("/get-all-data").get(prepareBody, asyncHandler("", getAllData));

//getone
router.route("/get-one-record/:id").get(prepareBody, getOneData);

module.exports = router;
