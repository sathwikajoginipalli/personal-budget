const budgetModel = require("./models/budget_schema");
// const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

router.post("/add", (req, res) => {
  const newData = new budgetModel({
    title: req.body.title,
    budget: req.body.budget,
    color: req.body.color,
  });
  newData.save().then((data) => {
      if(!data){
          return res.status(400).send("insertion error");
      }
    return res.json(data);
  });
});

router.get("/fetch", (req, res) => {
  budgetModel.find().then((data) => {
    if (!data) {
      return res.status(400).send("no data");
    }
    return res.json(data);
  });
});

module.exports = router;
