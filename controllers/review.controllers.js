const express = require("express");
const router = express.Router();
const fs = require("fs");

const reviewControllers = {};

reviewControllers.getReview = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    res.status(401).json({ msg: "required id" });
  }

  const { data } = JSON.parse(fs.readFileSync("maison.json", "utf-8"));

  const targetIndex = data.findIndex((el) => {
    return el.id === id;
  });

  if (targetIndex === -1) {
    const err = new Error("House not found");
    err.statusCode = 404;
    throw err;
  }

  res.status(200).send({ result: data[targetIndex], message: "success" });
};

reviewControllers.postReview = async (req, res, next) => {
  const { review } = req.body;
  const { id } = req.params;

  if (!id || !review) {
    res.status.json({ msg: "require id or review field" });
  }

  let db = JSON.parse(fs.readFileSync("maison.json", "utf-8"));

  const targetIndex = db.data.findIndex((el) => {
    return el.id === id;
  });

  if (targetIndex === -1) {
    res.status(404).json({ msg: "house not found" });
  }

  db.data[targetIndex].review.push(review);
  console.log(db);

  //   db.data = data;

  fs.writeFileSync("maison.json", JSON.stringify(db));

  res
    .status(200)
    .send({ result: db.data[targetIndex], message: "post success" });
};
module.exports = reviewControllers;
