var express = require('express');
var router = express.Router();

/* GET pageB. */
router.get('/', function(req, res) {
  res.render('pageB', { title: 'Geral Page B', layout: 'layoutDashboard.hbs'});
});



module.exports = router;
