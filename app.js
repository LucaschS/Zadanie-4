const path = require("path");

const express = require("express");

const app = express();
const bodyParser = require("body-parser"); //do czego to

app.set("view engine", "ejs"); //set pug, handlebars or EJS
app.set("views", "views");

const usersData = require("./routes/users");
const addUserRoutes = require("./routes/add-user");

app.use(bodyParser.urlencoded({ extended: false })); // do parsowania body ale nie files
app.use(express.static(path.join(__dirname, "public"))); //do czego to

app.use(usersData);
app.use("/", addUserRoutes.routes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
