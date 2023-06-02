var express = require("express");
var router = express.Router();
const reviewRouter = require("./review.api.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/reviews", reviewRouter);

module.exports = router;
