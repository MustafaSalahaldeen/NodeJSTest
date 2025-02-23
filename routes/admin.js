const express = require('express');
const path = require('path');
const rootDir = require('../util/path.js');
const { title } = require('process');

const router = express.Router();

const products = [];

//GET
router.get('/add-product',(req , res , next) => {
    res.render('add-product.pug' , {docTitle: 'Add Product' , path: '/admin/add-product'});
});

//POST
router.post('/add-product',(req , res , next) => {
    products.push({title : req.body.title});
    res.redirect('/');
});

exports.router = router;
exports.products = products;
