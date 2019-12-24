const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var Articles = mongoose.model('Article');

//get article
router.get('/article[/{id}]', async function (req,res){
    console.log(req.params.id)
    const article = await  Articles.find({});
    try {
        res.send(article)
    }catch (err){
        res.status(500).send(err)
    }
});

//Post data
router.post('/article',function (req,res) {
    var Article = new Articles(req.body);
    Article.save()
        .then(item => {
            res.send("Article saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

//delete
router.post('/article/:id',async function (req,res) {
    try {
        const article = await Articles.findByIdAndDelete(req.params.id)
        if (!article) res.status(404).send("No item found")
        res.status(200).send("Item Deleted")
    } catch (err) {
        res.status(500).send(err)
    }
});
module.exports = router;