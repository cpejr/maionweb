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
    res.render('new/pageB', { title: 'Cadastro de cliente', layout: 'layoutDashboard.hbs', client_id: req.params.client_id, client});
  }).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});
/* GET pageC. */
router.get('/pageC/:client_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
      const numTravel = client.budgets.length;
      const codeFile = `${client.register}_${numTravel}`;
      res.render('new/pageC', { title: 'Geral Page C', layout: 'layoutDashboard.hbs', client_id: req.params.client_id, client, codeFile});
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
              Budget.getAssociatedHotelById(req.params.budget_id).then((hotels)=>{
                Budget.getAssociatedCarById(req.params.budget_id).then((cars)=>{
                  Budget.getAssociatedSafeById(req.params.budget_id).then((safes)=>{
                          console.log(cars);
                          console.log(flights);

                                        // const datas = [];
                                        // const uData = {
                                        //   pData: String,
                                        //   uData: String
                                        // };
                                        // console.log("###############################################");
                                        // console.log(budget.planDate);
                                        // for (var i = 0; i < budget.planDate.length; i++) {
                                        //   const uData = {
                                        //     pData: String,
                                        //     uData: String
                                        //   };
                                        //   console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
                                        //   if (i=budget.planDate.length) {
                                        //     uData.pData = budget.planDate[0];
                                        //     uData.uData = budget.planDate[i];
                                        //     datas.push(uData);
                                        //   }
                                        //   console.log("------------------------------------");
                                        //   console.log(uData[i]);
                                        // }



                                        const test = [];
                                        const companions = {
                                          name: String
                                        };

                                        console.log(req.session);
                                              for (var i = 0; i < client.companionFullname.length; i++) {

                                                const companions = {
                                                  name: String
                                                };

                                                companions.name = client.companionFullname[i];
                                                test.push(companions);

                                                console.log(test[i]);

                                              }

                                              const allFlights = [];

                                              var j = 0;
                                              var v = 0;


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
                                                  numero: String
                                                };
                                                // é escala
                                                if (flights.escalas[i] == 1) {
                                                  flightInfo.escala = 1;
                                                }

                                                // não é escala
                                                else{
                                                  v++;
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


                                                flightInfo.numero = v;
                                                flightInfo.from = flights.from[i];
                                                flightInfo.destination = flights.destination[i];
                                                allFlights.push(flightInfo);
                                              }

                                               const infoHoteis = [];
                                               var h = 0;
                                               const hoteis = [{
                                                 cidade: String,
                                                 moeda: String,
                                                 tipoAcomodacao1: String,
                                                 tipoAcomodacao2: String,
                                                 tipoAcomodacao3: String,
                                                 hotel_1: String,
                                                 hotel_2: String,
                                                 hotel_3: String,
                                                 valorApto1: String,
                                                 valorApto2: String,
                                                 valorApto3: String,
                                                 numeroDiarias1: String,
                                                 numeroDiarias2: String,
                                                 numeroDiarias3: String,
                                                 numeroApto1: String,
                                                 numeroApto2: String,
                                                 numeroApto3: String,
                                                 total_1: String,
                                                 total_2: String,
                                                 total_3: String,
                                                 categoria1: String,
                                                 categoria2: String,
                                                 categoria3: String,
                                                 comida1: String,
                                                 comida2: String,
                                                 comida3: String,
                                                 periodoCancelamento1: String,
                                                 periodoCancelamento2: String,
                                                 periodoCancelamento3: String
                                               }];

                                               for (var i = 0; i < hotels.city.length; i++) {
                                                 const hoteis = [{
                                                   cidade: String,
                                                   moeda: String,
                                                   tipoAcomodacao1: String,
                                                   tipoAcomodacao2: String,
                                                   tipoAcomodacao3: String,
                                                   hotel_1: String,
                                                   hotel_2: String,
                                                   hotel_3: String,
                                                   valorApto1: String,
                                                   valorApto2: String,
                                                   valorApto3: String,
                                                   numeroDiarias1: String,
                                                   numeroDiarias2: String,
                                                   numeroDiarias3: String,
                                                   numeroApto1: String,
                                                   numeroApto2: String,
                                                   numeroApto3: String,
                                                   total_1: String,
                                                   total_2: String,
                                                   total_3: String,
                                                   categoria1: String,
                                                   categoria2: String,
                                                   categoria3: String,
                                                   comida1: String,
                                                   comida2: String,
                                                   comida3: String,
                                                   periodoCancelamento1: String,
                                                   periodoCancelamento2: String,
                                                   periodoCancelamento3: String,
                                                   numero: String
                                                 }];

                                                 h++;
                                                 hoteis.cidade = hotels.city[i];
                                                 hoteis.moeda = hotels.coin[i];
                                                 hoteis.tipoAcomodacao1 = hotels.acomodationType1[i];
                                                 hoteis.tipoAcomodacao2 = hotels.acomodationType2[i];
                                                 hoteis.tipoAcomodacao3 = hotels.acomodationType3[i];
                                                 hoteis.hotel_1 = hotels.hotel1[i];
                                                 hoteis.hotel_2 = hotels.hotel2[i];
                                                 hoteis.hotel_3 = hotels.hotel3[i];
                                                 hoteis.valorapto1 = hotels.valueApt1[i];
                                                 hoteis.valorapto2 = hotels.valueApt2[i];
                                                 hoteis.valorapto3 = hotels.valueApt3[i];
                                                 hoteis.numeroDiarias1 = hotels.numberDaily1[i];
                                                 hoteis.numeroDiarias2 = hotels.numberDaily2[i];
                                                 hoteis.numeroDiarias3 = hotels.numberDaily3[i];
                                                 hoteis.numeroApto1 = hotels.numberApt1[i];
                                                 hoteis.numeroApto2 = hotels.numberApt2[i];
                                                 hoteis.numeroApto3 = hotels.numberApt3[i];
                                                 hoteis.total_1 = hotels. total1[i];
                                                 hoteis.total_2 = hotels. total2[i];
                                                 hoteis.total_3 = hotels. total3[i];
                                                 hoteis.categoria1 = hotels.category1[i];
                                                 hoteis.categoria2 = hotels.category2[i];
                                                 hoteis.categoria3 = hotels.category3[i];
                                                 hoteis.comida1 = hotels.food1[i];
                                                 hoteis.comida2 = hotels.food2[i];
                                                 hoteis.comida3 = hotels.food3[i];
                                                 hoteis.periodoCancelamento1 = hotels.cancellationPeriod[i];
                                                 hoteis.periodoCancelamento2 = hotels.cancellationPeriod2[i];
                                                 hoteis.periodoCancelamento3 = hotels.cancellationPeriod3[i];
                                                 hoteis.numero = h;
                                                 infoHoteis.push(hoteis);
                                                console.log(infoHoteis[i]);

                                               }

                                              const infoTraslado = [];
                                              var t = 0;
                                              const traslado = [{
                                                deT: String,
                                                moedaT: String,
                                                paraT: String,
                                                dataIdaT: String,
                                                horaIdaT: String,
                                                dataParaT: String,
                                                horaParaT: String,
                                                valorAdtT: String,
                                                valorChdT: String,
                                                valorInfT: String
                                              }];


                                              for (var i = 0; i < cars.from.length; i++) {
                                                const traslado = [{
                                                  deT: String,
                                                  moedaT: String,
                                                  paraT: String,
                                                  dataIdaT: String,
                                                  horaIdaT: String,
                                                  dataParaT: String,
                                                  horaParaT: String,
                                                  valorAdtT: String,
                                                  valorChdT: String,
                                                  valorInfT: String,
                                                  numero: String
                                                }];

                                                t++;
                                                traslado.deT = cars.from[i];
                                                traslado.meodaT = cars.coinT[i];
                                                traslado.paraT = cars.to[i];
                                                traslado.dataIdaT = cars.dateFrom[i];
                                                traslado.horaIdaT = cars.timeFrom[i];
                                                traslado.dataParaT = cars.dateTo[i];
                                                traslado.horaParaT = cars.timeTo[i];
                                                traslado.valorAdtT = cars.valueADT[i];
                                                traslado.valorChdT = cars.valueCHD[i];
                                                traslado.valorInfT = cars.valueINF[i];
                                                traslado.numero = t;
                                                infoTraslado.push(traslado);
                                                console.log(infoTraslado[i]);

                                              }

                                              const infoCarros = [];
                                              var c = 0;
                                              const carros = [{
                                                moedaC: String,
                                                retirada: String,
                                                outros: String,
                                                entrega: String,
                                                valor: String,
                                                cidade: String,
                                                tipoCarro: String,
                                                transmissao: String,
                                                seguro: String
                                              }];

                                              for (var i = 0; i < cars.withdrawal.length; i++) {
                                                const carros = [{
                                                  moedaC: String,
                                                  retirada: String,
                                                  outros: String,
                                                  entrega: String,
                                                  valor: String,
                                                  cidade: String,
                                                  tipoCarro: String,
                                                  transmissao: String,
                                                  seguro: String,
                                                  numero: String
                                                }];

                                                c++;
                                                carros.moedaC = cars.coinC[i];
                                                carros.retirada = cars.withdrawal[i];
                                                carros.outros = cars.others[i];
                                                carros.entrega = cars.delivery[i];
                                                carros.valor = cars.totalCar[i];
                                                carros.cidade = cars.city[i];
                                                carros.tipoCarro = cars.typeCar[i];
                                                carros.transmissao = cars.shift[i];
                                                carros.seguro = cars.safe[i];
                                                carros.numero = c;
                                                infoCarros.push(carros);
                                                console.log(infoCarros[i]);

                                              }

                                              const infoSeguro = [];
                                              var s = 0;
                                              const seguro = [{
                                                seguro: String,
                                                moedaS: String,
                                                coberturaSeguro: String,
                                                valorAdtS: String,
                                                valorChdS: String,
                                                valorInfS: String
                                              }];

                                              for (var i = 0; i < safes.insuranceName.length; i++) {
                                                const seguro = [{
                                                  seguro: String,
                                                  moedaS: String,
                                                  coberturaSeguro: String,
                                                  valorAdtS: String,
                                                  valorChdS: String,
                                                  valorInfS: String,
                                                  numero: String
                                                }];

                                                s++;
                                                seguro.seguro = safes.insuranceName[i];
                                                seguro.moedaS = safes.insuranceCoin[i];
                                                seguro.coberturaSeguro = safes.insuranceCoverage[i];
                                                seguro.valorAdtS = safes.insuranceADT[i];
                                                seguro.valorChdS = safes.insuranceCHD[i];
                                                seguro.valorInfS = safes.insuranceINF[i];
                                                seguro.numero = s;
                                                infoSeguro.push(seguro);
                                                console.log(infoSeguro[i]);

                                              }


                                              const infoTickets = [];
                                              var ti = 0;
                                              const tickets = [{
                                                tickets: String,
                                                moedaT: String,
                                                valorAdtTk: String,
                                                valorChdTk: String,
                                                valorInfTk: String
                                              }];

                                              for (var i = 0; i < safes.ticketsName.length; i++) {
                                                const tickets = [{
                                                  tickets: String,
                                                  moedaT: String,
                                                  valorAdtTk: String,
                                                  valorChdTk: String,
                                                  valorInfTk: String,
                                                  numero: String
                                                }];

                                                ti++;
                                                tickets.tickets = safes.ticketsName[i];
                                                tickets.moedaT = safes.ticketsCoin[i];
                                                tickets.valorAdtTk = safes.ticketsADT[i];
                                                tickets.valorChdTk = safes.ticketsCHD[i];
                                                tickets.valorInfTk = safes.ticketsINF[i];
                                                tickets.numero = ti;
                                                infoTickets.push(tickets);
                                                console.log(infoTickets[i]);

                                              }


                                              const infoOutros = [];
                                              var o = 0;
                                              const outros = [{
                                                outros: String,
                                                moedaO: String,
                                                valorAdtO: String,
                                                valorChdO: String,
                                                valorInfO: String
                                              }];

                                              for (var i = 0; i < safes.otherName.length; i++) {
                                                const outros = [{
                                                  outros: String,
                                                  moedaO: String,
                                                  valorAdtO: String,
                                                  valorChdO: String,
                                                  valorInfO: String,
                                                  numero: String
                                                }];

                                                o++;
                                                outros.outros = safes.otherName[i];
                                                outros.moedaO = safes.otherCoin[i];
                                                outros.valorAdtO = safes.otherADT[i];
                                                outros.valorChdO = safes.otherCHD[i];
                                                outros.valorInfO = safes.otherINF[i];
                                                outros.numero = c;
                                                infoOutros.push(outros);
                                                console.log(infoOutros[i]);

                                              }


                                        res.render('new/pageH', { title: 'Geral Page H', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, budget, client, ...req.session, companions, test, allFlights, infoTraslado, traslado, infoCarros, carros, infoSeguro, seguro, infoTickets, tickets, infoOutros, outros, hoteis, infoHoteis});
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
  const budget = req.body.budget;
  const client_id = req.params.client_id;
  const flight = req.body.flight;
  req.session.flight = flight;
  const  hotel = req.body.hotel;
  req.session.hotel = hotel;
  const  car = req.body.car;
  req.session.car = car;
  const  safe = req.body.safe;
  req.session.safe = safe;
  Budget.create(budget).then((budget_id) => {
    Client.addBudget(client_id, budget_id).then(() => {
      Budget.motherClient(budget_id, client_id).then(() => {
        Flight.create(flight).then((flight_id) => {
          Budget.addFlight(budget_id, flight_id).then(() => {
            Hotel.create(hotel).then((hotel_id) => {
              Budget.addHotel(budget_id, hotel_id).then(() => {
                Car.create(car).then((car_id) => {
                  Budget.addCar(budget_id, car_id).then(() => {
                    Safe.create(safe).then((safe_id) => {
                      Budget.addSafe(budget_id, safe_id).then(() => {
                        res.redirect(`/new/pageD/${client_id}/${budget_id}`);
                      }).catch((error) =>{
                        console.log(error);
                        res.redirect('error');
                      });
                    }).catch((error) =>{
                      console.log(error);
                      res.redirect('error');
                    });
                  }).catch((error) =>{
                    console.log(error);
                    res.redirect('error');
                  });
                }).catch((error) =>{
                  console.log(error);
                  res.redirect('error');
                });
              }).catch((error) =>{
                console.log(error);
                res.redirect('error');
              });
            }).catch((error) =>{
              console.log(error);
              res.redirect('error');
            });
          }).catch((error) =>{
            console.log(error);
            res.redirect('error');
          });
        }).catch((error) =>{
          console.log(error);
          res.redirect('error');
        });
      }).catch((error) =>{
        console.log(error);
        res.redirect('error');
      });
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
  const  client_id = req.params.client_id;
  const budget_id = req.params.budget_id;
  Budget.getById(req.params.budget_id).then((budget) => {
    console.log('------------------------------------------');
    console.log(flight);
    console.log('------------------------------------------');
    Flight.update(budget.flights, flight).then(() => {
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
  Budget.getById(budget_id).then((budget) => {
    Hotel.update(budget.hotels, hotel).then(() => {
      res.redirect(`/new/pageF/${client_id}/${budget_id}`);
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
  Budget.getById(budget_id).then((budget) => {
    Safe.update(budget.safes, safe).then(() => {
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
