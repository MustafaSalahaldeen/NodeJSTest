const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin.js');
const shopRouter = require('./routes/shop.js');
const rootDir = require('./util/path.js')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir , 'public')));

app.use('/admin' , adminRouter);
app.use(shopRouter);

//Dummy page handle//
app.use((req , res , next) => {
    res.sendFile(path.join(__dirname , 'views' , 'page-not-found.html'));
});

app.listen(3000);