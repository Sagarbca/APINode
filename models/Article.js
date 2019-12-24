var mongoose = require("mongoose");

var Article = new mongoose.Schema({
    name: String,
    age: String,
    nationality: String,
    language : String
});
mongoose.model('Article', Article);