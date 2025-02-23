const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin.js");
const shopRouter = require("./routes/shop.js");
const rootDir = require("./util/path.js"); //The main root

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false })); //The 'Text' responses bodies always needs this to be parsed without this line the response body will always be 'Undefined'
app.use(express.static(path.join(rootDir, "public"))); // Export 'Static Files' to be accessible Publicly
app.use(
  express.static(path.join(rootDir, "node_modules", "bootstrap", "dist", "css"))
); // Export 'Static Files' to be accessible Publicly

app.use("/admin", adminData.router);
app.use(shopRouter);

//Dummy page handle//
app.use((req, res, next) => {
  res.status(404).render("page-not-found.pug", { docTitle: "Page Not Found" });
});

app.listen(3000); //Open the server in PORT 3000 | localhost:3000 / 127.0.0.1:3000
