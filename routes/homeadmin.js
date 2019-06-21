const express = require('express');
const router = express.Router();

router.get('/layout', (req, res) => {
  res.render('index.hbs', { title: 'layout', layout: 'index' });
});

module.exports = router;
