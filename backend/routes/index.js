const router = require("express").Router();

router.use("/videocall", require("./mettingId.route"));
router.use("/auth", require("./auth.routes"));
router.use("/:tableName", require("./query.route"));

module.exports = router;
