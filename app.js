//jshint esversion:8
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/schedule", function (req, res) {
  res.render("schedule");
});

app.get("/competition-rules", function (req, res) {
  res.render("competition-rules");
});

app.get("/code-of-conduct", function (req, res) {
  res.render("etiquette-code-of-conduct");
});

app.get("/terms-and-conditions", function (req, res) {
  res.render("terms-and-conditions");
});

app.get("/contact-us", function (req, res) {
  res.render("contact-us");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
