const express = require('express');
const router = express.Router();
//const auth = require('./middleware/auth');

/* GET users listing. */
router.get('/',/* auth.isAuthenticated,*/ function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
