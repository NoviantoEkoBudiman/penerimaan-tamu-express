var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const page = "dashboard";
  // const info = req.flash('info');
  res.render('../public/index',{
    page: page,
    // info: info
  });
});

module.exports = router;
