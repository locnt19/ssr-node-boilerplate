var express = require('express');
var router = express.Router();

/* GET customers listing. */
router.get('/', function (req, res, next) {
  // res.redner('view file')
  res.render('customers', {
  });
});

module.exports = router;