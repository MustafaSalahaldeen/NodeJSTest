const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path.js')

router.get('/' , (req , res , next) => {
    res.send('<h1>Welcome to Express!</h1>');
});

module.exports = router;