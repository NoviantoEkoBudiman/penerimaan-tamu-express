var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const page = "dashboard";
  const alert = req.flash('info');
  res.render('../public/index',{
    page: page,
    alert
  });
});

module.exports = router;
