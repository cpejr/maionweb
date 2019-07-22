var express = require('express');
var router = express.Router();
const Client = require('../models/client');

/* GET pageA. */
router.get('/', function(req, res, next) {
  res.render('pageA', { title: 'Geral', layout: 'layoutDashboard'});
});

/*POST pageA*/
router.post('/',(req,res)=>{
  const  client  = req.body.client;
  console.log(client);
    Client.create(client).then((clientid)=>{
      console.log(clientid);
      res.redirect('/login');
    }).catch((error)=>{
      console.log(error);
      res.redirect('error');
    });
  });

module.exports = router;
