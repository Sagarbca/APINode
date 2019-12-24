var router = require('express').Router();
router.use('/', require('./PersonController'));
router.use('/', require('./ArticleController'));
router.use('/', require('./Api'));
router.use('/', require('./BookController'));

module.exports = router;