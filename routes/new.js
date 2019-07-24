var express = require('express');
var router = express.Router();
const Client = require('../models/client');

/* GET pageA. */
router.get('/pageA', function(req, res, next) {
  res.render('new/pageA', { title: 'Geral', layout: 'layoutDashboard'});
});

/* GET pageB. */
router.get('/pageB/:client_id', function(req, res) {
  Client.getById(req.params.client_id).then((user) =>{
    console.log(user);
  res.render('new/pageB', { title: 'Geral Page B', layout: 'layoutDashboard.hbs'});
}).catch((error)=>{
    console.log(error);
    res.redirect('/error');
  });
});

/*POST pageA*/
router.post('/pageA',(req,res)=>{
  const  client  = req.body.client;
  console.log(client);
    Client.create(client).then((clientid)=>{
      console.log(clientid);
      res.redirect('/new/pageB/${client_id}');
    }).catch((error)=>{
      console.log(error);
      res.redirect('error');
    });
  });

module.exports = router;
