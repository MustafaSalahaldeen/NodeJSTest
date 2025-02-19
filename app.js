const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin.js');
const shopRouter = require('./routes/shop.js');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRouter);
app.use(shopRouter);

//Dummy page handle//
app.use((req , res , next) => {
    res.status(404).send('<h1>ERROR : 404 | Page not found</h1>');
});

app.listen(3000);