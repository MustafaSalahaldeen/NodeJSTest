const express = require('express');
const path = require('path');
const rootDir = require('../util/path.js')

const router = express.Router();

//GET
router.get('/add_product',(req , res , next) => {
    res.sendFile(path.join(rootDir , 'views' , 'add-product.html'));
});

//POST
router.post('/add_product',(req , res , next) => {
    console.log(req.body.title);
    res.redirect('/');
});

module.exports = router;