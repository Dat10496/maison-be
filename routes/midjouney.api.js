var express = require("express");
var router = express.Router();
const { generateImage } = require("../controllers/midjourney.controllers");

/* GET reviews. */
router.post("/", generateImage);

module.exports = router;
