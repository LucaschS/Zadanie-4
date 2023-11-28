const path = require("path");

const express = require("express");

const router = express.Router();
const usersData = require("./add-user");

router.get("/users", (req, res, next) => {
  const users = usersData.users;
  console.log(usersData.dupa, "usersData");
  res.render("users", {
    pageTitle: "Users",
    path: "/users",
    hasUsers: users.length > 0,
    activeAddUser: true,
    layout: false,
    users: users,
  });
});

module.exports = router;
