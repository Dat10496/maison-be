var express = require("express");
var router = express.Router();
const { getReview, postReview } = require("../controllers/review.controllers");

/* GET reviews. */
router.get("/:id", getReview);

/* POST reviews. */
router.post("/:id", postReview);

module.exports = router;
