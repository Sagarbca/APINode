const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/db');
require('../config/passport')(passport);
const mongoose = require('mongoose');
var Persons = mongoose.model('Person');


router.get('/Person/:id', function (req,res){
    res.json(req.params.id);
    Persons.find(function(err, response){
        res.json(response);
    });
});


router.post('/Person',function (req,res) {
    console.log(req);
    var Person = new Persons(req.body);
    Person.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


module.exports = router;