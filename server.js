//Budget API
const cors = require('cors');
const express = require('express');
const app = express()
const port = 3000;
// var budget = require('./budget.json');
const mongoose = require('mongoose');
// const budgetModel = require('./models/budget_schema');

let url = "mongodb://localhost:27017/mongodb_budget";
let budget_data= require("./budget_routes");

app.use(cors());

mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to Database");
    // budgetModel.find({})
    //           .then((data)=>{
    //               console.log(data);
    //           })
    //           .catch((Connectionerror)=>{
    //               console.log(Connectionerror)
    //           })
  })
  .catch((Connectionerror) => {
    console.log(Connectionerror);
  });

app.use("/", express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/budget", budget_data);

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});