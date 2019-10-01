var express = require('express');
var router = express.Router();
const Client = require('../models/client');
const Flight = require('../models/flight');
const Hotel = require('../models/hotel');
const Budget = require('../models/budget');
const Car = require('../models/car');
const Safe = require('../models/safe');


router.get('/pageRegistred', function (req, res) {
  Client.getAll().then((clientes)=>{
    res.render('registred/pageRegistred', { clientes, title: 'Cadastrados', layout: 'layoutDashboard',...req.session});
  }).catch((error) => {
   console.log(error);
   res.redirect('/error');
  });
});


/* GET pageA. */
router.get('/pageA', function(req, res, next) {
  Client.getById(req.params.client_id).then((client) =>{
    res.render('registred/pageA', { title: 'Cadastro de cliente', layout: 'layoutDashboard'});
  }).catch((error) => {
      console.log(error);
      res.redirect('/error');
    });
});

/* GET pageB. */
router.get('/pageB/:client_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
    console.log(client);
    res.render('registred/pageB', { title: 'Cadastro de cliente', layout: 'layoutDashboard.hbs', client_id: req.params.client_id, client});
}).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});


/* GET pageC. */
router.get('/pageC/:client_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
      console.log(client);
      res.render('registred/pageC', { title: 'Geral Page C', layout: 'layoutDashboard.hbs', client_id: req.params.client_id, client});
}).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});

/* GET pageD. */
router.get('/pageD/:client_id/:budget_id', function(req, res) {
      Client.getById(req.params.client_id).then((client) => {
        console.log(client);
        res.render('registred/pageD', { title: 'Geral Page D', layout: 'layoutDashboard.hbs',  client_id: req.params.client_id, budget_id: req.params.budget_id, client});
}).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});

/* GET pageE. */
router.get('/pageE/:client_id/:budget_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
    console.log(client);
    res.render('registred/pageE', { title: 'Geral Page E', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client});
}).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});

/* GET pageF. */

router.get('/pageF/:client_id/:budget_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
    console.log(client);
    res.render('registred/pageF', { title: 'Geral Page F', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client});
}).catch((error)=>{
    console.log(error);
    res.redirect('/error');
  });
});


/* GET pageG. */

router.get('/pageG/:client_id/:budget_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
    console.log(client);
    res.render('registred/pageG', { title: 'Geral Page G', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client});
}).catch((error)=>{
    console.log(error);
    res.redirect('/error');
  });
});

/* GET pageH. */

router.get('/pageH/:client_id/:budget_id', function(req, res) {
  Budget.getById(req.params.client_id).then((budget) => {
    console.log(budget);
    res.render('registred/pageH', { title: 'Geral Page H', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, budget});
}).catch((error)=>{
    console.log(error);
    res.redirect('/error');
  });
});


/*POST pageA*/
router.post('/pageA',(req,res) => {
  const  client  = req.body.client;
  Client.update(client).then((client_id) => {
    console.log(client_id);
    console.log(client);
    res.redirect(`/registred/pageRegistred`);
  }).catch((error) => {
    console.log(error);
    res.redirect('error');
  });
});

/*POST pageB*/
router.post('/pageB/:client_id',(req,res) => {
  const  client  = req.body.client;
  const  client_id = req.params.client_id;

  if(client.profile_Status != 'Status'){
    client.profile_Status = 'empty';
  };
  if(client.profile_Conhecimento != 'Conhecimento'){
    client.profile_Conhecimento = 'empty';
  };
  Client.update(client_id, client).then(() => {
    res.redirect(`/registred/pageRegistred`);
  }).catch((error) => {
    console.log(error);
    res.redirect('error');
  });
});

/*POST pageC*/
router.post('/pageC/:client_id',(req,res) => {
  const  budget = req.body.budget;
  const  client_id = req.params.client_id;
  Budget.update(budget).then((budget_id) => {
    Client.addBudget(client_id, budget_id).then(() => {
        res.redirect(`/registred/pageD/${client_id}/${budget_id}`);
      }).catch((error) => {
        console.log(error);
        res.redirect('error');
      });
  }).catch((error) => {
    console.log(error);
    res.redirect('error');
  });
});

/*POST pageD*/
router.post('/pageD/:client_id/:budget_id',(req,res) => {
  const  flight = req.body.flight;
  const  budget_id = req.params.budget_id;
  const  client_id = req.params.client_id;
  Flight.update(flight).then((flight_id) => {
    Budget.addFlight(budget_id, flight_id).then(() => {
      console.log(flight);
      res.redirect(`/registred/pageE/${client_id}/${budget_id}`);
    }).catch((error) => {
      console.log(error);
      res.redirect('error');
    });
  }).catch((error) => {
    console.log(error);
    res.redirect('error');
  });
});


/*POST pageE*/
router.post('/pageE/:client_id/:budget_id',(req,res) => {
  const  hotel = req.body.hotel;
  const  budget_id = req.params.budget_id;
  const  client_id = req.params.client_id;
  Hotel.update(hotel).then((hotel_id) => {
    Budget.addHotel(budget_id, hotel_id).then(() => {
      console.log(hotel);
      res.redirect(`/registred/pageF/${client_id}/${budget_id}`);
    }).catch((error) => {
      console.log(error);
      res.redirect('error');
    });
  }).catch((error) => {
    console.log(error);
    res.redirect('error');
  });
});

/*POST pageF*/
router.post('/pageF/:client_id/:budget_id',(req,res) => {
  const  car = req.body.car;
  const  budget_id = req.params.budget_id;
  const  client_id = req.params.client_id;
  Car.update(car).then((car_id) => {
    Budget.addCar(budget_id, car_id).then(() => {
      console.log(car);
      res.redirect(`/registred/pageG/${client_id}/${budget_id}`);
    }).catch((error) => {
      console.log(error);
      res.redirect('error');
    });
  }).catch((error) => {
    console.log(error);
    res.redirect('error');
  });
});

/*POST pageG*/
router.post('/pageG/:client_id/:budget_id',(req,res) => {
  const  safe = req.body.safe;
  const  budget_id = req.params.budget_id;
  const  client_id = req.params.client_id;
  Safe.update(safe).then((safe_id) => {
    Budget.addSafe(budget_id, safe_id).then(() => {
      res.redirect(`/registred/pageH/${client_id}/${budget_id}`);
    }).catch((error) => {
      console.log(error);
      res.redirect('error');
    });
  }).catch((error) => {
    console.log(error);
    res.redirect('error');
  });
});


module.exports = router;
