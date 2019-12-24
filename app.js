const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/db');
const path = require('path');
const exphbs = require('express-handlebars');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// make a cors enabled
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//define the controller path
app.use(require('./controller'));


//universal Url
app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});


var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log(" server is listening  at http://",host,port);
});