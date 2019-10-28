var express = require('express');
var router = express.Router();
const Client = require('../models/client');
const Flight = require('../models/flight');
const Hotel = require('../models/hotel');
const Budget = require('../models/budget');
const Car = require('../models/car');
const Safe = require('../models/safe');


router.get('/PagePersonal/:client_id', function (req, res) {
  Client.getAllBudgetsById(req.params.client_id).then((budgets)=>{
    console.log(budgets);
    console.log('----//----//----');
    res.render('registred/PagePersonal', { budgets, title: 'Personal', layout: 'layoutDashboard',...req.session});
  }).catch((error) => {
   console.log(error);
   res.redirect('/error');
  });
});

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
router.get('/pageC/:budget_id', function(req, res) {
  Budget.getById(req.params.budget_id).then((budget) => {

    const allScripts = [];

    console.log(req.session);
          for (var i = 0; i < budget.planCountry.length; i++) {

            const script = {
              countryName: String,
              cityName: String,
              scriptDate: Date,
              freeField: String
            };

            script.planCountry = budget.planCountry[i];
            script.planCity = budget.planCity[i];
            script.planDate = budget.planDate[i];
            script.planFreeField = budget.planFreeField[i]
            allScripts.push(script);
            // console.log(allScripts.countryName);
          }

    res.render('registred/pageC', { title: 'Geral Page C', layout: 'layoutDashboard.hbs', client_id: req.params.client_id, budget, allScripts});
}).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});

/* GET pageD. */
router.get('/pageD/:client_id/:budget_id', function(req, res) {
      Client.getById(req.params.client_id).then((client) => {
        Budget.getById(req.params.budget_id).then((budget) => {
          Flight.getById(budget.flights).then((flights) => {

            const allFlights = [];

            var j = 0;

            for (var i = 0; i < flights.escalas.length; i++) {
              // console.log("loop rodando yeeeet");
              // console.log(testando.vetor[i]);


              const flightInfo ={

                escala: Number,
                final: Number,

                from: String,
                destination: String,
                dateFrom: Date,
                dateDestination: Date,

                tariffValueCHD: Number,
                taxValueCHD: Number,
                ravValueCHD: Number,
                totalValueCHD: Number,

                tariffValueInf: Number,
                taxValueInf:Number,
                ravValueInf: Number,
                totalValueInf: Number,

                tariffValueAdult: Number,
                taxValueAdult: Number,
                ravValueAdult: Number,
                totalValueAdult: Number,
              };
              // é escala
              if (flights.escalas[i] == 1) {
                flightInfo.escala = 1;
              }

              // não é escala
              else{
                flightInfo.escala = 0;
              }

              //Descobre se o é o ultimo antes do próximo Voo
              if (flights.escalas[(i+1)] != 1) {//é final

                flightInfo.final = 1
                if (j > 1) {

                  flightInfo.tariffValueCHD = 0;
                  flightInfo.taxValueCHD = 1;
                  flightInfo.ravValueCHD = 2;
                  flightInfo.totalValueCHD = 3;

                  flightInfo.tariffValueInf = 4;
                  flightInfo.taxValueInf = 5;
                  // flightInfo.ravValueInf = flights.ravValueInf[j];
                  flightInfo.totalValueInf = 7;

                  flightInfo.tariffValueAdult = 8;
                  flightInfo.taxValueAdult = 9;
                  flightInfo.ravValueAdult = 10;
                  flightInfo.totalValueAdult = 11;

                }
                else {

                  flightInfo.tariffValueCHD = flights.tariffValueCHD[j];
                  flightInfo.taxValueCHD = flights.taxValueCHD[j];
                  flightInfo.ravValueCHD = flights.ravValueCHD[j];
                  flightInfo.totalValueCHD = flights.totalValueCHD[j];

                  flightInfo.tariffValueInf = flights.tariffValueInf[j];
                  flightInfo.taxValueInf = flights.taxValueInf[j];
                  // flightInfo.ravValueInf = flights.ravValueInf[j];
                  flightInfo.totalValueInf = flights.totalValueInf[j];

                  flightInfo.tariffValueAdult = flights.tariffValueAdult[j];
                  flightInfo.taxValueAdult = flights.taxValueAdult[j];
                  flightInfo.ravValueAdult = flights.ravValueAdult[j];
                  flightInfo.totalValueAdult = flights.totalValueAdult[j];
                }
                j++;

              }

              else {
                flightInfo.tariffValueCHD = 0;
                flightInfo.taxValueCHD = 0;
                flightInfo.ravValueCHD = 0;
                flightInfo.totalValueCHD = 0;

                flightInfo.tariffValueInf = 0;
                flightInfo.taxValueInf = 0;
                flightInfo.ravValueInf = 0;
                flightInfo.totalValueInf = 0;

                flightInfo.tariffValueAdult = 0;
                flightInfo.taxValueAdult = 0;
                flightInfo.ravValueAdult = 0;
                flightInfo.totalValueAdult = 0;
              }

              flightInfo.from = flights.from[i];
              flightInfo.destination = flights.destination[i];
              allFlights.push(flightInfo);
            }

            res.render('registred/pageD', { title: 'Geral Page D', layout: 'layoutDashboard.hbs',  client_id: req.params.client_id, budget_id: req.params.budget_id, client, allFlights, flights});
          }).catch((error) => {
            console.log(error);
          });
        }).catch((error) => {
          console.log(error);
          res.redirect('/error');
        })
}).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});

/* GET pageE. */
router.get('/pageE/:client_id/:budget_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
    Budget.getById(req.params.budget_id).then((budget) => {
      Hotel.getById(budget.hotels).then((hotel) => {

        const allHotels = [];

        for (var i = 0; i < hotel.hotel1.length; i++) {
          const hotelsInfo = {
            city: String,
            hotel1: String,
            hotel2: String,
            hotel3: String,
            valueApt1: Number,
            valueApt2: Number,
            valueApt3: Number,
            numberDaily1: Number,
            numberDaily2: Number,
            numberDaily3: Number,
            numberApt1:Number,
            numberApt2: Number,
            numberApt3: Number,
            total1: Number,
            total2: Number,
            total3: Number,
            category1: String,
            category2: String,
            category3: String,
            food1: String,
            food2: String,
            food3: String,
            cancellationPeriod:String,
            cancellationPeriod2:String,
            cancellationPeriod3:String
          };
          hotelsInfo.city = hotel.city[i];
          hotelsInfo.hotel1 = hotel.hotel1[i];
          hotelsInfo.hotel2 = hotel.hotel2[i];
          hotelsInfo.hotel3 = hotel.hotel3[i];
          hotelsInfo.valueApt1 = hotel.valueApt1[i];
          hotelsInfo.valueApt2 = hotel.valueApt2[i];
          hotelsInfo.valueApt3 = hotel.valueApt3[i];
          hotelsInfo.numberDaily1 = hotel.numberDaily1[i];
          hotelsInfo.numberDaily2 = hotel.numberDaily2[i];
          hotelsInfo.numberDaily3 = hotel.numberDaily3[i];
          hotelsInfo.numberApt1 = hotel.numberApt1[i];
          hotelsInfo.numberApt2 = hotel.numberApt2[i];
          hotelsInfo.numberApt3 = hotel.numberApt3[i];
          hotelsInfo.total1 = hotel.total1[i];
          hotelsInfo.total2 = hotel.total2[i];
          hotelsInfo.total3 = hotel.total3[i];
          hotelsInfo.category1 = hotel.category1[i];
          hotelsInfo.category2 = hotel.category2[i];
          hotelsInfo.category3 = hotel.category3[i];
          hotelsInfo.food1 = hotel.food1[i];
          hotelsInfo.food2  = hotel.food2[i];
          hotelsInfo.food3 = hotel.food3[i];
          hotelsInfo.cancellationPeriod = hotel.cancellationPeriod[i];
          hotelsInfo.cancellationPeriod2 = hotel.cancellationPeriod2[i];
          hotelsInfo.cancellationPeriod3 = hotel.cancellationPeriod3[i];

          allHotels.push(hotelsInfo);
        }

        console.log('passou na E Get =========================================================');
        res.render('registred/pageE', { title: 'Geral Page E', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, allHotels});
      }).catch((error) => {
          console.log(error);
          res.redirect('/error');
        });
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
    Budget.getById(req.params.budget_id).then((budget) => {
      Car.getById(budget.cars).then((car) => {

        const allCars = [];
        const allCarsTraslado = [];

        for (var i = 0; i < car.from.length; i++) {

          const carsTrasladoInfo = {

            from: String,
            to: String,
            dateFrom: String,
            timeFrom: String,
            dateTo: String,
            timeTo: String,
            valueADT: String,
            valueCHD: String,
            valueINF: String,
            totalTranslado: Number,
          };

          carsTrasladoInfo.from = car.from[i];
          carsTrasladoInfo.to = car.to[i];
          carsTrasladoInfo.dateFrom = car.dateFrom[i];
          carsTrasladoInfo.timeFrom = car.timeFrom[i];
          carsTrasladoInfo.dateTo = car.dateTo[i];
          carsTrasladoInfo.timeTo = car.timeTo[i];
          carsTrasladoInfo.valueADT = car.valueADT[i];
          carsTrasladoInfo.valueCHD = car.valueCHD[i];
          carsTrasladoInfo.valueINF = car.valueINF[i];
          carsTrasladoInfo.totalTranslado = car.totalTranslado[i];

          allCarsTraslado.push(carsTrasladoInfo);
        }

        for (var j = 0; j < car.typeCar.length; j++) {

          const carsInfo = {

            typeCar: String,
            withdrawal: String,
            delivery: String,
            totalCar: Number,
            city: String,
            shift:String,
            safe: String,
            others: String
          };

          carsInfo.typeCar = car.typeCar[j];
          carsInfo.withdrawal = car.withdrawal[j];
          carsInfo.delivery = car.delivery[j];
          carsInfo.totalCar = car.totalCar[j];
          carsInfo.city = car.city[j];
          carsInfo.shift = car.shift[j];
          carsInfo.safe = car.safe[j];
          carsInfo.others = car.others[j];

          allCars.push(carsInfo);
        }

        console.log('OLHA O GET DA F -----------------------------');
        res.render('registred/pageF', { title: 'Geral Page F', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client, allCars, allCarsTraslado});
      }).catch((error) => {
        console.log(error);
        res.redirect('/error');
      });
    }).catch((error) => {
      console.log(error);
      res.redirect('/error');
    });
  }).catch((error)=>{
      console.log(error);
      res.redirect('/error');
  });
});


/* GET pageG. */

router.get('/pageG/:client_id/:budget_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
    Budget.getById(req.params.budget_id).then((budget) => {
      Safe.getById(budget.safes).then((safe) => {

        const allSafes = [];
        const allTickets = [];
        const allOthers = [];

        for (var i = 0; i < safe.insuranceName.length; i++) {

          const safeInfo = {

            insuranceName: String,
            insuranceADT: String,
            insuranceCHD: String,
            insuranceINF: String,
            insuranceTOT: String,
            insuranceCoverage: String,
          };

          safeInfo.insuranceName = safe.insuranceName[i];
          safeInfo.insuranceADT = safe.insuranceADT[i];
          safeInfo.insuranceCHD = safe.insuranceCHD[i];
          safeInfo.insuranceINF = safe.insuranceINF[i];
          safeInfo.insuranceTOT = safe.insuranceTOT[i];
          safeInfo.insuranceCoverage = safe.insuranceCoverage[i];

          allSafes.push(safeInfo);
        }

        for (var j = 0; j < safe.ticketsName.length; j++) {

          const ticketInfo = {

            ticketsName: String,
            ticketsADT: String,
            ticketsCHD: String,
            ticketsINF: String,
            ticketsTOT: String,
          };

          ticketInfo.ticketsName = safe.ticketsName[j];
          ticketInfo.ticketsADT = safe.ticketsADT[j];
          ticketInfo.ticketsCHD = safe.ticketsCHD[j];
          ticketInfo.ticketsINF = safe.ticketsINF[j];
          ticketInfo.ticketsTOT = safe.ticketsTOT[j];

          allTickets.push(ticketInfo);
        }

        for (var k = 0; k < safe.otherName.length; k++) {

          const otherInfo = {

            otherName: String,
            otherADT: String,
            otherCHD: String,
            otherINF: String,
            otherTOT: String
          };

          otherInfo.otherName = safe.otherName[k];
          otherInfo.otherADT = safe.otherADT[k];
          otherInfo.otherCHD = safe.otherCHD[k];
          otherInfo.otherINF = safe.otherINF[k];
          otherInfo.otherTOT = safe.otherTOT[k];

          allOthers.push(otherInfo);
        }

        res.render('registred/pageG', { title: 'Geral Page G', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client, allSafes, allOthers, allTickets});
      }).catch((error) => {
          console.log(error);
          res.redirect('/error');
      });
    }).catch((error) => {
        console.log(error);
        res.redirect('/error');
    });
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

  // Necessidades
  if(client.profile_Status != 'Status'){
    client.profile_Status = 'empty';
  };
  if(client.profile_Conhecimento != 'Conhecimento'){
    client.profile_Conhecimento = 'empty';
  };
  if(client.profile_NovasExperiencias != 'NovasExperiências'){
    client.profile_NovasExperiencias = 'empty';
  };
  if(client.profile_Diversao != 'Diversão'){
    client.profile_Diversao = 'empty';
  };
  if(client.profile_BemEstar != 'BemEstar'){
    client.profile_BemEstar = 'empty';
  };
  if(client.profile_Exclusividade != 'Exclusividade'){
    client.profile_Exclusividade = 'empty';
  };

  //Perfil
  if(client.profile_Esporte != 'Esporte'){
    client.profile_Esporte = 'empty';
  };
  if(client.profile_Refinado != 'Refinado'){
    client.profile_Refinado = 'empty';
  };
  if(client.profile_Simples != 'Simples'){
    client.profile_Simples = 'empty';
  };
  if(client.profile_Cult != 'Cult'){
    client.profile_Cult = 'empty';
  };
  if(client.profile_Comida != 'Comida'){
    client.profile_Comida = 'empty';
  };
  if(client.profile_Vinhos != 'Vinhos'){
    client.profile_Vinhos = 'empty';
  };

  //Hotéis
  if(client.profile_Contemporaneo != 'Contemporâneo'){
    client.profile_Contemporaneo = 'empty';
  };
  if(client.profile_Classico != 'Clássico'){
    client.profile_Classico = 'empty';
  };
  if(client.profile_Boutique != 'Boutique'){
    client.profile_Boutique = 'empty';
  };
  if(client.profile_HotelSimples != 'Simples'){
    client.profile_HotelSimples = 'empty';
  };
  if(client.profile_AndarAlto != 'AndarAlto'){
    client.profile_AndarAlto = 'empty';
  };
  if(client.profile_AndarBaixo != 'AndarBaixo'){
    client.profile_AndarBaixo = 'empty';
  };

  //Adepto a resorts
  if(client.profile_ResortSim != 'Sim'){
    client.profile_ResortSim = 'empty';
  };
  if(client.profile_ResortNao != 'Não'){
    client.profile_ResortNao = 'empty';
  };
  if(client.profile_ResortTalvez != 'Talvez'){
    client.profile_ResortTalvez = 'empty';
  };

  //Esportes
  if(client.profile_Corrida != 'Corrida'){
    client.profile_Corrida = 'empty';
  };
  if(client.profile_Bike != 'Bike'){
    client.profile_Bike = 'empty';
  };
  if(client.profile_Natação != 'Natação'){
    client.profile_Natação = 'empty';
  };
  if(client.profile_CoriidaCarro != 'CorridaCarro'){
    client.profile_CoriidaCarro = 'empty';
  };
  if(client.profile_Musculação != 'Musculação'){
    client.profile_Musculação = 'empty';
  };
  if(client.profile_Pesca != 'Pesca'){
    client.profile_Pesca = 'empty';
  };
  if(client.profile_Mergulho != 'Mergulho'){
    client.profile_Mergulho = 'empty';
  };
  if(client.profile_Golf != 'Golf'){
    client.profile_Golf = 'empty';
  };
  if(client.profile_Tênis != 'Tênis'){
    client.profile_Tênis = 'empty';
  };

  //Gastronomia
  if(client.profile_Italiana != 'Italiana'){
    client.profile_Italiana = 'empty';
  };
  if(client.profile_Japonesa != 'Japonesa'){
    client.profile_Japonesa = 'empty';
  };
  if(client.profile_Mediterrânea != 'Mediterranea'){
    client.profile_Mediterrânea = 'empty';
  };
  if(client.profile_Indiana != 'Indiana'){
    client.profile_Indiana = 'empty';
  };
  if(client.profile_Asiática != 'Asiática'){
    client.profile_Asiática = 'empty';
  };
  if(client.profile_Francesa != 'Francesa'){
    client.profile_Francesa = 'empty';
  };
  if(client.profile_FrutosDoMar != 'FrutosDoMar'){
    client.profile_FrutosDoMar = 'empty';
  };
  if(client.profile_Carnes != 'Carnes'){
    client.profile_Carnes = 'empty';
  };

  //Fumante
  if(client.profile_SmokeSim != 'Sim'){
    client.profile_SmokeSim = 'empty';
  };
  if(client.profile_SmokeNão != 'Não'){
    client.profile_SmokeNão = 'empty';
  };

  //Alergia
  if(client.profile_AllergySim != 'Sim'){
    client.profile_AllergySim = 'empty';
  };
  if(client.profile_AllergyNão != 'Não'){
    client.profile_AllergyNão = 'empty';
  };

  //Dificuldade de locomoção
  if(client.profile_DisableSim != 'Sim'){
    client.profile_DisableSim = 'empty';
  };
  if(client.profile_DisableNão != 'Não'){
    client.profile_DisableNão = 'empty';
  };

  //Restrição alimentar
  if(client.profile_FoodSim != 'Sim'){
    client.profile_FoodSim = 'empty';
  };
  if(client.profile_FoodNão != 'Não'){
    client.profile_FoodNão = 'empty';
  };

  Client.update(client_id, client).then(() => {
    res.redirect(`/registred/pageRegistred`);
  }).catch((error) => {
    console.log(error);
    res.redirect('error');
  });
});

/*POST pageC*/
router.post('/pageC/:client_id/:budget_id',(req,res) => {
  const  budget = req.body.budget;
  const  budget_id = req.params.budget_id;
  const  client_id = req.params.client_id;
  Budget.update(budget_id, budget).then(() => {
    res.redirect(`/registred/pageD/${client_id}/${budget_id}`);
  }).catch((error) => {
    console.log(error);
    res.redirect('error');
  });
});

/*POST pageD*/
router.post('/pageD/:client_id/:budget_id',(req,res) => {
  const  flight = req.body.flight;
  // const  budget_id = req.params.budget_id;
  const  client_id = req.params.client_id;
  const budget_id = req.params.budget_id;
  Budget.getById(req.params.budget_id).then((budget) => {
    Flight.update(budget.flights, flight).then(() => {
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
  Budget.getById(budget_id).then((budget) => {
    Hotel.update(budget.hotels, hotel).then(() => {
      res.redirect(`/registred/pageF/${client_id}/${budget_id}`);
    }).catch((error) => {
      console.log('budget');
      console.log(error);
      res.redirect('error');
    });
  }).catch((error) => {
    console.log(error);
    console.log('hotel');
    res.redirect('error');
  });
});

/*POST pageF*/
router.post('/pageF/:client_id/:budget_id',(req,res) => {
  const  car = req.body.car;
  const  budget_id = req.params.budget_id;
  const  client_id = req.params.client_id;
  Budget.getById(budget_id).then((budget) => {
    Car.update(budget.cars, car).then(() => {
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
  Budget.getById(budget_id).then((budget) => {
    Safe.update(budget.safes, safe).then(() => {
      console.log('OLHA O POSTA DA F -------------------------------------------');
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
