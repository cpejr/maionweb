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
          Budget.getById(req.params.budget_id).then((budget)=>{
            const test0 = [];
            const companions0 = [{
              name: String
            }];


            console.log(req.session);
                  for (var i = 0; i < client.companionFullname.length; i++) {

                    const companions0 = {
                      name: String
                    };

                    companions0.name = client.companionFullname[i];
                    test0.push(companions0);

                    console.log(test0[i]);

                  }
                    res.render('new/pageD', { title: 'Geral Page D', layout: 'layoutDashboard.hbs',  client_id: req.params.client_id, budget_id: req.params.budget_id, client, budget, companions0, test0});
            }).catch((error) => {
                console.log(error);
                res.redirect('/error');
              });
        }).catch((error) => {
          console.log(error);
          res.redirect('/error');
        });
});
/* GET pageE. */
router.get('/pageE/:client_id/:budget_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
      Budget.getById(req.params.budget_id).then((budget)=>{
        const test1 = [];
        const companions1 = [{
          name: String
        }];


        console.log(req.session);
              for (var i = 0; i < client.companionFullname.length; i++) {

                const companions1 = {
                  name: String
                };

                companions1.name = client.companionFullname[i];
                test1.push(companions1);

                console.log(test1[i]);

              }
        console.log(req.session);
                res.render('new/pageE', { title: 'Geral Page E', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client, budget, ...req.session, companions1, test1});
            }).catch((error) => {
                console.log(error);
                res.redirect('/error');
              });
            }).catch((error) => {
              console.log(error);
              res.redirect('/error');
            });
});
/* GET pageF. */
router.get('/pageF/:client_id/:budget_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
      Budget.getById(req.params.budget_id).then((budget)=>{
        const test2 = [];
        const companions2 = [{
          name: String
        }];


        console.log(req.session);
              for (var i = 0; i < client.companionFullname.length; i++) {

                const companions2 = {
                  name: String
                };

                companions2.name = client.companionFullname[i];
                test2.push(companions2);

                console.log(test2[i]);

              }
                console.log(req.session);
                res.render('new/pageF', { title: 'Geral Page F', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client, budget, ...req.session, companions2, test2});
            }).catch((error)=>{
                console.log(error);
                res.redirect('/error');
              });
          }).catch((error) => {
            console.log(error);
            res.redirect('/error');
          });
});
/* GET pageG. */
router.get('/pageG/:client_id/:budget_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
      Budget.getById(req.params.budget_id).then((budget)=>{
        const test3 = [];
        const companions3 = [{
          name: String
        }];


        console.log(req.session);
              for (var i = 0; i < client.companionFullname.length; i++) {

                const companions3 = {
                  name: String
                };

                companions3.name = client.companionFullname[i];
                test3.push(companions3);

                console.log(test3[i]);

              }
                    console.log(req.session);
                    res.render('new/pageG', { title: 'Geral Page G', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client, budget, ...req.session, companions3, test3});
                }).catch((error)=>{
                    console.log(error);
                    res.redirect('/error');
                  });
                }).catch((error) => {
                  console.log(error);
                  res.redirect('/error');
                });
});

/* GET pageH. */

router.get('/pageH/:client_id/:budget_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
        Budget.getById(req.params.budget_id).then((budget) => {
          Budget.getAssociatedFlightById(req.params.budget_id).then((flights)=>{
            console.log(flights);
            
          const test = [];
          const companions = [{
            name: String
          }];


          console.log(req.session);
                for (var i = 0; i < client.companionFullname.length; i++) {

                  const companions = {
                    name: String
                  };

                  companions.name = client.companionFullname[i];
                  test.push(companions);

                  console.log(test[i]);

                }

                 const infoVoosida = [];
                 const voos1 = [{
                   de: String
                 }];

                 for (var i = 0; i < flights.from.length; i++) {
                   const voos1= [{
                     de: String
                   }];

                   voos1.de = flights.from[i];
                   infoVoosida.push(voos1);
                   console.log(infoVoosida[i]);
                 }

                 const infoVoospara = [];
                 const voos2 = [{
                   para: String
                 }];

                 for (var i = 0; i < flights.destination.length; i++) {
                   const voos2= [{
                     para: String
                   }];

                   voos2.para = flights.destination[i];
                   infoVoospara.push(voos2);
                   console.log(infoVoospara[i]);
                 }

                 const infoVoosdataida = [];
                 const voos3 = [{
                   dataIda: String
                 }];

                 for (var i = 0; i < flights.dateFrom.length; i++) {
                   const voos3= [{
                     dataIda: String
                   }];

                   voos2.dataIda = flights.dateFrom[i];
                   infoVoosdataida.push(voos3);
                   console.log(infoVoosdataida[i]);
                 }

                 const infoVoosdatapara = [];
                 const voos4 = [{
                   dataPara: String
                 }];

                 for (var i = 0; i < flights.dateDestination.length; i++) {
                   const voos4= [{
                     dataPara: String
                   }];

                   voos4.dataPara = flights.dateDestination[i];
                   infoVoosdatapara.push(voos4);
                   console.log(infoVoosdatapara[i]);
                 }

                 const infoVoosvalor = [];
                 const voos5 = [{
                   valortotal: String
                 }];

                 for (var i = 0; i < flights.finalValue.length; i++) {
                   const voos5= [{
                     valortotal: String
                   }];

                   voos5.valortotal = flights.finalValue[i];
                   infoVoosvalor.push(voos5);
                   console.log(infoVoosvalor[i]);
                 }




                        res.render('new/pageH', { title: 'Geral Page H', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, budget, client, ...req.session, companions, test, infoVoosida, voos1, infoVoospara, voos2, infoVoosdataida, voos3, infoVoosdatapara, voos4, infoVoosvalor, voos5});
                    }).catch((error)=>{
                        console.log(error);
                        res.redirect('/error');
                      });
              }).catch((error)=>{
                console.log(error);
                res.redirect('/error');
            });
          }).catch((error)=>{
            console.log(error);
            res.redirect('/error');
          });
});

/*POST pageA*/
router.post('/pageA',(req,res) => {
  const  client  = req.body.client;
  // if (client.email == client.email1) {
    Client.create(client).then((client_id) => {
      console.log(client_id);
      console.log(client);
      res.redirect(`/new/pageB/${client_id}`);
    }).catch((error) => {
      console.log(error);
      res.redirect('error');
    });
  // } else {
  //   res.redirect('/new/pageA');
  // }
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
  const flight = req.body.flight;
  req.session.flight = flight;
  const  budget_id = req.params.budget_id;
  const  client_id = req.params.client_id;
  Flight.create(flight).then((flight_id) => {
    Budget.addFlight(budget_id, flight_id).then(() => {
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
  req.session.hotel = hotel;
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
  req.session.car = car;
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
  req.session.safe = safe;
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
