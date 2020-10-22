var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('page', {title: 'Page', author: 'Me Myself and I'});
});

module.exports = router;