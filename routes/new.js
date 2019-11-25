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
    //console.log(error);
    res.redirect('/error');
  });
});
/* GET pageB. */
router.get('/pageB/:client_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
    res.render('new/pageB', { title: 'Cadastro de cliente', layout: 'layoutDashboard.hbs', client_id: req.params.client_id, client});
  }).catch((error) => {
    //console.log(error);
    res.redirect('/error');
  });
});
/* GET pageC. */
router.get('/pageC/:client_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
      const numTravel = client.budgets.length;
      var now = new Date;
      var year = now.getFullYear();
      const codeFile = `${client.register}_${numTravel}_${year}`;
      res.render('new/pageC', { title: 'Geral Page C', layout: 'layoutDashboard.hbs', client_id: req.params.client_id, client, codeFile});
}).catch((error) => {
    //console.log(error);
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


            //console.log(req.session);
                  for (var i = 0; i < client.companionFullname.length; i++) {

                    const companions0 = {
                      name: String
                    };

                    companions0.name = client.companionFullname[i];
                    test0.push(companions0);

                    //console.log(test0[i]);

                  }
                    res.render('new/pageD', { title: 'Geral Page D', layout: 'layoutDashboard.hbs',  client_id: req.params.client_id, budget_id: req.params.budget_id, client, budget, companions0, test0});
            }).catch((error) => {
                //console.log(error);
                res.redirect('/error');
              });
        }).catch((error) => {
          //console.log(error);
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


        //console.log(req.session);
              for (var i = 0; i < client.companionFullname.length; i++) {

                const companions1 = {
                  name: String
                };

                companions1.name = client.companionFullname[i];
                test1.push(companions1);

                //console.log(test1[i]);

              }
        //console.log(req.session);
                res.render('new/pageE', { title: 'Geral Page E', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client, budget, ...req.session, companions1, test1});
            }).catch((error) => {
                //console.log(error);
                res.redirect('/error');
              });
            }).catch((error) => {
              //console.log(error);
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


        //console.log(req.session);
              for (var i = 0; i < client.companionFullname.length; i++) {

                const companions2 = {
                  name: String
                };

                companions2.name = client.companionFullname[i];
                test2.push(companions2);

                //console.log(test2[i]);

              }
                //console.log(req.session);
                res.render('new/pageF', { title: 'Geral Page F', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client, budget, ...req.session, companions2, test2});
            }).catch((error)=>{
                //console.log(error);
                res.redirect('/error');
              });
          }).catch((error) => {
            //console.log(error);
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


        //console.log(req.session);
              for (var i = 0; i < client.companionFullname.length; i++) {

                const companions3 = {
                  name: String
                };

                companions3.name = client.companionFullname[i];
                test3.push(companions3);

                //console.log(test3[i]);

              }
                    //console.log(req.session);
                    res.render('new/pageG', { title: 'Geral Page G', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client, budget, ...req.session, companions3, test3});
                }).catch((error)=>{
                    //console.log(error);
                    res.redirect('/error');
                  });
                }).catch((error) => {
                  //console.log(error);
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
                          //console.log(cars);
                          //console.log(flights);



                                        const test = [];
                                        const companions = {
                                          name: String
                                        };

                                        //console.log(req.session);
                                              for (var i = 0; i < client.companionFullname.length; i++) {

                                                const companions = {
                                                  name: String
                                                };

                                                companions.name = client.companionFullname[i];
                                                test.push(companions);

                                                //console.log(test[i]);

                                              }

                                              const allFlights = [];
                                              const infoToReplica = {
                                                ageId1: Number,
                                                ageId2:Number,
                                                ageId3: Number,
                                                idTable: Number,
                                              };

                                              var j = 0;
                                              var id_table = 1;
                                              var age_id1 = 1;
                                              var age_id2 = 2;
                                              var age_id3 = 3;
                                              var result = 1;

                                              for (var i = 0; i < flights.escalas.length; i++) {
                                                // //console.log("loop rodando yeeeet");
                                                // //console.log(testando.vetor[i]);


                                                const flightInfo ={

                                                  escala: Number,
                                                  final: Number,
                                                  inicio: Number,
                                                  idTable: Number,
                                                  ageId1: Number,
                                                  ageId2: Number,
                                                  ageId3: Number,
                                                  result: Number,
                                                  firstflightTable: Number,

                                                  flightNum: String,
                                                  dateFlight:String,
                                                  from:String,
                                                  destination:String,
                                                  timeOut: String,
                                                  timeIn: String,
                                                  coin:String,

                                                  // Primeira classe
                                                  totalValueCHD_FirstClass: Number,
                                                  tariffValueCHD_FirstClass: Number,
                                                  taxValueCHD_FirstClass: Number,
                                                  ravValueCHD_FirstClass: Number,
                                                  numCHD_FirstClass: Number,

                                                  totalValueAdult_FirstClass: Number,
                                                  tariffValueAdult_FirstClass: Number,
                                                  taxValueAdult_FirstClass: Number,
                                                  ravValueAdult_FirstClass: Number,
                                                  numADT_FirstClass: Number,

                                                  totalValueInf_FirstClass: Number,
                                                  tariffValueInf_FirstClass: Number,
                                                  taxValueInf_FirstClass: Number,
                                                  ravValueInf_FirstClass: Number,
                                                  numINF_FirstClass: Number,

                                                  // Executivo
                                                  totalValueCHD_Executive: Number,
                                                  tariffValueCHD_Executive: Number,
                                                  taxValueCHD_Executive: Number,
                                                  ravValueCHD_Executive: Number,
                                                  numCHD_Executive: Number,

                                                  totalValueAdult_Executive: Number,
                                                  tariffValueAdult_Executive: Number,
                                                  taxValueAdult_Executive: Number,
                                                  ravValueAdult_Executive: Number,
                                                  numADT_Executive: Number,

                                                  totalValueInf_Executive: Number,
                                                  tariffValueInf_Executive: Number,
                                                  taxValueInf_Executive: Number,
                                                  ravValueInf_Executive: Number,
                                                  numINF_Executive: Number,

                                                  // Econômico
                                                  totalValueCHD_Economic: Number,
                                                  tariffValueCHD_Economic: Number,
                                                  taxValueCHD_Economic: Number,
                                                  ravValueCHD_Economic: Number,
                                                  numCHD_Economic: Number,

                                                  totalValueAdult_Economic: Number,
                                                  tariffValueAdult_Economic: Number,
                                                  taxValueAdult_Economic: Number,
                                                  ravValueAdult_Economic: Number,
                                                  numADT_Economic: Number,

                                                  totalValueInf_Economic: Number,
                                                  tariffValueInf_Economic: Number,
                                                  taxValueInf_Economic: Number,
                                                  ravValueInf_Economic: Number,
                                                  numINF_Economic: Number,
                                                };
                                                // é escala
                                                if (flights.escalas[i] == 1) {
                                                  flightInfo.escala = 1;
                                                }
                                                // não é escala
                                                else{
                                                  flightInfo.escala = 0;
                                                }

                                                //Descobre se o voo atual é o ultimo antes do próximo Voo
                                                if (flights.escalas[(i+1)] != 1) {//Se o próximo voo não for uma escala, o voo atual acaba e temos que printar as taxas junto a essa última escala ou voo

                                                  flightInfo.final = 1

                                                    // Primeira classe
                                                    flightInfo.tariffValueCHD_FirstClass = flights.tariffValueCHD_FirstClass[j];
                                                    flightInfo.taxValueCHD_FirstClass = flights.taxValueCHD_FirstClass[j];
                                                    flightInfo.ravValueCHD_FirstClass = flights.ravValueCHD_FirstClass[j];
                                                    flightInfo.totalValueCHD_FirstClass = flights.totalValueCHD_FirstClass[j];
                                                    flightInfo.numADT_FirstClass = flights.numADT_FirstClass[j];

                                                    flightInfo.tariffValueInf_FirstClass = flights.tariffValueInf_FirstClass[j];
                                                    flightInfo.taxValueInf_FirstClass = flights.taxValueInf_FirstClass[j];
                                                    flightInfo.ravValueInf_FirstClass = flights.ravValueInf_FirstClass[j];
                                                    flightInfo.totalValueInf_FirstClass = flights.totalValueInf_FirstClass[j];
                                                    flightInfo.numCHD_FirstClass = flights.numCHD_FirstClass[j];

                                                    flightInfo.tariffValueAdult_FirstClass = flights.tariffValueAdult_FirstClass[j];
                                                    flightInfo.taxValueAdult_FirstClass = flights.taxValueAdult_FirstClass[j];
                                                    flightInfo.ravValueAdult_FirstClass = flights.ravValueAdult_FirstClass[j];
                                                    flightInfo.totalValueAdult_FirstClass = flights.totalValueAdult_FirstClass[j];
                                                    flightInfo.numINF_FirstClass = flights.numINF_FirstClass[j];

                                                    // Executivo
                                                    flightInfo.tariffValueCHD_Executive = flights.tariffValueCHD_Executive[j];
                                                    flightInfo.taxValueCHD_Executive = flights.taxValueCHD_Executive[j];
                                                    flightInfo.ravValueCHD_Executive = flights.ravValueCHD_Executive[j];
                                                    flightInfo.totalValueCHD_Executive = flights.totalValueCHD_Executive[j];
                                                    flightInfo.numADT_Executive = flights.numADT_Executive[j];

                                                    flightInfo.tariffValueInf_Executive = flights.tariffValueInf_Executive[j];
                                                    flightInfo.taxValueInf_Executive = flights.taxValueInf_Executive[j];
                                                    flightInfo.ravValueInf_Executive = flights.ravValueInf_Executive[j];
                                                    flightInfo.totalValueInf_Executive = flights.totalValueInf_Executive[j];
                                                    flightInfo.numCHD_Executive = flights.numCHD_Executive[j];

                                                    flightInfo.tariffValueAdult_Executive = flights.tariffValueAdult_Executive[j];
                                                    flightInfo.taxValueAdult_Executive = flights.taxValueAdult_Executive[j];
                                                    flightInfo.ravValueAdult_Executive = flights.ravValueAdult_Executive[j];
                                                    flightInfo.totalValueAdult_Executive = flights.totalValueAdult_Executive[j];
                                                    flightInfo.numINF_Executive = flights.numINF_Executive[j];

                                                    // Econômico
                                                    flightInfo.tariffValueCHD_Economic = flights.tariffValueCHD_Economic[j];
                                                    flightInfo.taxValueCHD_Economic = flights.taxValueCHD_Economic[j];
                                                    flightInfo.ravValueCHD_Economic = flights.ravValueCHD_Economic[j];
                                                    flightInfo.totalValueCHD_Economic = flights.totalValueCHD_Economic[j];
                                                    flightInfo.numADT_Economic = flights.numADT_Economic [j];

                                                    flightInfo.tariffValueInf_Economic = flights.tariffValueInf_Economic[j];
                                                    flightInfo.taxValueInf_Economic = flights.taxValueInf_Economic[j];
                                                    flightInfo.ravValueInf_Economic = flights.ravValueInf_Economic[j];
                                                    flightInfo.totalValueInf_Economic = flights.totalValueInf_Economic[j];
                                                    flightInfo.numCHD_Economic = flights.numCHD_Economic[j];

                                                    flightInfo.tariffValueAdult_Economic = flights.tariffValueAdult_Economic[j];
                                                    flightInfo.taxValueAdult_Economic = flights.taxValueAdult_Economic[j];
                                                    flightInfo.ravValueAdult_Economic = flights.ravValueAdult_Economic[j];
                                                    flightInfo.totalValueAdult_Economic = flights.totalValueAdult_Economic[j];
                                                    flightInfo.numINF_Economic = flights.numINF_Economic[j];

                                                    flightInfo.ageId1 = age_id1;//Aqui é pra poder fazer a mudança de valor das id's dos campos
                                                    flightInfo.ageId2 = age_id2;
                                                    flightInfo.ageId3 = age_id3;
                                                    flightInfo.result = result;
                                                    age_id1 = age_id1 +3;
                                                    age_id2 = age_id2 +3;
                                                    age_id3 = age_id3 +3;
                                                    result++;
                                                  j++;

                                                }


                                                // identifica onde coemeça uma nova tabela
                                                if(flightInfo.escala == 0){
                                                  flightInfo.inicio = 1;
                                                  flightInfo.idTable = id_table; // Muda o número do id da tabela pra a seleção de bloco funcionar
                                                  id_table++;
                                                }

                                                else {
                                                  flightInfo.inicio = 0;
                                                }

                                                if(i == 0){
                                                  flightInfo.firstflightTable = 1;
                                                }

                                                // Essas informações tem que ser sempre pegas
                                                flightInfo.flightNum = flights.flightNum[i];
                                                flightInfo.dateFlight = flights.dateFlight[i];
                                                flightInfo.from = flights.from[i];
                                                flightInfo.destination = flights.destination[i];
                                                flightInfo.timeOut = flights.timeOut[i];
                                                flightInfo.timeIn = flights.timeIn[i];
                                                flightInfo.coin = flights.coin[i];

                                                allFlights.push(flightInfo);
                                              }

                                              infoToReplica.ageId1 = age_id1;
                                              infoToReplica.ageId2 = age_id2;
                                              infoToReplica.ageId3 = age_id3;
                                              infoToReplica.idTable = id_table;

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
                                                //console.log(infoHoteis[i]);

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
                                                traslado.moedaT = cars.coinT[i];
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
                                                //console.log(infoCarros[i]);

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
                                                //console.log(infoSeguro[i]);

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
                                                //console.log(infoTickets[i]);

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
                                                //console.log(infoOutros[i]);

                                              }


                                        res.render('new/pageH', { title: 'Geral Page H', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, budget, client, ...req.session, companions, test, infoTraslado, traslado, infoCarros, carros, infoSeguro, seguro, infoTickets, tickets, infoOutros, outros, hoteis, infoHoteis});
                                    }).catch((error)=>{
                                        //console.log(error);
                                        res.redirect('/error');
                                      });
                              }).catch((error)=>{
                                //console.log(error);
                                res.redirect('/error');
                            });
                          }).catch((error)=>{
                            //console.log(error);
                            res.redirect('/error');
                          });
                        }).catch((error)=>{
                      //console.log(error);
                      res.redirect('/error');
                    });
                  }).catch((error)=>{
                //console.log(error);
                res.redirect('/error');
              });
            }).catch((error)=>{
          //console.log(error);
          res.redirect('/error');
        });




});

/*POST pageA*/
router.post('/pageA',(req,res) => {
  const  client  = req.body.client;
  // if (client.email == client.email1) {
    Client.create(client).then((client_id) => {
      //console.log(client_id);
      //console.log(client);
      res.redirect(`/new/pageB/${client_id}`);
    }).catch((error) => {
    console.log(error);
    console.log('------------------------');
    console.log(error.code);
    console.log('------------------------');
    if (error.code == '11000') {
      req.flash('danger', 'CPF já cadastrado!');
      console.log('ta entrando no case do CPF');
    }
    else {
      req.flash('danger', 'Erro desconhecido');
    }
    res.redirect('/new/pageA');
  });
});

/*POST pageB*/
router.post('/pageB/:client_id',(req,res) => {
  const  client  = req.body.client;
  const  client_id = req.params.client_id;
  Client.update(client_id, client).then(() => {
    //console.log(client);
    res.redirect(`/new/pageC/${client_id}`);
  }).catch((error) => {
    //console.log(error);
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
  const motherClient = {
    client: String,
  };
  motherClient.client = client_id;
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
                        Budget.update(budget_id, motherClient).then(() => {
                          res.redirect(`/new/pageD/${client_id}/${budget_id}`);
                        }).catch((error) =>{
                          console.log(error);
                          res.redirect('error');
                        });
                      }).catch((error) =>{
                        //console.log(error);
                        res.redirect('error');
                      });
                    }).catch((error) =>{
                      //console.log(error);
                      res.redirect('error');
                    });
                  }).catch((error) =>{
                    //console.log(error);
                    res.redirect('error');
                  });
                }).catch((error) =>{
                  //console.log(error);
                  res.redirect('error');
                });
              }).catch((error) =>{
                //console.log(error);
                res.redirect('error');
              });
            }).catch((error) =>{
              //console.log(error);
              res.redirect('error');
            });
          }).catch((error) =>{
            //console.log(error);
            res.redirect('error');
          });
        }).catch((error) =>{
          //console.log(error);
          res.redirect('error');
        });
      }).catch((error) =>{
        //console.log(error);
        res.redirect('error');
      });
      }).catch((error) => {
        //console.log(error);
        res.redirect('error');
      });
  }).catch((error) => {
    //console.log(error);
    res.redirect('error');
  });
});

/*POST pageD*/
router.post('/pageD/:client_id/:budget_id',(req,res) => {
  const  flight = req.body.flight;
  const  client_id = req.params.client_id;
  const budget_id = req.params.budget_id;
  Budget.getById(req.params.budget_id).then((budget) => {
    Flight.update(budget.flights, flight).then(() => {
      res.redirect(`/new/pageE/${client_id}/${budget_id}`);
    }).catch((error) => {
      //console.log(error);
      res.redirect('error');
    });
  }).catch((error) => {
    //console.log(error);
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
      //console.log('budget');
      //console.log(error);
      res.redirect('error');
    });
  }).catch((error) => {
    //console.log(error);
    //console.log('hotel');
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
      //console.log(error);
      res.redirect('error');
    });
  }).catch((error) => {
    //console.log(error);
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
      //console.log(error);
      res.redirect('error');
    });
  }).catch((error) => {
    //console.log(error);
    res.redirect('error');
  });
});

router.post('/pageH/:client_id/:budget_id', (req,res) => {
  //console.log('entrou no post');
  const  budget_id = req.params.budget_id;
  const  client_id = req.params.client_id;
  const budget = {
    finalized: String
  };
  budget.finalized = 'Concluída';
  Budget.update(budget_id, budget).then(() => {
    res.redirect('/dashboard');
  }).catch((error) => {
    //console.log(error);
    res.redirect('error');
  });
});


router.get('/newpageH/:client_id/:budget_id', function(req, res) {
  Client.getById(req.params.client_id).then((client) => {
        Budget.getById(req.params.budget_id).then((budget) => {
          Budget.getAssociatedFlightById(req.params.budget_id).then((flights)=>{
              Budget.getAssociatedHotelById(req.params.budget_id).then((hotels)=>{
                Budget.getAssociatedCarById(req.params.budget_id).then((cars)=>{
                  Budget.getAssociatedSafeById(req.params.budget_id).then((safes)=>{
                          //console.log(cars);
                          //console.log(flights);


                                        const dias = [];
                                        const dias2 = [];
                                        const dias3 = [];
                                        const dias4 = [];
                                        const dias5 = [];
                                        const dias6 = [];
                                        const dias7 = [];
                                        const dias8 = [];
                                        const dias9 = [];
                                        const dias10 = [];
                                        const dias11 = [];
                                        const dias12 = [];
                                        const dias13 = [];
                                        const dias14 = [];
                                        const dias15 = [];
                                        const dias16 = [];
                                        const dias17 = [];
                                        const dias18 = [];
                                        const dias19 = [];
                                        const dias20 = [];


                                        var r = 0;
                                        const roteiro = {
                                          planDia: String,
                                          planCidade: String,
                                          planPais: String,
                                          planCampoLivre: String,
                                          numero: String,
                                          planDia2: String,
                                          planCidade2: String,
                                          planPais2: String,
                                          planCampoLivre2: String,
                                          numero2: String,
                                          planDia3: String,
                                          planCidade3: String,
                                          planPais3: String,
                                          planCampoLivre3: String,
                                          numero3: String,
                                          planDia4: String,
                                          planCidade4: String,
                                          planPais4: String,
                                          planCampoLivre4: String,
                                          numero4: String,
                                          planDia5: String,
                                          planCidade5: String,
                                          planPais5: String,
                                          planCampoLivre5: String,
                                          numero5: String,
                                          planDia6: String,
                                          planCidade6: String,
                                          planPais6: String,
                                          planCampoLivre6: String,
                                          numero6: String,
                                          planDia7: String,
                                          planCidade7: String,
                                          planPais7: String,
                                          planCampoLivre7: String,
                                          numero7: String,
                                          planDia8: String,
                                          planCidade8: String,
                                          planPais8: String,
                                          planCampoLivre8: String,
                                          numero8: String,
                                          planDia9: String,
                                          planCidade9: String,
                                          planPais9: String,
                                          planCampoLivre9: String,
                                          numero9: String,
                                          planDia10: String,
                                          planCidade10: String,
                                          planPais10: String,
                                          planCampoLivre10: String,
                                          numero10: String,
                                          planDia11: String,
                                          planCidade11: String,
                                          planPais11: String,
                                          planCampoLivre11: String,
                                          numero11: String,
                                          planDia12: String,
                                          planCidade12: String,
                                          planPais12: String,
                                          planCampoLivre12: String,
                                          numero12: String,
                                          planDia13: String,
                                          planCidade13: String,
                                          planPais13: String,
                                          planCampoLivre13: String,
                                          numero13: String,
                                          planDia14: String,
                                          planCidade14: String,
                                          planPais14: String,
                                          planCampoLivre14: String,
                                          numero14: String,
                                          planDia15: String,
                                          planCidade15: String,
                                          planPais15: String,
                                          planCampoLivre15: String,
                                          numero15: String,
                                          planDia16: String,
                                          planCidade16: String,
                                          planPais16: String,
                                          planCampoLivre16: String,
                                          numero16: String,
                                          planDia17: String,
                                          planCidade17: String,
                                          planPais17: String,
                                          planCampoLivre17: String,
                                          numero17: String,
                                          planDia18: String,
                                          planCidade18: String,
                                          planPais18: String,
                                          planCampoLivre18: String,
                                          numero18: String,
                                          planDia19: String,
                                          planCidade19: String,
                                          planPais19: String,
                                          planCampoLivre19: String,
                                          numero19: String,
                                          planDia20: String,
                                          planCidade20: String,
                                          planPais20: String,
                                          planCampoLivre20: String,
                                          numero20: String
                                        };


                                        for (var i = 0; i < budget.planCity.length; i++) {
                                          if (i<=2) {

                                          const roteiro = {
                                            planDia: String,
                                            planCidade: String,
                                            planPais: String,
                                            planCampoLivre: String,
                                            numero: String,
                                            planDia2: String,
                                            planCidade2: String,
                                            planPais2: String,
                                            planCampoLivre2: String,
                                            numero2: String,
                                            planDia3: String,
                                            planCidade3: String,
                                            planPais3: String,
                                            planCampoLivre3: String,
                                            numero3: String,
                                            planDia4: String,
                                            planCidade4: String,
                                            planPais4: String,
                                            planCampoLivre4: String,
                                            numero4: String,
                                            planDia5: String,
                                            planCidade5: String,
                                            planPais5: String,
                                            planCampoLivre5: String,
                                            numero5: String,
                                            planDia6: String,
                                            planCidade6: String,
                                            planPais6: String,
                                            planCampoLivre6: String,
                                            numero6: String,
                                            planDia7: String,
                                            planCidade7: String,
                                            planPais7: String,
                                            planCampoLivre7: String,
                                            numero7: String,
                                            planDia8: String,
                                            planCidade8: String,
                                            planPais8: String,
                                            planCampoLivre8: String,
                                            numero8: String,
                                            planDia9: String,
                                            planCidade9: String,
                                            planPais9: String,
                                            planCampoLivre9: String,
                                            numero9: String,
                                            planDia10: String,
                                            planCidade10: String,
                                            planPais10: String,
                                            planCampoLivre10: String,
                                            numero10: String,
                                            planDia11: String,
                                            planCidade11: String,
                                            planPais11: String,
                                            planCampoLivre11: String,
                                            numero11: String,
                                            planDia12: String,
                                            planCidade12: String,
                                            planPais12: String,
                                            planCampoLivre12: String,
                                            numero12: String,
                                            planDia13: String,
                                            planCidade13: String,
                                            planPais13: String,
                                            planCampoLivre13: String,
                                            numero13: String,
                                            planDia14: String,
                                            planCidade14: String,
                                            planPais14: String,
                                            planCampoLivre14: String,
                                            numero14: String,
                                            planDia15: String,
                                            planCidade15: String,
                                            planPais15: String,
                                            planCampoLivre15: String,
                                            numero15: String,
                                            planDia16: String,
                                            planCidade16: String,
                                            planPais16: String,
                                            planCampoLivre16: String,
                                            numero16: String,
                                            planDia17: String,
                                            planCidade17: String,
                                            planPais17: String,
                                            planCampoLivre17: String,
                                            numero17: String,
                                            planDia18: String,
                                            planCidade18: String,
                                            planPais18: String,
                                            planCampoLivre18: String,
                                            numero18: String,
                                            planDia19: String,
                                            planCidade19: String,
                                            planPais19: String,
                                            planCampoLivre19: String,
                                            numero19: String,
                                            planDia20: String,
                                            planCidade20: String,
                                            planPais20: String,
                                            planCampoLivre20: String,
                                            numero20: String
                                          };
                                          //console.log(i);
                                          r++;
                                          roteiro.planDia = budget.planDate[i];
                                          roteiro.planCidade = budget.planCity[i];
                                          roteiro.planPais = budget.planCountry[i];
                                          roteiro.planCampoLivre = budget.planFreeField[i];
                                          roteiro.numero = r;
                                          dias.push(roteiro);

                                        }else if (2<i<=5) {

                                          const roteiro = {
                                            planDia: String,
                                            planCidade: String,
                                            planPais: String,
                                            planCampoLivre: String,
                                            numero: String,
                                            planDia2: String,
                                            planCidade2: String,
                                            planPais2: String,
                                            planCampoLivre2: String,
                                            numero2: String,
                                            planDia3: String,
                                            planCidade3: String,
                                            planPais3: String,
                                            planCampoLivre3: String,
                                            numero3: String,
                                            planDia4: String,
                                            planCidade4: String,
                                            planPais4: String,
                                            planCampoLivre4: String,
                                            numero4: String,
                                            planDia5: String,
                                            planCidade5: String,
                                            planPais5: String,
                                            planCampoLivre5: String,
                                            numero5: String,
                                            planDia6: String,
                                            planCidade6: String,
                                            planPais6: String,
                                            planCampoLivre6: String,
                                            numero6: String,
                                            planDia7: String,
                                            planCidade7: String,
                                            planPais7: String,
                                            planCampoLivre7: String,
                                            numero7: String,
                                            planDia8: String,
                                            planCidade8: String,
                                            planPais8: String,
                                            planCampoLivre8: String,
                                            numero8: String,
                                            planDia9: String,
                                            planCidade9: String,
                                            planPais9: String,
                                            planCampoLivre9: String,
                                            numero9: String,
                                            planDia10: String,
                                            planCidade10: String,
                                            planPais10: String,
                                            planCampoLivre10: String,
                                            numero10: String,
                                            planDia11: String,
                                            planCidade11: String,
                                            planPais11: String,
                                            planCampoLivre11: String,
                                            numero11: String,
                                            planDia12: String,
                                            planCidade12: String,
                                            planPais12: String,
                                            planCampoLivre12: String,
                                            numero12: String,
                                            planDia13: String,
                                            planCidade13: String,
                                            planPais13: String,
                                            planCampoLivre13: String,
                                            numero13: String,
                                            planDia14: String,
                                            planCidade14: String,
                                            planPais14: String,
                                            planCampoLivre14: String,
                                            numero14: String,
                                            planDia15: String,
                                            planCidade15: String,
                                            planPais15: String,
                                            planCampoLivre15: String,
                                            numero15: String,
                                            planDia16: String,
                                            planCidade16: String,
                                            planPais16: String,
                                            planCampoLivre16: String,
                                            numero16: String,
                                            planDia17: String,
                                            planCidade17: String,
                                            planPais17: String,
                                            planCampoLivre17: String,
                                            numero17: String,
                                            planDia18: String,
                                            planCidade18: String,
                                            planPais18: String,
                                            planCampoLivre18: String,
                                            numero18: String,
                                            planDia19: String,
                                            planCidade19: String,
                                            planPais19: String,
                                            planCampoLivre19: String,
                                            numero19: String,
                                            planDia20: String,
                                            planCidade20: String,
                                            planPais20: String,
                                            planCampoLivre20: String,
                                            numero20: String
                                        };
                                        //console.log(i);
                                        r++;
                                        roteiro.planDia2 = budget.planDate[i];
                                        roteiro.planCidade2 = budget.planCity[i];
                                        roteiro.planPais2 = budget.planCountry[i];
                                        roteiro.planCampoLivre2 = budget.planFreeField[i];
                                        roteiro.numero2 = r;
                                        dias2.push(roteiro);


                                      }else if (5<i<=8) {

                                        const roteiro = {
                                        planDia: String,
                                        planCidade: String,
                                        planPais: String,
                                        planCampoLivre: String,
                                        numero: String,
                                        planDia2: String,
                                        planCidade2: String,
                                        planPais2: String,
                                        planCampoLivre2: String,
                                        numero2: String,
                                        planDia3: String,
                                        planCidade3: String,
                                        planPais3: String,
                                        planCampoLivre3: String,
                                        numero3: String
                                      };
                                      //console.log(i);
                                      r++;
                                      roteiro.planDia3 = budget.planDate[i];
                                      roteiro.planCidade3 = budget.planCity[i];
                                      roteiro.planPais3 = budget.planCountry[i];
                                      roteiro.planCampoLivre3 = budget.planFreeField[i];
                                      roteiro.numero3 = r;
                                      dias3.push(roteiro);



                                    }else if (8<i<=11) {

                                      const roteiro = {
                                        planDia: String,
                                        planCidade: String,
                                        planPais: String,
                                        planCampoLivre: String,
                                        numero: String,
                                        planDia2: String,
                                        planCidade2: String,
                                        planPais2: String,
                                        planCampoLivre2: String,
                                        numero2: String,
                                        planDia3: String,
                                        planCidade3: String,
                                        planPais3: String,
                                        planCampoLivre3: String,
                                        numero3: String,
                                        planDia4: String,
                                        planCidade4: String,
                                        planPais4: String,
                                        planCampoLivre4: String,
                                        numero4: String,
                                        planDia5: String,
                                        planCidade5: String,
                                        planPais5: String,
                                        planCampoLivre5: String,
                                        numero5: String,
                                        planDia6: String,
                                        planCidade6: String,
                                        planPais6: String,
                                        planCampoLivre6: String,
                                        numero6: String,
                                        planDia7: String,
                                        planCidade7: String,
                                        planPais7: String,
                                        planCampoLivre7: String,
                                        numero7: String,
                                        planDia8: String,
                                        planCidade8: String,
                                        planPais8: String,
                                        planCampoLivre8: String,
                                        numero8: String,
                                        planDia9: String,
                                        planCidade9: String,
                                        planPais9: String,
                                        planCampoLivre9: String,
                                        numero9: String,
                                        planDia10: String,
                                        planCidade10: String,
                                        planPais10: String,
                                        planCampoLivre10: String,
                                        numero10: String,
                                        planDia11: String,
                                        planCidade11: String,
                                        planPais11: String,
                                        planCampoLivre11: String,
                                        numero11: String,
                                        planDia12: String,
                                        planCidade12: String,
                                        planPais12: String,
                                        planCampoLivre12: String,
                                        numero12: String,
                                        planDia13: String,
                                        planCidade13: String,
                                        planPais13: String,
                                        planCampoLivre13: String,
                                        numero13: String,
                                        planDia14: String,
                                        planCidade14: String,
                                        planPais14: String,
                                        planCampoLivre14: String,
                                        numero14: String,
                                        planDia15: String,
                                        planCidade15: String,
                                        planPais15: String,
                                        planCampoLivre15: String,
                                        numero15: String,
                                        planDia16: String,
                                        planCidade16: String,
                                        planPais16: String,
                                        planCampoLivre16: String,
                                        numero16: String,
                                        planDia17: String,
                                        planCidade17: String,
                                        planPais17: String,
                                        planCampoLivre17: String,
                                        numero17: String,
                                        planDia18: String,
                                        planCidade18: String,
                                        planPais18: String,
                                        planCampoLivre18: String,
                                        numero18: String,
                                        planDia19: String,
                                        planCidade19: String,
                                        planPais19: String,
                                        planCampoLivre19: String,
                                        numero19: String,
                                        planDia20: String,
                                        planCidade20: String,
                                        planPais20: String,
                                        planCampoLivre20: String,
                                        numero20: String
                                    };
                                    //console.log(i);
                                    r++;
                                    roteiro.planDia4 = budget.planDate[i];
                                    roteiro.planCidade4 = budget.planCity[i];
                                    roteiro.planPais4 = budget.planCountry[i];
                                    roteiro.planCampoLivre4 = budget.planFreeField[i];
                                    roteiro.numero4 = r;
                                    dias4.push(roteiro);

                                  }else if (11<i<=14) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia5 = budget.planDate[i];
                                  roteiro.planCidade5 = budget.planCity[i];
                                  roteiro.planPais5 = budget.planCountry[i];
                                  roteiro.planCampoLivre5 = budget.planFreeField[i];
                                  roteiro.numero5 = r;
                                  dias5.push(roteiro);

                                }else if (14<i<=17) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia6 = budget.planDate[i];
                                  roteiro.planCidade6 = budget.planCity[i];
                                  roteiro.planPais6 = budget.planCountry[i];
                                  roteiro.planCampoLivre6 = budget.planFreeField[i];
                                  roteiro.numero6 = r;
                                  dias6.push(roteiro);

                                }else if (17<i<=20) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia7 = budget.planDate[i];
                                  roteiro.planCidade7 = budget.planCity[i];
                                  roteiro.planPais7 = budget.planCountry[i];
                                  roteiro.planCampoLivre7 = budget.planFreeField[i];
                                  roteiro.numero7 = r;
                                  dias7.push(roteiro);

                                }else if (20<i<=23) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia8 = budget.planDate[i];
                                  roteiro.planCidade8 = budget.planCity[i];
                                  roteiro.planPais8 = budget.planCountry[i];
                                  roteiro.planCampoLivre8 = budget.planFreeField[i];
                                  roteiro.numero8 = r;
                                  dias8.push(roteiro);

                                }else if (23<i<=26) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia9 = budget.planDate[i];
                                  roteiro.planCidade9 = budget.planCity[i];
                                  roteiro.planPais9 = budget.planCountry[i];
                                  roteiro.planCampoLivre9 = budget.planFreeField[i];
                                  roteiro.numero9 = r;
                                  dias9.push(roteiro);

                                }else if (26<i<=29) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia10 = budget.planDate[i];
                                  roteiro.planCidade10 = budget.planCity[i];
                                  roteiro.planPais10 = budget.planCountry[i];
                                  roteiro.planCampoLivre10 = budget.planFreeField[i];
                                  roteiro.numero10 = r;
                                  dias10.push(roteiro);

                                }else if (29<i<=32) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia11 = budget.planDate[i];
                                  roteiro.planCidade11 = budget.planCity[i];
                                  roteiro.planPais11 = budget.planCountry[i];
                                  roteiro.planCampoLivre11 = budget.planFreeField[i];
                                  roteiro.numero11 = r;
                                  dias11.push(roteiro);

                                }else if (32<i<=35) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia12 = budget.planDate[i];
                                  roteiro.planCidade12 = budget.planCity[i];
                                  roteiro.planPais12 = budget.planCountry[i];
                                  roteiro.planCampoLivre12 = budget.planFreeField[i];
                                  roteiro.numero12 = r;
                                  dias12.push(roteiro);

                                }else if (35<i<=38) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia13 = budget.planDate[i];
                                  roteiro.planCidade13 = budget.planCity[i];
                                  roteiro.planPais13 = budget.planCountry[i];
                                  roteiro.planCampoLivre13 = budget.planFreeField[i];
                                  roteiro.numero13 = r;
                                  dias13.push(roteiro);

                                }else if (38<i<=41) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia14 = budget.planDate[i];
                                  roteiro.planCidade14 = budget.planCity[i];
                                  roteiro.planPais14 = budget.planCountry[i];
                                  roteiro.planCampoLivre514 = budget.planFreeField[i];
                                  roteiro.numero14 = r;
                                  dias14.push(roteiro);

                                }else if (41<i<=44) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia15 = budget.planDate[i];
                                  roteiro.planCidade15 = budget.planCity[i];
                                  roteiro.planPais15 = budget.planCountry[i];
                                  roteiro.planCampoLivre15 = budget.planFreeField[i];
                                  roteiro.numero15 = r;
                                  dias15.push(roteiro);

                                }else if (44<i<=47) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia16 = budget.planDate[i];
                                  roteiro.planCidade16 = budget.planCity[i];
                                  roteiro.planPais16 = budget.planCountry[i];
                                  roteiro.planCampoLivre16 = budget.planFreeField[i];
                                  roteiro.numero16 = r;
                                  dias16.push(roteiro);

                                }else if (47<i<=50) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia17 = budget.planDate[i];
                                  roteiro.planCidade17 = budget.planCity[i];
                                  roteiro.planPais17 = budget.planCountry[i];
                                  roteiro.planCampoLivre17 = budget.planFreeField[i];
                                  roteiro.numero17 = r;
                                  dias17.push(roteiro);

                                }else if (50<i<=53) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia18 = budget.planDate[i];
                                  roteiro.planCidade18 = budget.planCity[i];
                                  roteiro.planPais18 = budget.planCountry[i];
                                  roteiro.planCampoLivre18 = budget.planFreeField[i];
                                  roteiro.numero18 = r;
                                  dias18.push(roteiro);

                                }else if (53<i<=56) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia19 = budget.planDate[i];
                                  roteiro.planCidade19 = budget.planCity[i];
                                  roteiro.planPais19 = budget.planCountry[i];
                                  roteiro.planCampoLivre19 = budget.planFreeField[i];
                                  roteiro.numero19 = r;
                                  dias19.push(roteiro);

                                }else if (56<i<=59) {


                                    const roteiro = {
                                      planDia: String,
                                      planCidade: String,
                                      planPais: String,
                                      planCampoLivre: String,
                                      numero: String,
                                      planDia2: String,
                                      planCidade2: String,
                                      planPais2: String,
                                      planCampoLivre2: String,
                                      numero2: String,
                                      planDia3: String,
                                      planCidade3: String,
                                      planPais3: String,
                                      planCampoLivre3: String,
                                      numero3: String,
                                      planDia4: String,
                                      planCidade4: String,
                                      planPais4: String,
                                      planCampoLivre4: String,
                                      numero4: String,
                                      planDia5: String,
                                      planCidade5: String,
                                      planPais5: String,
                                      planCampoLivre5: String,
                                      numero5: String,
                                      planDia6: String,
                                      planCidade6: String,
                                      planPais6: String,
                                      planCampoLivre6: String,
                                      numero6: String,
                                      planDia7: String,
                                      planCidade7: String,
                                      planPais7: String,
                                      planCampoLivre7: String,
                                      numero7: String,
                                      planDia8: String,
                                      planCidade8: String,
                                      planPais8: String,
                                      planCampoLivre8: String,
                                      numero8: String,
                                      planDia9: String,
                                      planCidade9: String,
                                      planPais9: String,
                                      planCampoLivre9: String,
                                      numero9: String,
                                      planDia10: String,
                                      planCidade10: String,
                                      planPais10: String,
                                      planCampoLivre10: String,
                                      numero10: String,
                                      planDia11: String,
                                      planCidade11: String,
                                      planPais11: String,
                                      planCampoLivre11: String,
                                      numero11: String,
                                      planDia12: String,
                                      planCidade12: String,
                                      planPais12: String,
                                      planCampoLivre12: String,
                                      numero12: String,
                                      planDia13: String,
                                      planCidade13: String,
                                      planPais13: String,
                                      planCampoLivre13: String,
                                      numero13: String,
                                      planDia14: String,
                                      planCidade14: String,
                                      planPais14: String,
                                      planCampoLivre14: String,
                                      numero14: String,
                                      planDia15: String,
                                      planCidade15: String,
                                      planPais15: String,
                                      planCampoLivre15: String,
                                      numero15: String,
                                      planDia16: String,
                                      planCidade16: String,
                                      planPais16: String,
                                      planCampoLivre16: String,
                                      numero16: String,
                                      planDia17: String,
                                      planCidade17: String,
                                      planPais17: String,
                                      planCampoLivre17: String,
                                      numero17: String,
                                      planDia18: String,
                                      planCidade18: String,
                                      planPais18: String,
                                      planCampoLivre18: String,
                                      numero18: String,
                                      planDia19: String,
                                      planCidade19: String,
                                      planPais19: String,
                                      planCampoLivre19: String,
                                      numero19: String,
                                      planDia20: String,
                                      planCidade20: String,
                                      planPais20: String,
                                      planCampoLivre20: String,
                                      numero20: String
                                  };
                                  //console.log(i);
                                  r++;
                                  roteiro.planDia20 = budget.planDate[i];
                                  roteiro.planCidade20 = budget.planCity[i];
                                  roteiro.planPais20 = budget.planCountry[i];
                                  roteiro.planCampoLivre20 = budget.planFreeField[i];
                                  roteiro.numero20 = r;
                                  dias20.push(roteiro);

                                  }


                                    }





                                        const test = [];
                                        const companions = {
                                          name: String
                                        };

                                        //console.log(req.session);
                                              for (var i = 0; i < client.companionFullname.length; i++) {

                                                const companions = {
                                                  name: String
                                                };

                                                companions.name = client.companionFullname[i];
                                                test.push(companions);

                                                //console.log(test[i]);

                                              }

                                              const allFlights = [];
                                              const infoToReplica = {
                                                ageId1: Number,
                                                ageId2:Number,
                                                ageId3: Number,
                                                idTable: Number,
                                              };

                                              const flightInfo ={

                                                escala: Number,
                                                final: Number,
                                                inicio: Number,
                                                idTable: Number,
                                                ageId1: Number,
                                                ageId2: Number,
                                                ageId3: Number,
                                                result: Number,
                                                firstflightTable: Number,

                                                flightNum: String,
                                                dateFlight:String,
                                                from:String,
                                                destination:String,
                                                timeOut: String,
                                                timeIn: String,
                                                coin:String,

                                                // Primeira classe
                                                totalValueCHD_FirstClass: Number,
                                                tariffValueCHD_FirstClass: Number,
                                                taxValueCHD_FirstClass: Number,
                                                ravValueCHD_FirstClass: Number,
                                                numCHD_FirstClass: Number,

                                                totalValueAdult_FirstClass: Number,
                                                tariffValueAdult_FirstClass: Number,
                                                taxValueAdult_FirstClass: Number,
                                                ravValueAdult_FirstClass: Number,
                                                numADT_FirstClass: Number,

                                                totalValueInf_FirstClass: Number,
                                                tariffValueInf_FirstClass: Number,
                                                taxValueInf_FirstClass: Number,
                                                ravValueInf_FirstClass: Number,
                                                numINF_FirstClass: Number,

                                                // Executivo
                                                totalValueCHD_Executive: Number,
                                                tariffValueCHD_Executive: Number,
                                                taxValueCHD_Executive: Number,
                                                ravValueCHD_Executive: Number,
                                                numCHD_Executive: Number,

                                                totalValueAdult_Executive: Number,
                                                tariffValueAdult_Executive: Number,
                                                taxValueAdult_Executive: Number,
                                                ravValueAdult_Executive: Number,
                                                numADT_Executive: Number,

                                                totalValueInf_Executive: Number,
                                                tariffValueInf_Executive: Number,
                                                taxValueInf_Executive: Number,
                                                ravValueInf_Executive: Number,
                                                numINF_Executive: Number,

                                                // Econômico
                                                totalValueCHD_Economic: Number,
                                                tariffValueCHD_Economic: Number,
                                                taxValueCHD_Economic: Number,
                                                ravValueCHD_Economic: Number,
                                                numCHD_Economic: Number,

                                                totalValueAdult_Economic: Number,
                                                tariffValueAdult_Economic: Number,
                                                taxValueAdult_Economic: Number,
                                                ravValueAdult_Economic: Number,
                                                numADT_Economic: Number,

                                                totalValueInf_Economic: Number,
                                                tariffValueInf_Economic: Number,
                                                taxValueInf_Economic: Number,
                                                ravValueInf_Economic: Number,
                                                numINF_Economic: Number,
                                              };

                                              var j = 0;
                                              var id_table = 1;
                                              var age_id1 = 1;
                                              var age_id2 = 2;
                                              var age_id3 = 3;
                                              var result = 1;

                                              for (var i = 0; i < flights.escalas.length; i++) {
                                                // //console.log("loop rodando yeeeet");
                                                // //console.log(testando.vetor[i]);


                                                const flightInfo ={

                                                  escala: Number,
                                                  final: Number,
                                                  inicio: Number,
                                                  idTable: Number,
                                                  ageId1: Number,
                                                  ageId2: Number,
                                                  ageId3: Number,
                                                  result: Number,
                                                  firstflightTable: Number,

                                                  flightNum: String,
                                                  dateFlight:String,
                                                  from:String,
                                                  destination:String,
                                                  timeOut: String,
                                                  timeIn: String,
                                                  coin:String,

                                                  // Primeira classe
                                                  totalValueCHD_FirstClass: Number,
                                                  tariffValueCHD_FirstClass: Number,
                                                  taxValueCHD_FirstClass: Number,
                                                  ravValueCHD_FirstClass: Number,
                                                  numCHD_FirstClass: Number,

                                                  totalValueAdult_FirstClass: Number,
                                                  tariffValueAdult_FirstClass: Number,
                                                  taxValueAdult_FirstClass: Number,
                                                  ravValueAdult_FirstClass: Number,
                                                  numADT_FirstClass: Number,

                                                  totalValueInf_FirstClass: Number,
                                                  tariffValueInf_FirstClass: Number,
                                                  taxValueInf_FirstClass: Number,
                                                  ravValueInf_FirstClass: Number,
                                                  numINF_FirstClass: Number,

                                                  // Executivo
                                                  totalValueCHD_Executive: Number,
                                                  tariffValueCHD_Executive: Number,
                                                  taxValueCHD_Executive: Number,
                                                  ravValueCHD_Executive: Number,
                                                  numCHD_Executive: Number,

                                                  totalValueAdult_Executive: Number,
                                                  tariffValueAdult_Executive: Number,
                                                  taxValueAdult_Executive: Number,
                                                  ravValueAdult_Executive: Number,
                                                  numADT_Executive: Number,

                                                  totalValueInf_Executive: Number,
                                                  tariffValueInf_Executive: Number,
                                                  taxValueInf_Executive: Number,
                                                  ravValueInf_Executive: Number,
                                                  numINF_Executive: Number,

                                                  // Econômico
                                                  totalValueCHD_Economic: Number,
                                                  tariffValueCHD_Economic: Number,
                                                  taxValueCHD_Economic: Number,
                                                  ravValueCHD_Economic: Number,
                                                  numCHD_Economic: Number,

                                                  totalValueAdult_Economic: Number,
                                                  tariffValueAdult_Economic: Number,
                                                  taxValueAdult_Economic: Number,
                                                  ravValueAdult_Economic: Number,
                                                  numADT_Economic: Number,

                                                  totalValueInf_Economic: Number,
                                                  tariffValueInf_Economic: Number,
                                                  taxValueInf_Economic: Number,
                                                  ravValueInf_Economic: Number,
                                                  numINF_Economic: Number,
                                                };
                                                // é escala
                                                if (flights.escalas[i] == 1) {
                                                  flightInfo.escala = 1;
                                                }
                                                // não é escala
                                                else{
                                                  flightInfo.escala = 0;
                                                }

                                                //Descobre se o voo atual é o ultimo antes do próximo Voo
                                                if (flights.escalas[(i+1)] != 1) {//Se o próximo voo não for uma escala, o voo atual acaba e temos que printar as taxas junto a essa última escala ou voo

                                                  flightInfo.final = 1

                                                    // Primeira classe
                                                    flightInfo.tariffValueCHD_FirstClass = flights.tariffValueCHD_FirstClass[j];
                                                    flightInfo.taxValueCHD_FirstClass = flights.taxValueCHD_FirstClass[j];
                                                    flightInfo.ravValueCHD_FirstClass = flights.ravValueCHD_FirstClass[j];
                                                    flightInfo.totalValueCHD_FirstClass = flights.totalValueCHD_FirstClass[j];
                                                    flightInfo.numADT_FirstClass = flights.numADT_FirstClass[j];

                                                    flightInfo.tariffValueInf_FirstClass = flights.tariffValueInf_FirstClass[j];
                                                    flightInfo.taxValueInf_FirstClass = flights.taxValueInf_FirstClass[j];
                                                    flightInfo.ravValueInf_FirstClass = flights.ravValueInf_FirstClass[j];
                                                    flightInfo.totalValueInf_FirstClass = flights.totalValueInf_FirstClass[j];
                                                    flightInfo.numCHD_FirstClass = flights.numCHD_FirstClass[j];

                                                    flightInfo.tariffValueAdult_FirstClass = flights.tariffValueAdult_FirstClass[j];
                                                    flightInfo.taxValueAdult_FirstClass = flights.taxValueAdult_FirstClass[j];
                                                    flightInfo.ravValueAdult_FirstClass = flights.ravValueAdult_FirstClass[j];
                                                    flightInfo.totalValueAdult_FirstClass = flights.totalValueAdult_FirstClass[j];
                                                    flightInfo.numINF_FirstClass = flights.numINF_FirstClass[j];

                                                    // Executivo
                                                    flightInfo.tariffValueCHD_Executive = flights.tariffValueCHD_Executive[j];
                                                    flightInfo.taxValueCHD_Executive = flights.taxValueCHD_Executive[j];
                                                    flightInfo.ravValueCHD_Executive = flights.ravValueCHD_Executive[j];
                                                    flightInfo.totalValueCHD_Executive = flights.totalValueCHD_Executive[j];
                                                    flightInfo.numADT_Executive = flights.numADT_Executive[j];

                                                    flightInfo.tariffValueInf_Executive = flights.tariffValueInf_Executive[j];
                                                    flightInfo.taxValueInf_Executive = flights.taxValueInf_Executive[j];
                                                    flightInfo.ravValueInf_Executive = flights.ravValueInf_Executive[j];
                                                    flightInfo.totalValueInf_Executive = flights.totalValueInf_Executive[j];
                                                    flightInfo.numCHD_Executive = flights.numCHD_Executive[j];

                                                    flightInfo.tariffValueAdult_Executive = flights.tariffValueAdult_Executive[j];
                                                    flightInfo.taxValueAdult_Executive = flights.taxValueAdult_Executive[j];
                                                    flightInfo.ravValueAdult_Executive = flights.ravValueAdult_Executive[j];
                                                    flightInfo.totalValueAdult_Executive = flights.totalValueAdult_Executive[j];
                                                    flightInfo.numINF_Executive = flights.numINF_Executive[j];

                                                    // Econômico
                                                    flightInfo.tariffValueCHD_Economic = flights.tariffValueCHD_Economic[j];
                                                    flightInfo.taxValueCHD_Economic = flights.taxValueCHD_Economic[j];
                                                    flightInfo.ravValueCHD_Economic = flights.ravValueCHD_Economic[j];
                                                    flightInfo.totalValueCHD_Economic = flights.totalValueCHD_Economic[j];
                                                    flightInfo.numADT_Economic = flights.numADT_Economic [j];

                                                    flightInfo.tariffValueInf_Economic = flights.tariffValueInf_Economic[j];
                                                    flightInfo.taxValueInf_Economic = flights.taxValueInf_Economic[j];
                                                    flightInfo.ravValueInf_Economic = flights.ravValueInf_Economic[j];
                                                    flightInfo.totalValueInf_Economic = flights.totalValueInf_Economic[j];
                                                    flightInfo.numCHD_Economic = flights.numCHD_Economic[j];

                                                    flightInfo.tariffValueAdult_Economic = flights.tariffValueAdult_Economic[j];
                                                    flightInfo.taxValueAdult_Economic = flights.taxValueAdult_Economic[j];
                                                    flightInfo.ravValueAdult_Economic = flights.ravValueAdult_Economic[j];
                                                    flightInfo.totalValueAdult_Economic = flights.totalValueAdult_Economic[j];
                                                    flightInfo.numINF_Economic = flights.numINF_Economic[j];

                                                    flightInfo.ageId1 = age_id1;//Aqui é pra poder fazer a mudança de valor das id's dos campos
                                                    flightInfo.ageId2 = age_id2;
                                                    flightInfo.ageId3 = age_id3;
                                                    flightInfo.result = result;
                                                    age_id1 = age_id1 +3;
                                                    age_id2 = age_id2 +3;
                                                    age_id3 = age_id3 +3;
                                                    result++;
                                                  j++;

                                                }


                                                // identifica onde coemeça uma nova tabela
                                                if(flightInfo.escala == 0){
                                                  flightInfo.inicio = 1;
                                                  flightInfo.idTable = id_table; // Muda o número do id da tabela pra a seleção de bloco funcionar
                                                  id_table++;
                                                }

                                                else {
                                                  flightInfo.inicio = 0;
                                                }

                                                if(i == 0){
                                                  flightInfo.firstflightTable = 1;
                                                }

                                                // Essas informações tem que ser sempre pegas
                                                flightInfo.flightNum = flights.flightNum[i];
                                                flightInfo.dateFlight = flights.dateFlight[i];
                                                flightInfo.from = flights.from[i];
                                                flightInfo.destination = flights.destination[i];
                                                flightInfo.timeOut = flights.timeOut[i];
                                                flightInfo.timeIn = flights.timeIn[i];
                                                flightInfo.coin = flights.coin[i];

                                                allFlights.push(flightInfo);
                                              }

                                              infoToReplica.ageId1 = age_id1;
                                              infoToReplica.ageId2 = age_id2;
                                              infoToReplica.ageId3 = age_id3;
                                              infoToReplica.idTable = id_table;

                                              //console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
                                              //console.log(allFlights[i]);
                                              //console.log(flightInfo.coin);
                                              //console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

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
                                                //console.log(infoHoteis[i]);

                                               }

                                              const infoTraslado = [];
                                              const infoTraslado2 = [];
                                              const infoTraslado3 = [];
                                              const infoTraslado4 = [];
                                              const infoTraslado5 = [];
                                              const infoTraslado6 = [];
                                              const infoTraslado7 = [];
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
                                                valorInfT: String,
                                                deT2: String,
                                                moedaT2: String,
                                                paraT2: String,
                                                dataIdaT2: String,
                                                horaIdaT2: String,
                                                dataParaT2: String,
                                                horaParaT2: String,
                                                valorAdtT2: String,
                                                valorChdT2: String,
                                                valorInfT2: String,
                                                deT3: String,
                                                moedaT3: String,
                                                paraT3: String,
                                                dataIdaT3: String,
                                                horaIdaT3: String,
                                                dataParaT3: String,
                                                horaParaT3: String,
                                                valorAdtT3: String,
                                                valorChdT3: String,
                                                valorInfT3: String,
                                                deT4: String,
                                                moedaT4: String,
                                                paraT4: String,
                                                dataIdaT4: String,
                                                horaIdaT4: String,
                                                dataParaT4: String,
                                                horaParaT4: String,
                                                valorAdtT4: String,
                                                valorChdT4: String,
                                                valorInfT4: String,
                                                deT5: String,
                                                moedaT5: String,
                                                paraT5: String,
                                                dataIdaT5: String,
                                                horaIdaT5: String,
                                                dataParaT5: String,
                                                horaParaT5: String,
                                                valorAdtT5: String,
                                                valorChdT5: String,
                                                valorInfT5: String,
                                                deT6: String,
                                                moedaT6: String,
                                                paraT6: String,
                                                dataIdaT6: String,
                                                horaIdaT6: String,
                                                dataParaT6: String,
                                                horaParaT6: String,
                                                valorAdtT6: String,
                                                valorChdT6: String,
                                                valorInfT6: String,
                                                deT7: String,
                                                moedaT7: String,
                                                paraT7: String,
                                                dataIdaT7: String,
                                                horaIdaT7: String,
                                                dataParaT7: String,
                                                horaParaT7: String,
                                                valorAdtT7: String,
                                                valorChdT7: String,
                                                valorInfT7: String,
                                                numero : String,
                                                numero2 : String,
                                                numero3 : String,
                                                numero4 : String,
                                                numero5 : String,
                                                numero6 : String,
                                                numero7 : String
                                              }];


                                            for (var i = 0; i < cars.from.length; i++) {
                                                if (i<=1) {
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
                                                  deT2: String,
                                                  moedaT2: String,
                                                  paraT2: String,
                                                  dataIdaT2: String,
                                                  horaIdaT2: String,
                                                  dataParaT2: String,
                                                  horaParaT2: String,
                                                  valorAdtT2: String,
                                                  valorChdT2: String,
                                                  valorInfT2: String,
                                                  deT3: String,
                                                  moedaT3: String,
                                                  paraT3: String,
                                                  dataIdaT3: String,
                                                  horaIdaT3: String,
                                                  dataParaT3: String,
                                                  horaParaT3: String,
                                                  valorAdtT3: String,
                                                  valorChdT3: String,
                                                  valorInfT3: String,
                                                  deT4: String,
                                                  moedaT4: String,
                                                  paraT4: String,
                                                  dataIdaT4: String,
                                                  horaIdaT4: String,
                                                  dataParaT4: String,
                                                  horaParaT4: String,
                                                  valorAdtT4: String,
                                                  valorChdT4: String,
                                                  valorInfT4: String,
                                                  deT5: String,
                                                  moedaT5: String,
                                                  paraT5: String,
                                                  dataIdaT5: String,
                                                  horaIdaT5: String,
                                                  dataParaT5: String,
                                                  horaParaT5: String,
                                                  valorAdtT5: String,
                                                  valorChdT5: String,
                                                  valorInfT5: String,
                                                  deT6: String,
                                                  moedaT6: String,
                                                  paraT6: String,
                                                  dataIdaT6: String,
                                                  horaIdaT6: String,
                                                  dataParaT6: String,
                                                  horaParaT6: String,
                                                  valorAdtT6: String,
                                                  valorChdT6: String,
                                                  valorInfT6: String,
                                                  deT7: String,
                                                  moedaT7: String,
                                                  paraT7: String,
                                                  dataIdaT7: String,
                                                  horaIdaT7: String,
                                                  dataParaT7: String,
                                                  horaParaT7: String,
                                                  valorAdtT7: String,
                                                  valorChdT7: String,
                                                  valorInfT7: String,
                                                  numero : String,
                                                  numero2 : String,
                                                  numero3 : String,
                                                  numero4 : String,
                                                  numero5 : String,
                                                  numero6 : String,
                                                  numero7 : String
                                                }];


                                                t++;
                                                traslado.deT = cars.from[i];
                                                traslado.moedaT = cars.coinT[i];
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



                                            }else if (i<4) {


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
                                                  deT2: String,
                                                  moedaT2: String,
                                                  paraT2: String,
                                                  dataIdaT2: String,
                                                  horaIdaT2: String,
                                                  dataParaT2: String,
                                                  horaParaT2: String,
                                                  valorAdtT2: String,
                                                  valorChdT2: String,
                                                  valorInfT2: String,
                                                  deT3: String,
                                                  moedaT3: String,
                                                  paraT3: String,
                                                  dataIdaT3: String,
                                                  horaIdaT3: String,
                                                  dataParaT3: String,
                                                  horaParaT3: String,
                                                  valorAdtT3: String,
                                                  valorChdT3: String,
                                                  valorInfT3: String,
                                                  deT4: String,
                                                  moedaT4: String,
                                                  paraT4: String,
                                                  dataIdaT4: String,
                                                  horaIdaT4: String,
                                                  dataParaT4: String,
                                                  horaParaT4: String,
                                                  valorAdtT4: String,
                                                  valorChdT4: String,
                                                  valorInfT4: String,
                                                  deT5: String,
                                                  moedaT5: String,
                                                  paraT5: String,
                                                  dataIdaT5: String,
                                                  horaIdaT5: String,
                                                  dataParaT5: String,
                                                  horaParaT5: String,
                                                  valorAdtT5: String,
                                                  valorChdT5: String,
                                                  valorInfT5: String,
                                                  deT6: String,
                                                  moedaT6: String,
                                                  paraT6: String,
                                                  dataIdaT6: String,
                                                  horaIdaT6: String,
                                                  dataParaT6: String,
                                                  horaParaT6: String,
                                                  valorAdtT6: String,
                                                  valorChdT6: String,
                                                  valorInfT6: String,
                                                  deT7: String,
                                                  moedaT7: String,
                                                  paraT7: String,
                                                  dataIdaT7: String,
                                                  horaIdaT7: String,
                                                  dataParaT7: String,
                                                  horaParaT7: String,
                                                  valorAdtT7: String,
                                                  valorChdT7: String,
                                                  valorInfT7: String,
                                                  numero : String,
                                                  numero2 : String,
                                                  numero3 : String,
                                                  numero4 : String,
                                                  numero5 : String,
                                                  numero6 : String,
                                                  numero7 : String
                                                }];


                                                t++;
                                                traslado.deT2 = cars.from[i];
                                                traslado.moedaT2 = cars.coinT[i];
                                                traslado.paraT2 = cars.to[i];
                                                traslado.dataIdaT2 = cars.dateFrom[i];
                                                traslado.horaIdaT2 = cars.timeFrom[i];
                                                traslado.dataParaT2 = cars.dateTo[i];
                                                traslado.horaParaT2 = cars.timeTo[i];
                                                traslado.valorAdtT2 = cars.valueADT[i];
                                                traslado.valorChdT2 = cars.valueCHD[i];
                                                traslado.valorInfT2 = cars.valueINF[i];
                                                traslado.numero2 = t;
                                                infoTraslado2.push(traslado);
                                                //console.log("@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@");
                                              //  console.log(infoTraslado2);



                                            }else if (i<6) {


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
                                                  deT2: String,
                                                  moedaT2: String,
                                                  paraT2: String,
                                                  dataIdaT2: String,
                                                  horaIdaT2: String,
                                                  dataParaT2: String,
                                                  horaParaT2: String,
                                                  valorAdtT2: String,
                                                  valorChdT2: String,
                                                  valorInfT2: String,
                                                  deT3: String,
                                                  moedaT3: String,
                                                  paraT3: String,
                                                  dataIdaT3: String,
                                                  horaIdaT3: String,
                                                  dataParaT3: String,
                                                  horaParaT3: String,
                                                  valorAdtT3: String,
                                                  valorChdT3: String,
                                                  valorInfT3: String,
                                                  deT4: String,
                                                  moedaT4: String,
                                                  paraT4: String,
                                                  dataIdaT4: String,
                                                  horaIdaT4: String,
                                                  dataParaT4: String,
                                                  horaParaT4: String,
                                                  valorAdtT4: String,
                                                  valorChdT4: String,
                                                  valorInfT4: String,
                                                  deT5: String,
                                                  moedaT5: String,
                                                  paraT5: String,
                                                  dataIdaT5: String,
                                                  horaIdaT5: String,
                                                  dataParaT5: String,
                                                  horaParaT5: String,
                                                  valorAdtT5: String,
                                                  valorChdT5: String,
                                                  valorInfT5: String,
                                                  deT6: String,
                                                  moedaT6: String,
                                                  paraT6: String,
                                                  dataIdaT6: String,
                                                  horaIdaT6: String,
                                                  dataParaT6: String,
                                                  horaParaT6: String,
                                                  valorAdtT6: String,
                                                  valorChdT6: String,
                                                  valorInfT6: String,
                                                  deT7: String,
                                                  moedaT7: String,
                                                  paraT7: String,
                                                  dataIdaT7: String,
                                                  horaIdaT7: String,
                                                  dataParaT7: String,
                                                  horaParaT7: String,
                                                  valorAdtT7: String,
                                                  valorChdT7: String,
                                                  valorInfT7: String,
                                                  numero : String,
                                                  numero2 : String,
                                                  numero3 : String,
                                                  numero4 : String,
                                                  numero5 : String,
                                                  numero6 : String,
                                                  numero7 : String
                                                }];


                                                t++;
                                                traslado.deT3 = cars.from[i];
                                                traslado.moedaT3 = cars.coinT[i];
                                                traslado.paraT3 = cars.to[i];
                                                traslado.dataIdaT3 = cars.dateFrom[i];
                                                traslado.horaIdaT3 = cars.timeFrom[i];
                                                traslado.dataParaT3 = cars.dateTo[i];
                                                traslado.horaParaT3 = cars.timeTo[i];
                                                traslado.valorAdtT3 = cars.valueADT[i];
                                                traslado.valorChdT3 = cars.valueCHD[i];
                                                traslado.valorInfT3 = cars.valueINF[i];
                                                traslado.numero3 = t;
                                                infoTraslado3.push(traslado);



                                            }else if (i<8) {


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
                                                  deT2: String,
                                                  moedaT2: String,
                                                  paraT2: String,
                                                  dataIdaT2: String,
                                                  horaIdaT2: String,
                                                  dataParaT2: String,
                                                  horaParaT2: String,
                                                  valorAdtT2: String,
                                                  valorChdT2: String,
                                                  valorInfT2: String,
                                                  deT3: String,
                                                  moedaT3: String,
                                                  paraT3: String,
                                                  dataIdaT3: String,
                                                  horaIdaT3: String,
                                                  dataParaT3: String,
                                                  horaParaT3: String,
                                                  valorAdtT3: String,
                                                  valorChdT3: String,
                                                  valorInfT3: String,
                                                  deT4: String,
                                                  moedaT4: String,
                                                  paraT4: String,
                                                  dataIdaT4: String,
                                                  horaIdaT4: String,
                                                  dataParaT4: String,
                                                  horaParaT4: String,
                                                  valorAdtT4: String,
                                                  valorChdT4: String,
                                                  valorInfT4: String,
                                                  deT5: String,
                                                  moedaT5: String,
                                                  paraT5: String,
                                                  dataIdaT5: String,
                                                  horaIdaT5: String,
                                                  dataParaT5: String,
                                                  horaParaT5: String,
                                                  valorAdtT5: String,
                                                  valorChdT5: String,
                                                  valorInfT5: String,
                                                  deT6: String,
                                                  moedaT6: String,
                                                  paraT6: String,
                                                  dataIdaT6: String,
                                                  horaIdaT6: String,
                                                  dataParaT6: String,
                                                  horaParaT6: String,
                                                  valorAdtT6: String,
                                                  valorChdT6: String,
                                                  valorInfT6: String,
                                                  deT7: String,
                                                  moedaT7: String,
                                                  paraT7: String,
                                                  dataIdaT7: String,
                                                  horaIdaT7: String,
                                                  dataParaT7: String,
                                                  horaParaT7: String,
                                                  valorAdtT7: String,
                                                  valorChdT7: String,
                                                  valorInfT7: String,
                                                  numero : String,
                                                  numero2 : String,
                                                  numero3 : String,
                                                  numero4 : String,
                                                  numero5 : String,
                                                  numero6 : String,
                                                  numero7 : String
                                                }];


                                                t++;
                                                traslado.deT4 = cars.from[i];
                                                traslado.moedaT4 = cars.coinT[i];
                                                traslado.paraT4 = cars.to[i];
                                                traslado.dataIdaT4 = cars.dateFrom[i];
                                                traslado.horaIdaT4 = cars.timeFrom[i];
                                                traslado.dataParaT4 = cars.dateTo[i];
                                                traslado.horaParaT4 = cars.timeTo[i];
                                                traslado.valorAdtT4 = cars.valueADT[i];
                                                traslado.valorChdT4 = cars.valueCHD[i];
                                                traslado.valorInfT4 = cars.valueINF[i];
                                                traslado.numero4 = t;
                                                infoTraslado4.push(traslado);




                                            }else if (i<10) {


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
                                                  deT2: String,
                                                  moedaT2: String,
                                                  paraT2: String,
                                                  dataIdaT2: String,
                                                  horaIdaT2: String,
                                                  dataParaT2: String,
                                                  horaParaT2: String,
                                                  valorAdtT2: String,
                                                  valorChdT2: String,
                                                  valorInfT2: String,
                                                  deT3: String,
                                                  moedaT3: String,
                                                  paraT3: String,
                                                  dataIdaT3: String,
                                                  horaIdaT3: String,
                                                  dataParaT3: String,
                                                  horaParaT3: String,
                                                  valorAdtT3: String,
                                                  valorChdT3: String,
                                                  valorInfT3: String,
                                                  deT4: String,
                                                  moedaT4: String,
                                                  paraT4: String,
                                                  dataIdaT4: String,
                                                  horaIdaT4: String,
                                                  dataParaT4: String,
                                                  horaParaT4: String,
                                                  valorAdtT4: String,
                                                  valorChdT4: String,
                                                  valorInfT4: String,
                                                  deT5: String,
                                                  moedaT5: String,
                                                  paraT5: String,
                                                  dataIdaT5: String,
                                                  horaIdaT5: String,
                                                  dataParaT5: String,
                                                  horaParaT5: String,
                                                  valorAdtT5: String,
                                                  valorChdT5: String,
                                                  valorInfT5: String,
                                                  deT6: String,
                                                  moedaT6: String,
                                                  paraT6: String,
                                                  dataIdaT6: String,
                                                  horaIdaT6: String,
                                                  dataParaT6: String,
                                                  horaParaT6: String,
                                                  valorAdtT6: String,
                                                  valorChdT6: String,
                                                  valorInfT6: String,
                                                  deT7: String,
                                                  moedaT7: String,
                                                  paraT7: String,
                                                  dataIdaT7: String,
                                                  horaIdaT7: String,
                                                  dataParaT7: String,
                                                  horaParaT7: String,
                                                  valorAdtT7: String,
                                                  valorChdT7: String,
                                                  valorInfT7: String,
                                                  numero : String,
                                                  numero2 : String,
                                                  numero3 : String,
                                                  numero4 : String,
                                                  numero5 : String,
                                                  numero6 : String,
                                                  numero7 : String
                                                }];


                                                t++;
                                                traslado.deT5 = cars.from[i];
                                                traslado.moedaT5 = cars.coinT[i];
                                                traslado.paraT5 = cars.to[i];
                                                traslado.dataIdaT5 = cars.dateFrom[i];
                                                traslado.horaIdaT5 = cars.timeFrom[i];
                                                traslado.dataParaT5 = cars.dateTo[i];
                                                traslado.horaParaT5 = cars.timeTo[i];
                                                traslado.valorAdtT5 = cars.valueADT[i];
                                                traslado.valorChdT5 = cars.valueCHD[i];
                                                traslado.valorInfT5 = cars.valueINF[i];
                                                traslado.numero5 = t;
                                                infoTraslado5.push(traslado);




                                            }else if (i<12) {


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
                                                  deT2: String,
                                                  moedaT2: String,
                                                  paraT2: String,
                                                  dataIdaT2: String,
                                                  horaIdaT2: String,
                                                  dataParaT2: String,
                                                  horaParaT2: String,
                                                  valorAdtT2: String,
                                                  valorChdT2: String,
                                                  valorInfT2: String,
                                                  deT3: String,
                                                  moedaT3: String,
                                                  paraT3: String,
                                                  dataIdaT3: String,
                                                  horaIdaT3: String,
                                                  dataParaT3: String,
                                                  horaParaT3: String,
                                                  valorAdtT3: String,
                                                  valorChdT3: String,
                                                  valorInfT3: String,
                                                  deT4: String,
                                                  moedaT4: String,
                                                  paraT4: String,
                                                  dataIdaT4: String,
                                                  horaIdaT4: String,
                                                  dataParaT4: String,
                                                  horaParaT4: String,
                                                  valorAdtT4: String,
                                                  valorChdT4: String,
                                                  valorInfT4: String,
                                                  deT5: String,
                                                  moedaT5: String,
                                                  paraT5: String,
                                                  dataIdaT5: String,
                                                  horaIdaT5: String,
                                                  dataParaT5: String,
                                                  horaParaT5: String,
                                                  valorAdtT5: String,
                                                  valorChdT5: String,
                                                  valorInfT5: String,
                                                  deT6: String,
                                                  moedaT6: String,
                                                  paraT6: String,
                                                  dataIdaT6: String,
                                                  horaIdaT6: String,
                                                  dataParaT6: String,
                                                  horaParaT6: String,
                                                  valorAdtT6: String,
                                                  valorChdT6: String,
                                                  valorInfT6: String,
                                                  deT7: String,
                                                  moedaT7: String,
                                                  paraT7: String,
                                                  dataIdaT7: String,
                                                  horaIdaT7: String,
                                                  dataParaT7: String,
                                                  horaParaT7: String,
                                                  valorAdtT7: String,
                                                  valorChdT7: String,
                                                  valorInfT7: String,
                                                  numero : String,
                                                  numero2 : String,
                                                  numero3 : String,
                                                  numero4 : String,
                                                  numero5 : String,
                                                  numero6 : String,
                                                  numero7 : String
                                                }];


                                                t++;
                                                traslado.deT6 = cars.from[i];
                                                traslado.moedaT6 = cars.coinT[i];
                                                traslado.paraT6 = cars.to[i];
                                                traslado.dataIdaT6 = cars.dateFrom[i];
                                                traslado.horaIdaT6 = cars.timeFrom[i];
                                                traslado.dataParaT6 = cars.dateTo[i];
                                                traslado.horaParaT6 = cars.timeTo[i];
                                                traslado.valorAdtT6 = cars.valueADT[i];
                                                traslado.valorChdT6 = cars.valueCHD[i];
                                                traslado.valorInfT6 = cars.valueINF[i];
                                                traslado.numero6 = t;
                                                infoTraslado6.push(traslado);




                                            }else if (i<14) {


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
                                                  deT2: String,
                                                  moedaT2: String,
                                                  paraT2: String,
                                                  dataIdaT2: String,
                                                  horaIdaT2: String,
                                                  dataParaT2: String,
                                                  horaParaT2: String,
                                                  valorAdtT2: String,
                                                  valorChdT2: String,
                                                  valorInfT2: String,
                                                  deT3: String,
                                                  moedaT3: String,
                                                  paraT3: String,
                                                  dataIdaT3: String,
                                                  horaIdaT3: String,
                                                  dataParaT3: String,
                                                  horaParaT3: String,
                                                  valorAdtT3: String,
                                                  valorChdT3: String,
                                                  valorInfT3: String,
                                                  deT4: String,
                                                  moedaT4: String,
                                                  paraT4: String,
                                                  dataIdaT4: String,
                                                  horaIdaT4: String,
                                                  dataParaT4: String,
                                                  horaParaT4: String,
                                                  valorAdtT4: String,
                                                  valorChdT4: String,
                                                  valorInfT4: String,
                                                  deT5: String,
                                                  moedaT5: String,
                                                  paraT5: String,
                                                  dataIdaT5: String,
                                                  horaIdaT5: String,
                                                  dataParaT5: String,
                                                  horaParaT5: String,
                                                  valorAdtT5: String,
                                                  valorChdT5: String,
                                                  valorInfT5: String,
                                                  deT6: String,
                                                  moedaT6: String,
                                                  paraT6: String,
                                                  dataIdaT6: String,
                                                  horaIdaT6: String,
                                                  dataParaT6: String,
                                                  horaParaT6: String,
                                                  valorAdtT6: String,
                                                  valorChdT6: String,
                                                  valorInfT6: String,
                                                  deT7: String,
                                                  moedaT7: String,
                                                  paraT7: String,
                                                  dataIdaT7: String,
                                                  horaIdaT7: String,
                                                  dataParaT7: String,
                                                  horaParaT7: String,
                                                  valorAdtT7: String,
                                                  valorChdT7: String,
                                                  valorInfT7: String,
                                                  numero : String,
                                                  numero2 : String,
                                                  numero3 : String,
                                                  numero4 : String,
                                                  numero5 : String,
                                                  numero6 : String,
                                                  numero7 : String
                                                }];


                                                t++;
                                                traslado.deT7 = cars.from[i];
                                                traslado.moedaT7 = cars.coinT[i];
                                                traslado.paraT7 = cars.to[i];
                                                traslado.dataIdaT7 = cars.dateFrom[i];
                                                traslado.horaIdaT7 = cars.timeFrom[i];
                                                traslado.dataParaT7 = cars.dateTo[i];
                                                traslado.horaParaT7 = cars.timeTo[i];
                                                traslado.valorAdtT7 = cars.valueADT[i];
                                                traslado.valorChdT7 = cars.valueCHD[i];
                                                traslado.valorInfT7 = cars.valueINF[i];
                                                traslado.numero7 = t;
                                                infoTraslado6.push(traslado);


                                              }

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
                                                //console.log(infoCarros[i]);

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
                                                //console.log(infoSeguro[i]);

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
                                                //console.log(infoTickets[i]);

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
                                                //console.log(infoOutros[i]);

                                              }


                                        res.render('new/newpageH', { title: 'Geral Page H', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, budget, client, ...req.session, companions, test, allFlights, infoTraslado, infoTraslado2, infoTraslado3, infoTraslado4, infoTraslado5, infoTraslado6, infoTraslado7, traslado, infoCarros, carros, infoSeguro, seguro, infoTickets, tickets, infoOutros, outros, hoteis, infoHoteis, dias, dias2, dias3, dias4, dias5, dias6, dias7, dias8, dias9, dias10, dias11, dias12, dias13, dias14, dias15, dias16, dias17, dias18, dias19, dias20, roteiro, allFlights, infoToReplica, t});
                                    }).catch((error)=>{
                                        //console.log(error);
                                        res.redirect('/error');
                                      });
                              }).catch((error)=>{
                                //console.log(error);
                                res.redirect('/error');
                            });
                          }).catch((error)=>{
                            //console.log(error);
                            res.redirect('/error');
                          });
                        }).catch((error)=>{
                      //console.log(error);
                      res.redirect('/error');
                    });
                  }).catch((error)=>{
                //console.log(error);
                res.redirect('/error');
              });
            }).catch((error)=>{
          //console.log(error);
          res.redirect('/error');
        });




});



module.exports = router;
