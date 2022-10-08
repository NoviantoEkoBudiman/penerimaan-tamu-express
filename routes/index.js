var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const page = "beranda"; 
  res.render('../public/index',{
    page: page
  });
});

module.exports = router;
