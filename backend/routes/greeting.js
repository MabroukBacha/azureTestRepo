var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/hello', function (req, res, next) {
    res.json(`Greetings from API! at ${(new Date()).toLocaleString()}`);
});

module.exports = router;
