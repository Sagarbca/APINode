var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/db');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var Persons = mongoose.model('Person');

router.get('/person', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        Persons.find(function (err, person) {
            if (err) return next(err);
            res.json(person);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

router.post('/person', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        console.log(req.body);
        var newPerson = new Persons({
            name: req.body.name,
            age: req.body.age,
            nationality: req.nationality,
        });
        newPerson.save(function(err) {
            if (err) {
                return res.json({success: false, msg: 'Save Person failed.'});
            }
            res.json({success: true, msg: 'Successful created new Person.'});
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};
module.exports = router;