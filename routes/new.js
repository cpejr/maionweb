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
  res.render('new/pageB', { title: 'Geral Page B', layout: 'layoutDashboard.hbs', client_id: req.params.client_id});
}).catch((error)=>{
    console.log(error);
    res.redirect('/error');
  });
});

/* GET pageC. */
router.get('/pageC/:client_id', function(req, res) {
  Client.getById(req.params.client_id).then((user) =>{
    console.log(user);
  res.render('new/pageC', { title: 'Geral Page C', layout: 'layoutDashboard.hbs'});
}).catch((error)=>{
    console.log(error);
    res.redirect('/error');
  });
});

/* GET pageE. */
router.get('/pageE', function(req, res, next) {
  res.render('new/pageE', { title: 'pageE', layout: 'layoutDashboard'});
});

/* GET pageF. */
router.get('/pageF', function(req, res, next) {
  res.render('new/pageF', { title: 'pageF', layout: 'layoutDashboard'});
});

/* GET pageG. */
router.get('/pageG/:client_id', function(req, res) {
  Client.getById(req.params.client_id).then((user) =>{
    console.log(user);
  res.render('new/pageG', { title: 'Geral Page G', layout: 'layoutDashboard.hbs'});
}).catch((error)=>{
    console.log(error);
    res.redirect('/error');
  });
});


/*POST pageA*/
router.post('/pageA',(req,res)=>{
  const  client  = req.body.client;
  console.log(client);
    Client.create(client).then((client_id)=>{
      console.log(client_id);
      res.redirect(`/new/pageB/${client_id}`);
    }).catch((error)=>{
      console.log(error);
      res.redirect('error');
    });
  });


/*POST pageB*/
router.post('/pageB/:client_id',(req,res)=>{
  const  client  = req.body.client;
  const  client_id = req.params.client_id;
  Client.update(client_id, client).then(()=>{
    res.redirect(`/new/pageC/${client_id}`);
  }).catch((error)=>{
    console.log(error);
    res.redirect('error');
  });
});



module.exports = router;
