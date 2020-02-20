var express = require('express');
var router = express.Router();
const Client = require('../models/client');
const Flight = require('../models/flight');
const Hotel = require('../models/hotel');
const Budget = require('../models/budget');
const Car = require('../models/car');
const Safe = require('../models/safe');
const auth = require('./middleware/auth');


router.get('/',  function(req, res) {
  res.render('tabela', { title: 'tabela', layout: 'layout' });
});
