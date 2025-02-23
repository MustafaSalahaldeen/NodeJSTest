const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path.js");
const adminData = require("./admin.js");
const db = require("../util/database.js");

class Product {
    constructor(title) {
        this.title = title;
    }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static deelteById(id) {
    return db.execute("DELETE FROM products WHERE id = ?", [id]);
  }

  static findById(id) {
    return db.execute("SELECT * FROM products WHERE id = ?", [id]);
  }
};

router.get("/", (req, res, next) => {
    Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.render("shop.pug", {
            prods: rows,
            docTitle: "Shop"}
            )
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get("/product/:productId", (req, res, next) => {
    const productId = req.params.productId;
    Product.findById(productId)
        .then(([rows, fieldData]) => {
            res.render("shop.pug", {
            prods: rows,
            docTitle: "Shop"}
            )
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
