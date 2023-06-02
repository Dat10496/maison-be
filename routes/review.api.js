var express = require("express");
var router = express.Router();
const { getReview, postReview } = require("../controllers/review.controllers");

/* GET reviews. */
router.get("/", getReview);

/* POST reviews. */
router.post("/", postReview);

module.exports = router;
