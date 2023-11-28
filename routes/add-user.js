const path = require("path");

const express = require("express");

const router = express.Router();

const users = [];

const dupa = [1, 2, 3];

router.get("/", (req, res, next) => {
  res.render("add-user", {
    pageTitle: "Add User",
    path: "/",
  });
});

router.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.name });
  // console.log(users, "users");
  res.redirect("/users");
});

module.exports.routes = router;
exports.users = users;

module.exports.dupa = dupa;
