var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'Users Page',
    message: 'Welcome to the Users Page'
  })
});

module.exports = router;
