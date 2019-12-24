var mongoose = require("mongoose");
 var Person = new mongoose.Schema({
     name: {
         type: String,
         required: true
     },
     age: {
         type: String,
         required: true
     },
     nationality: {
         type: String,
         required: true
     },
 });
mongoose.model('Person', Person);

