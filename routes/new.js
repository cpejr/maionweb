var express = require('express');
var router = express.Router();
const Client = require('../models/client');
const Flight = require('../models/flight');
const Hotel = require('../models/hotel');
const Budget = require('../models/budget');
const Car = require('../models/car');
const Safe = require('../models/safe');

/* GET pageA. */
router.get('/pageA', function(req, res, next) {
  Client.getById(req.params.client_id).then((client) =>{
    res.render('new/pageA', { title: 'Cadastro de cliente', layout: 'layoutDashboard'});
  }).catch((error) => {
      console.log(error);
      res.redirect('/error');
    });
});

/* GET pageB. */
router.get('/pageB/:client_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
    console.log(client);
    res.render('new/pageB', { title: 'Cadastro de cliente', layout: 'layoutDashboard.hbs', client_id: req.params.client_id, client});
}).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});

/* GET pageC. */
router.get('/pageC/:client_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
      console.log(client);
      res.render('new/pageC', { title: 'Geral Page C', layout: 'layoutDashboard.hbs', client_id: req.params.client_id, client});
}).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});

/* GET pageD. */
router.get('/pageD/:client_id/:budget_id', function(req, res) {
      Client.getById(req.params.client_id).then((client) => {
        console.log(client);
        res.render('new/pageD', { title: 'Geral Page D', layout: 'layoutDashboard.hbs',  client_id: req.params.client_id, budget_id: req.params.budget_id, client});
}).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});

/* GET pageE. */
router.get('/pageE/:client_id/:budget_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
    console.log(client);
    res.render('new/pageE', { title: 'Geral Page E', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client});
}).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});

/* GET pageF. */

router.get('/pageF/:client_id/:budget_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
    console.log(client);
    res.render('new/pageF', { title: 'Geral Page F', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client});
}).catch((error)=>{
    console.log(error);
    res.redirect('/error');
  });
});


/* GET pageG. */

router.get('/pageG/:client_id/:budget_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
    console.log(client);
    res.render('new/pageG', { title: 'Geral Page G', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client});
}).catch((error)=>{
    console.log(error);
    res.redirect('/error');
  });
});

/* GET pageH. */

router.get('/pageH/:client_id/:budget_id', function(req, res) {
  Budget.getById(req.params.client_id).then((budget) => {
    console.log(budget);
    res.render('new/pageH', { title: 'Geral Page H', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, budget});
}).catch((error)=>{
    console.log(error);
    res.redirect('/error');
  });
});


/*POST pageA*/
router.post('/pageA',(req,res) => {
  const  client  = req.body.client;
  if (client.email == client.email1) {
    Client.create(client).then((client_id) => {
      console.log(client_id);
      console.log(client);
      res.redirect(`/new/pageB/${client_id}`);
    }).catch((error) => {
      console.log(error);
      res.redirect('error');
    });
  } else {
    res.redirect('/new/pageA');
  }
});

/*POST pageB*/
router.post('/pageB/:client_id',(req,res) => {
  const  client  = req.body.client;
  const  client_id = req.params.client_id;
  Client.update(client_id, client).then(() => {
    console.log(client);
    res.redirect(`/new/pageC/${client_id}`);
  }).catch((error) => {
    console.log(error);
    res.redirect('error');
  });
});

/*POST pageC*/
router.post('/pageC/:client_id',(req,res) => {
  const  budget = req.body.budget;
  const  client_id = req.params.client_id;
  Budget.create(budget).then((budget_id) => {
    Client.addBudget(client_id, budget_id).then(() => {
        res.redirect(`/new/pageD/${client_id}/${budget_id}`);
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
  Flight.create(flight).then((flight_id) => {
    Budget.addFlight(budget_id, flight_id).then(() => {
      console.log(flight);
      res.redirect(`/new/pageE/${client_id}/${budget_id}`);
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
  Hotel.create(hotel).then((hotel_id) => {
    Budget.addHotel(budget_id, hotel_id).then(() => {
      console.log(hotel);
      res.redirect(`/new/pageF/${client_id}/${budget_id}`);
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
  Car.create(car).then((car_id) => {
    Budget.addCar(budget_id, car_id).then(() => {
      console.log(car);
      res.redirect(`/new/pageG/${client_id}/${budget_id}`);
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
  Safe.create(safe).then((safe_id) => {
    Budget.addSafe(budget_id, safe_id).then(() => {
      res.redirect(`/new/pageH/${client_id}/${budget_id}`);
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
