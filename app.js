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

app.get("/event-passes", function (req, res) {
  res.render("event-passes");
});

app.get("/schedule", function (req, res) {
  res.render("schedule");
});

app.get("/staff", function (req, res) {
  res.render("staff");
});

app.get("/competition", function (req, res) {
  res.render("competition");
});

app.get("/event-location", function (req, res) {
  res.render("event-location");
});

app.get("/getting-to-wellington", function (req, res) {
  res.render("getting-to-wellington");
});

app.get("/places-to-explore", function (req, res) {
  res.render("places-to-explore");
});

app.get("/southern-lights-swing", function (req, res) {
  res.render("southern-lights-swing");
});

app.get("/merch", function (req, res) {
  res.render("merch");
});

app.get("/private-lessons", function (req, res) {
  res.render("private-lessons");
});

app.get("/facebook-frame", function (req, res) {
  res.render("facebook-frame");
});

app.get("/code-of-conduct", function (req, res) {
  res.render("etiquette-code-of-conduct");
});

app.get("/photo-video-policy", function (req, res) {
  res.render("photos-videos");
});

app.get("/contact-us", function (req, res) {
  res.render("contact-us");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
