const express = require("express");
const router = express.Router();
const fs = require("fs");

const reviewControllers = {};

reviewControllers.getReview = async (req, res, next) => {
  const { id } = req.body;

  if (!id) {
    const err = new Error("required id");
    err.statusCode = 401;
    throw err;
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
  const { id, review } = req.body;

  if (!id || !review) {
    const err = new Error("required id or review");
    err.statusCode = 401;
    throw err;
  }

  let db = JSON.parse(fs.readFileSync("maison.json", "utf-8"));

  const targetIndex = db.data.findIndex((el) => {
    return el.id === id;
  });

  if (targetIndex === -1) {
    const err = new Error("House not found");
    err.statusCode = 404;
    throw err;
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
