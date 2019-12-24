const mongoose = require('mongoose');

module.exports = {
    'secret':'nodeauthsecret',
    'database' :  mongoose.connect('mongodb+srv://sagar-verma:1Pinkiverma@nodejs-api-i4atr.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {

    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
})};
require("../models/Person");
require("../models/Article");
require("../models/User");
require("../models/Book");
