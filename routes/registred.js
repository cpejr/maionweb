var express = require('express');
var router = express.Router();
const Client = require('../models/client');
const Flight = require('../models/flight');
const Hotel = require('../models/hotel');
const Budget = require('../models/budget');
const Car = require('../models/car');
const Safe = require('../models/safe');

// Get Validation PageA
router.get('/validation', function(req, res) {
  Client.getAll().then((clients) => {
    const cpfs = [];
    for (var i = 0; i < clients.length; i++) {//Popula um vetor com todos os CPF's Existentes registrados
      const aux = {
        cpf: String,
      };
      aux.cpf = clients[i].register;
      cpfs.push(aux.cpf);
    }
    console.log(cpfs);
    return res.send(cpfs);//Vetor sendo enviado
  }).catch((error) => {
   console.log(error);
   res.redirect('/error');
  });
});

//GET pagePersonal
router.get('/PagePersonal/:client_id', function (req, res) {
  const client_id = req.params.client_id;
  Client.getAllBudgetsById(client_id).then((budgets)=>{

    const allBudgets = [];
    var numDeViagens = 0;

    for (var i = 0; i < budgets.length; i++) {
      const budget = {
        _id: String,
        codFile: String,
        planDate: String,
        finalized: String,
        client:  String,
      };

      budget._id = budgets[i]._id;
      budget.codFile = budgets[i].codFile;
      budget.planDate = budgets[i].planDate[0];
      budget.finalized = budgets[i].finalized;
      budget.client = budgets[i].client;

      allBudgets.push(budget);

      if(budgets[i].finalized != 'Em andamento'){
        numDeViagens++;
      }
    }
    res.render('registred/PagePersonal', { budgets, title: 'Personal', layout: 'layoutDashboard',...req.session, allBudgets, numDeViagens});
  }).catch((error) => {
   console.log(error);
   res.redirect('/error');
  });
});

//GET pageRegistred
router.get('/pageRegistred', function (req, res) {
  Client.getAll().then((clientes)=>{
    res.render('registred/pageRegistred', { clientes, title: 'Cadastrados', layout: 'layoutDashboard',...req.session});
  }).catch((error) => {
   console.log(error);
   res.redirect('/error');
  });
});


/* GET pageA. */
router.get('/pageA/:client_id', function(req, res, next) {
  Client.getById(req.params.client_id).then((client) =>{

    const allFamily = [];
    const allCompanions = [];
    const clientInfoToFunctions = {
      family: Number,
      companions: Number,
    };
    var family = 1;
    var companions = 1;

    for (var i = 0; i < client.children.length; i++) {
      const familyInfo = {
        repNum: Number,

        children: String,
        birthDateChildren: String,
        childrenPassport: String,
        childrenPassportValidation: String,
      };

      familyInfo.children = client.children[i];
      familyInfo.birthDateChildren = client.birthDateChildren[i];
      familyInfo.childrenPassport = client.childrenPassport[i];
      familyInfo.childrenPassportValidation = client.childrenPassportValidation[i];
      familyInfo.repNum = (i+1);

      family++;

      allFamily.push(familyInfo);
    }

    for (var j = 0; j < client.companionFullname.length; j++) {
      const companionsInfo = {
        repNum: Number,

        companionFullname: String,
        companionEmail: String,
        companionCellphone: String,
        companionPassport: String,
        companionPassportValidation: String,
        birthDateCompanion: String,
      };

      companionsInfo.companionFullname = client.companionFullname[j];
      companionsInfo.companionEmail = client.companionEmail[j];
      companionsInfo.companionCellphone = client.companionCellphone[j];
      companionsInfo.companionPassport = client.companionPassport[j];
      companionsInfo.companionPassportValidation = client.companionPassportValidation[j];
      companionsInfo.repNum = (j+1);
      companionsInfo.birthDateCompanion = client.birthDateCompanion[j];

      companions++;

      allCompanions.push(companionsInfo);
    }

    clientInfoToFunctions.family = family;
    clientInfoToFunctions.companions = companions;
    console.log('-------');
    console.log(client.funil);

    res.render('registred/pageA', { title: 'Cadastro de cliente', layout: 'layoutDashboard', clientInfoToFunctions, allCompanions, allFamily, client});
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
    const dayToFunctions = {
      day: Number
    }

    var day = 1;

    console.log(req.session);
          for (var i = 0; i < budget.planCountry.length; i++) {

            const script = {
              repNum: Number,

              planDate: String,
              planCity: String,
              planCountry: String,
              planFreeField: String
            };

            script.repNum = (i+1);
            script.planDate = budget.planDate[i];
            script.planCity = budget.planCity[i];
            script.planCountry = budget.planCountry[i];
            script.planFreeField = budget.planFreeField[i]

            day++;

            allScripts.push(script);
            // console.log(allScripts.countryName);
          }

          dayToFunctions.day = day;

    res.render('registred/pageC', { title: 'Geral Page C', layout: 'layoutDashboard.hbs', client_id: req.params.client_id, budget, allScripts, dayToFunctions});
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
            const infoToReplica = {
              ageId1: Number,
              ageId2:Number,
              ageId3: Number,
              idTable: Number,
            };

            var j = 0;
            var id_table = 1;
            var id_table2 = 1;
            var age_id1 = 1;
            var age_id2 = 2;
            var age_id3 = 3;
            var result = 1;

            for (var i = 0; i < flights.escalas.length; i++) {

              const flightInfo ={

                escala: Number,
                final: Number,
                inicio: Number,
                idTable: Number,
                idTable2: Number,
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

              else{
                flightInfo.escala = 0;
              }// não é escala

              //Descobre se o voo atual é a ultima linha antes do próximo Voo
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
                  flightInfo.idTable2 = id_table2; // Muda o número do id da tabela pra a seleção de bloco funcionar
                  id_table2++;
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

            res.render('registred/pageD', { title: 'Geral Page D', layout: 'layoutDashboard.hbs',  client_id: req.params.client_id, budget_id: req.params.budget_id, client, allFlights, infoToReplica, flights});
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
        const hotelsInfoToFunctions = {
          hotels: Number,
        };
        var hotels = 1;

        for (var i = 0; i < hotel.hotel1.length; i++) {
          const hotelsInfo = {
            isPrimeiro: Number,
            numHotels: Number,

            city: String,
            coin: String,
            acomodationType1: String,
            acomodationType2: String,
            acomodationType3: String,
            hotel1: String,
            hotel2: String,
            hotel3: String,
            qntd1: String,
            qntd2: String,
            qntd3: String,
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
            food1: String,
            food2: String,
            food3: String,
            category1: String,
            category2: String,
            category3: String,
            cancellationPeriod:String,
            cancellationPeriod2:String,
            cancellationPeriod3:String
          };

          if (i == 0) {
            hotelsInfo.isPrimeiro = 1;
          }

          hotelsInfo.city = hotel.city[i];
          hotelsInfo.coin = hotel.coin[i];
          hotelsInfo.acomodationType1 = hotel.acomodationType1[i];
          hotelsInfo.acomodationType2 = hotel.acomodationType2[i];
          hotelsInfo.acomodationType3 = hotel.acomodationType3[i];
          hotelsInfo.hotel1 = hotel.hotel1[i];
          hotelsInfo.hotel2 = hotel.hotel2[i];
          hotelsInfo.hotel3 = hotel.hotel3[i];
          hotelsInfo.qntd1 = hotel.qntd1[i];
          hotelsInfo.qntd2 = hotel.qntd2[i];
          hotelsInfo.qntd3 = hotel.qntd3[i];
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
          hotelsInfo.food1 = hotel.food1[i];
          hotelsInfo.food2  = hotel.food2[i];
          hotelsInfo.food3 = hotel.food3[i];
          hotelsInfo.category1 = hotel.category1[i];
          hotelsInfo.category2 = hotel.category2[i];
          hotelsInfo.category3 = hotel.category3[i];
          hotelsInfo.cancellationPeriod = hotel.cancellationPeriod[i];
          hotelsInfo.cancellationPeriod2 = hotel.cancellationPeriod2[i];
          hotelsInfo.cancellationPeriod3 = hotel.cancellationPeriod3[i];
          hotelsInfo.numHotels = (i+1);

          hotels++;

          allHotels.push(hotelsInfo);
        }

        hotelsInfoToFunctions.hotels = hotels;

        res.render('registred/pageE', { title: 'Geral Page E', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, allHotels, hotelsInfoToFunctions});
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
        const carsInfoTofunctions ={
          cars: Number,
          traslado: Number,
        };
        var cars = 1;
        var traslado = 1;

        for (var i = 0; i < car.from.length; i++) {

          const carsTrasladoInfo = {
            isPrimeiro: Number,
            repNum: Number,

            from: String,
            to: String,
            dateFrom: String,
            timeFrom: String,
            valueADT: Number,
            numADT: Number,
            valueCHD: Number,
            numCHD: Number,
            valueINF: Number,
            numINF: Number,
            totalTranslado: Number,
            coinT: String,
          };

          if (i == 0) {
            carsTrasladoInfo.isPrimeiro = 1;
          }

          carsTrasladoInfo.from = car.from[i];
          carsTrasladoInfo.to = car.to[i];
          carsTrasladoInfo.dateFrom = car.dateFrom[i];
          carsTrasladoInfo.timeFrom = car.timeFrom[i];
          carsTrasladoInfo.valueADT = car.valueADT[i];
          carsTrasladoInfo.numADT = car.numADT[i];
          carsTrasladoInfo.valueCHD = car.valueCHD[i];
          carsTrasladoInfo.numCHD = car.numCHD[i];
          carsTrasladoInfo.valueINF = car.valueINF[i];
          carsTrasladoInfo.numINF = car.numINF[i];
          carsTrasladoInfo.totalTranslado = car.totalTranslado[i];
          carsTrasladoInfo.coinT = car.coinT[i];
          carsTrasladoInfo.repNum = (i+1);

          traslado++;

          allCarsTraslado.push(carsTrasladoInfo);
        }

        for (var j = 0; j < car.typeCar.length; j++) {

          const carsInfo = {
            repNum: Number,

            typeCar: String,
            withdrawal: String,
            delivery: String,
            totalCar: Number,
            city: String,
            shift:String,
            safe: String,
            coinC: String,
            others: String
          };

          carsInfo.typeCar = car.typeCar[j];
          carsInfo.withdrawal = car.withdrawal[j];
          carsInfo.delivery = car.delivery[j];
          carsInfo.totalCar = car.totalCar[j];
          carsInfo.city = car.city[j];
          carsInfo.shift = car.shift[j];
          carsInfo.safe = car.safe[j];
          carsInfo.coinC = car.coinC[i];
          carsInfo.others = car.others[j];
          carsInfo.repNum = (j+1);

          cars++;

          allCars.push(carsInfo);
        }

        carsInfoTofunctions.traslado = traslado;
        carsInfoTofunctions.cars = cars;

        res.render('registred/pageF', { title: 'Geral Page F', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client, allCars, allCarsTraslado, carsInfoTofunctions});
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
        const safesInfoToFunctions = {
          insurance: Number,
          ticket: Number,
          outros: Number,
        };

        var insurance = 1;
        var ticket = 1;
        var outros = 1;

        for (var i = 0; i < safe.insuranceName.length; i++) {

          const safeInfo = {
            isPrimeiro: Number,
            repNum: Number,

            insuranceName: String,
            insuranceCoverage: String,
            insuranceADT: Number,
            SafenumADT: Number,
            insuranceCHD: Number,
            SafenumCHD: Number,
            insuranceINF: Number,
            SafenumINF: Number,
            insuranceTOT: Number,
            insuranceCoin: String,
          };

          if (i == 0) {
            safeInfo.isPrimeiro = 1;
          }

          safeInfo.insuranceName = safe.insuranceName[i];
          safeInfo.insuranceCoverage = safe.insuranceCoverage[i];
          safeInfo.insuranceADT = safe.insuranceADT[i];
          safeInfo.SafenumADT = safe.SafenumADT[i];
          safeInfo.insuranceCHD = safe.insuranceCHD[i];
          safeInfo.SafenumCHD = safe.SafenumCHD[i];
          safeInfo.insuranceINF = safe.insuranceINF[i];
          safeInfo.SafenumINF = safe.SafenumINF[i];
          safeInfo.insuranceTOT = safe.insuranceTOT[i];
          safeInfo.insuranceCoin = safe.insuranceCoin[i];
          safeInfo.repNum = (i+1);

          insurance++;

          allSafes.push(safeInfo);
        }

        for (var j = 0; j < safe.ticketsName.length; j++) {

          const ticketInfo = {
            isPrimeiro: Number,
            repNum: Number,

            ticketsName: String,
            ticketsADT: Number,
            TicketnumADT: Number,
            ticketsCHD: Number,
            TicketnumCHD: Number,
            ticketsINF: Number,
            TicketnumINF: Number,
            ticketsTOT: Number,
            ticketsCoin: String,
          };

          if (j == 0) {
            ticketInfo.isPrimeiro = 1;
          }

          ticketInfo.ticketsName = safe.ticketsName[j];
          ticketInfo.ticketsADT = safe.ticketsADT[j];
          ticketInfo.TicketnumADT = safe.TicketnumADT[j];
          ticketInfo.ticketsCHD = safe.ticketsCHD[j];
          ticketInfo.TicketnumCHD = safe.TicketnumCHD[j];
          ticketInfo.ticketsINF = safe.ticketsINF[j];
          ticketInfo.TicketnumINF = safe.TicketnumINF[j];
          ticketInfo.ticketsTOT = safe.ticketsTOT[j];
          ticketInfo.ticketsCoin = safe.ticketsCoin[j];
          ticketInfo.repNum = (j+1);

          ticket++;

          allTickets.push(ticketInfo);
        }

        for (var k = 0; k < safe.otherName.length; k++) {

          const otherInfo = {
            isPrimeiro: Number,
            repNum: Number,

            otherName: String,
            otherADT: Number,
            OthernumADT: Number,
            otherCHD: String,
            OthernumCHD: Number,
            otherINF: Number,
            OthernumINF: Number,
            otherTOT: Number,
            otherCoin: String,
          };

          if (k == 0) {
            otherInfo.isPrimeiro = 1;
          }

          otherInfo.otherName = safe.otherName[k];
          otherInfo.otherADT = safe.otherADT[k];
          otherInfo.OthernumADT = safe.OthernumADT[k];
          otherInfo.otherCHD = safe.otherCHD[k];
          otherInfo.OthernumCHD = safe.OthernumCHD[k];
          otherInfo.otherINF = safe.otherINF[k];
          otherInfo.OthernumINF = safe.OthernumINF[k];
          otherInfo.otherTOT = safe.otherTOT[k];
          otherInfo.otherCoin = safe.otherCoin[k];
          otherInfo.repNum = (k+1);

          outros++;

          allOthers.push(otherInfo);
        }

        safesInfoToFunctions.insurance = insurance;
        safesInfoToFunctions.ticket = ticket;
        safesInfoToFunctions.outros = outros;

        res.render('registred/pageG', { title: 'Geral Page G', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, client, allSafes, allOthers, allTickets, safesInfoToFunctions});
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

// router.get('/pageH/:client_id/:budget_id', function(req, res) {
//   Budget.getById(req.params.client_id).then((budget) => {
//     console.log(budget);
//     res.render('registred/pageH', { title: 'Geral Page H', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, budget});
// }).catch((error)=>{
//     console.log(error);
//     res.redirect('/error');
//   });
// });

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

                                              res.render('registred/pageH', { title: 'Geral Page H', layout: 'layoutDashboard.hbs', client_id: req.params.client_id,  budget_id: req.params.budget_id, budget});                                    }).catch((error)=>{
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
router.post('/pageA/:client_id',(req,res) => {
  const  client  = req.body.client;
  Client.update(req.params.client_id, client).then(() => {
    console.log('------');
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
  if(client.profile_FoodVegano != 'Vegano'){
    client.profile_FoodVegano = 'empty';
  };
  if(client.profile_FoodVegetariano != 'Vegetariano'){
    client.profile_FoodVegetariano = 'empty';
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
  const budget = req.body.budget;
  const planDate = req.body.budget.planDate;
  const planCity = req.body.budget.planCity;
  const planCountry = req.body.budget.planCountry;
  const planFreeField = req.body.budget.planFreeField;
  const budget_id = req.params.budget_id;
  const client_id = req.params.client_id;
  const sendable_budget = {
    planDate: [String],
    planCity: [String],
    planCountry: [String],
    planFreeField: [String]
  };
  var j = 0;//Variável pra organizar informação salva
  var k = 0;//variável pra contar número de blocos a serem apagados na página

  for (var i = 0; i < budget.deleting.length; i++) {
    if (budget.deleting[i] == 1) {
      k++;
    }}//Checa se é pra apagar tudo que tem na página

  if (budget.deleting.length == 1 && budget.deleting[j] != 1) {
    sendable_budget.planDate[j] = planDate;
    sendable_budget.planCity[j] = planCity;
    sendable_budget.planCountry[j] = planCountry;
    sendable_budget.planFreeField[j] = planFreeField;
  }//Trata o caso de ter somente um bloco na página e que não deve ser apagado

  else if(budget.deleting.length == k){
    sendable_budget.planDate[j] = '';
    sendable_budget.planCity[j] = '';
    sendable_budget.planCountry[j] = '';
    sendable_budget.planFreeField[j] = '';
  }//Trata o caso de ter que apagar tudo na página

  else {
    for (var i = 0; i < budget.deleting.length; i++) {
      if (budget.deleting[i] != 1) {
        sendable_budget.planDate[j] = planDate[i];
        sendable_budget.planCity[j] = planCity[i];
        sendable_budget.planCountry[j] = planCountry[i];
        sendable_budget.planFreeField[j] = planFreeField[i];
        j++;
      }
    }
  }//Trata os demais casos

  Budget.update(budget_id, sendable_budget).then(() => {
    res.redirect(`/registred/pageD/${client_id}/${budget_id}`);
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

  console.log('-----------------flight-------------------');
  console.log(flight);

  const escalas = req.body.flight.escalas;
  const final = req.body.flight.final;
  const inicio = req.body.flight.inicio;
  const idTable = req.body.flight.idTable;
  const ageId1 = req.body.flight.ageId1;
  const ageId2 = req.body.flight.ageId2;
  const ageId3 = req.body.flight.ageId3;
  const result = req.body.flight.result;
  const firstflightTable = req.body.flight.firstflightTable;

  const flightNum = req.body.flight.flightNum;
  const dateFlight = req.body.flight.dateFlight;
  const from = req.body.flight.from;
  const destination = req.body.flight.destination;
  const timeOut = req.body.flight.timeOut;
  const timeIn = req.body.flight.timeIn;
  const coin = req.body.flight.coin;

  // Primeira classe
  const totalValueCHD_FirstClass = req.body.flight.totalValueCHD_FirstClass;
  const tariffValueCHD_FirstClass = req.body.flight.tariffValueCHD_FirstClass;
  const taxValueCHD_FirstClass = req.body.flight.taxValueCHD_FirstClass;
  const ravValueCHD_FirstClass = req.body.flight.ravValueCHD_FirstClass;
  const numCHD_FirstClass = req.body.flight.numCHD_FirstClass;

  const totalValueAdult_FirstClass = req.body.flight.totalValueAdult_FirstClass;
  const tariffValueAdult_FirstClass = req.body.flight.tariffValueAdult_FirstClass;
  const taxValueAdult_FirstClass = req.body.flight.taxValueAdult_FirstClass;
  const ravValueAdult_FirstClass = req.body.flight.ravValueAdult_FirstClass;
  const numADT_FirstClass = req.body.flight.numADT_FirstClass;

  const totalValueInf_FirstClass = req.body.flight.totalValueInf_FirstClass;
  const tariffValueInf_FirstClass = req.body.flight.tariffValueInf_FirstClass;
  const taxValueInf_FirstClass = req.body.flight.taxValueInf_FirstClass;
  const ravValueInf_FirstClass = req.body.flight.ravValueInf_FirstClass;
  const numINF_FirstClass = req.body.flight.numINF_FirstClass;

  // Executivo
  const totalValueCHD_Executive = req.body.flight.totalValueCHD_Executive;
  const tariffValueCHD_Executive = req.body.flight.tariffValueCHD_Executive;
  const taxValueCHD_Executive = req.body.flight.taxValueCHD_Executive;
  const ravValueCHD_Executive = req.body.flight.ravValueCHD_Executive;
  const numCHD_Executive = req.body.flight.numCHD_Executive;

  const totalValueAdult_Executive = req.body.flight.totalValueAdult_Executive;
  const tariffValueAdult_Executive = req.body.flight.tariffValueAdult_Executive;
  const taxValueAdult_Executive = req.body.flight.taxValueAdult_Executive;
  const ravValueAdult_Executive = req.body.flight.ravValueAdult_Executive;
  const numADT_Executive = req.body.flight.numADT_Executive;

  const totalValueInf_Executive = req.body.flight.totalValueInf_Executive;
  const tariffValueInf_Executive = req.body.flight.tariffValueInf_Executive;
  const taxValueInf_Executive = req.body.flight.taxValueInf_Executive;
  const ravValueInf_Executive = req.body.flight.ravValueInf_Executive;
  const numINF_Executive = req.body.flight.numINF_Executive;

  // Econômico
  const totalValueCHD_Economic = req.body.flight.totalValueCHD_Economic;
  const tariffValueCHD_Economic = req.body.flight.tariffValueCHD_Economic;
  const taxValueCHD_Economic = req.body.flight.taxValueCHD_Economic;
  const ravValueCHD_Economic = req.body.flight.ravValueCHD_Economic;
  const numCHD_Economic = req.body.flight.numCHD_Economic;

  const totalValueAdult_Economic = req.body.flight.totalValueAdult_Economic;
  const tariffValueAdult_Economic = req.body.flight.tariffValueAdult_Economic;
  const taxValueAdult_Economic = req.body.flight.taxValueAdult_Economic;
  const ravValueAdult_Economic = req.body.flight.ravValueAdult_Economic;
  const numADT_Economic = req.body.flight.numADT_Economic;

  const totalValueInf_Economic = req.body.flight.totalValueInf_Economic;
  const tariffValueInf_Economic = req.body.flight.tariffValueInf_Economic;
  const taxValueInf_Economic = req.body.flight.taxValueInf_Economic;
  const ravValueInf_Economic = req.body.flight.ravValueInf_Economic;
  const numINF_Economic = req.body.flight.numINF_Economic;

  const sendable_flights = {
    escalas: [Number],
    flightNum: [String],
    dateFlight:[String],
    from:[String],
    destination:[String],
    timeOut: [String],
    timeIn: [String],
    coin:[String],

    // Primeira classe
    totalValueCHD_FirstClass: [Number],
    tariffValueCHD_FirstClass: [Number],
    taxValueCHD_FirstClass: [Number],
    ravValueCHD_FirstClass: [Number],
    numCHD_FirstClass: [Number],

    totalValueAdult_FirstClass: [Number],
    tariffValueAdult_FirstClass: [Number],
    taxValueAdult_FirstClass: [Number],
    ravValueAdult_FirstClass: [Number],
    numADT_FirstClass: [Number],

    totalValueInf_FirstClass: [Number],
    tariffValueInf_FirstClass: [Number],
    taxValueInf_FirstClass: [Number],
    ravValueInf_FirstClass: [Number],
    numINF_FirstClass: [Number],

    // Executivo
    totalValueCHD_Executive: [Number],
    tariffValueCHD_Executive: [Number],
    taxValueCHD_Executive: [Number],
    ravValueCHD_Executive: [Number],
    numCHD_Executive: [Number],

    totalValueAdult_Executive: [Number],
    tariffValueAdult_Executive: [Number],
    taxValueAdult_Executive: [Number],
    ravValueAdult_Executive: [Number],
    numADT_Executive: [Number],

    totalValueInf_Executive: [Number],
    tariffValueInf_Executive: [Number],
    taxValueInf_Executive: [Number],
    ravValueInf_Executive: [Number],
    numINF_Executive: [Number],

    // Econômico
    totalValueCHD_Economic: [Number],
    tariffValueCHD_Economic: [Number],
    taxValueCHD_Economic: [Number],
    ravValueCHD_Economic: [Number],
    numCHD_Economic: [Number],

    totalValueAdult_Economic: [Number],
    tariffValueAdult_Economic: [Number],
    taxValueAdult_Economic: [Number],
    ravValueAdult_Economic: [Number],
    numADT_Economic: [Number],

    totalValueInf_Economic: [Number],
    tariffValueInf_Economic: [Number],
    taxValueInf_Economic: [Number],
    ravValueInf_Economic: [Number],
    numINF_Economic: [Number],
  };

  var j = 0;//Variável pra organizar informação salva
  var k = 0;//variável pra contar número de blocos a serem apagados na página

  for (var x1 = 0; x1 < flight.deleting.length; x1++) {
    if (flight.deleting[x1] == 1) {
      k++;
    }
  }//Checa se é pra apagar tudo que tem na página

  if (flight.deleting.length == 1 && flight.deleting[j] != 1) {
    console.log('------------------ Caso 1 ---------------------');
    for (var x4 = 0; x4 < flight.escalas.length; x4++) {//1 voo pode ter mias de uma escala, então, para pegar todas as escalas, passamos por esse loop de x4
      sendable_flights.escalas[j+x4] = escalas[j+x4];

      sendable_flights.flightNum[j+x4] = flightNum[j+x4];
      sendable_flights.dateFlight[j+x4] = dateFlight[j+x4];
      sendable_flights.from[j+x4] = from[j+x4];
      sendable_flights.destination[j+x4] = destination[j+x4];
      sendable_flights.timeOut[j+x4] = timeOut[j+x4];
      sendable_flights.timeIn[j+x4] = timeIn[j+x4];
      sendable_flights.coin[j+x4] = coin[j+x4];
    }

    // Primeira classe
    sendable_flights.totalValueCHD_FirstClass[j] = totalValueCHD_FirstClass;
    sendable_flights.tariffValueCHD_FirstClass[j] = tariffValueCHD_FirstClass;
    sendable_flights.taxValueCHD_FirstClass[j] = taxValueCHD_FirstClass;
    sendable_flights.ravValueCHD_FirstClass[j] = ravValueCHD_FirstClass;
    sendable_flights.numCHD_FirstClass[j] = numCHD_FirstClass;

    sendable_flights.totalValueAdult_FirstClass[j] = totalValueAdult_FirstClass;
    sendable_flights.tariffValueAdult_FirstClass[j] = tariffValueAdult_FirstClass;
    sendable_flights.taxValueAdult_FirstClass[j] = taxValueAdult_FirstClass;
    sendable_flights.ravValueAdult_FirstClass[j] = ravValueAdult_FirstClass;
    sendable_flights.numADT_FirstClass[j] = numADT_FirstClass;

    sendable_flights.totalValueInf_FirstClass[j] = totalValueInf_FirstClass;
    sendable_flights.tariffValueInf_FirstClass[j] = tariffValueInf_FirstClass;
    sendable_flights.taxValueInf_FirstClass[j] = taxValueInf_FirstClass;
    sendable_flights.ravValueInf_FirstClass[j] = ravValueInf_FirstClass;
    sendable_flights.numINF_FirstClass[j] = numINF_FirstClass;

    // Executivo
    sendable_flights.totalValueCHD_Executive[j] = totalValueCHD_Executive;
    sendable_flights.tariffValueCHD_Executive[j] = tariffValueCHD_Executive;
    sendable_flights.taxValueCHD_Executive[j] = taxValueCHD_Executive;
    sendable_flights.ravValueCHD_Executive[j] = ravValueCHD_Executive;
    sendable_flights.numCHD_Executive[j] = numCHD_Executive;

    sendable_flights.totalValueAdult_Executive[j] = totalValueAdult_Executive;
    sendable_flights.tariffValueAdult_Executive[j] = tariffValueAdult_Executive;
    sendable_flights.taxValueAdult_Executive[j] = taxValueAdult_Executive;
    sendable_flights.ravValueAdult_Executive[j] = ravValueAdult_Executive;
    sendable_flights.numADT_Executive[j] = numADT_Executive;

    sendable_flights.totalValueInf_Executive[j] = totalValueInf_Executive;
    sendable_flights.tariffValueInf_Executive[j] = tariffValueInf_Executive;
    sendable_flights.taxValueInf_Executive[j] = taxValueInf_Executive;
    sendable_flights.ravValueInf_Executive[j] = ravValueInf_Executive;
    sendable_flights.numINF_Executive[j] = numINF_Executive;

    // Econômico
    sendable_flights.totalValueCHD_Economic[j] = totalValueCHD_Economic;
    sendable_flights.tariffValueCHD_Economic[j] = tariffValueCHD_Economic;
    sendable_flights.taxValueCHD_Economic[j] = taxValueCHD_Economic;
    sendable_flights.ravValueCHD_Economic[j] = ravValueCHD_Economic;
    sendable_flights.numCHD_Economic[j] = numCHD_Economic;

    sendable_flights.totalValueAdult_Economic[j] = totalValueAdult_Economic;
    sendable_flights.tariffValueAdult_Economic[j] = tariffValueAdult_Economic;
    sendable_flights.taxValueAdult_Economic[j] = taxValueAdult_Economic;
    sendable_flights.ravValueAdult_Economic[j] = ravValueAdult_Economic;
    sendable_flights.numADT_Economic[j] = numADT_Economic;

    sendable_flights.totalValueInf_Economic[j] = totalValueInf_Economic;
    sendable_flights.tariffValueInf_Economic[j] = tariffValueInf_Economic;
    sendable_flights.taxValueInf_Economic[j] = taxValueInf_Economic;
    sendable_flights.ravValueInf_Economic[j] = ravValueInf_Economic;
    sendable_flights.numINF_Economic[j] = numINF_Economic;
  }//Trata o caso de ter somente um bloco na página e que não deve ser apagado

  else if(flight.deleting.length == k){
    console.log('------------------ Caso 2 ---------------------');
    sendable_flights.escalas[j] = 0;

    sendable_flights.flightNum[j] = '';
    sendable_flights.dateFlight[j] = '';
    sendable_flights.from[j] = '';
    sendable_flights.destination[j] = '';
    sendable_flights.timeOut[j] = '';
    sendable_flights.timeIn[j] = '';
    sendable_flights.coin[j] = '';

    // Primeira classe
    sendable_flights.totalValueCHD_FirstClass[j] = 0;
    sendable_flights.tariffValueCHD_FirstClass[j] = 0;
    sendable_flights.taxValueCHD_FirstClass[j] = 0;
    sendable_flights.ravValueCHD_FirstClass[j] = 0;
    sendable_flights.numCHD_FirstClass[j] = 0;

    sendable_flights.totalValueAdult_FirstClass[j] = 0;
    sendable_flights.tariffValueAdult_FirstClass[j] = 0;
    sendable_flights.taxValueAdult_FirstClass[j] = 0;
    sendable_flights.ravValueAdult_FirstClass[j] = 0;
    sendable_flights.numADT_FirstClass[j] = 0;

    sendable_flights.totalValueInf_FirstClass[j] = 0;
    sendable_flights.tariffValueInf_FirstClass[j] = 0;
    sendable_flights.taxValueInf_FirstClass[j] = 0;
    sendable_flights.ravValueInf_FirstClass[j] = 0;
    sendable_flights.numINF_FirstClass[j] = 0;

    // Executivo
    sendable_flights.totalValueCHD_Executive[j] = 0;
    sendable_flights.tariffValueCHD_Executive[j] = 0;
    sendable_flights.taxValueCHD_Executive[j] = 0;
    sendable_flights.ravValueCHD_Executive[j] = 0;
    sendable_flights.numCHD_Executive[j] = 0;

    sendable_flights.totalValueAdult_Executive[j] = 0;
    sendable_flights.tariffValueAdult_Executive[j] = 0;
    sendable_flights.taxValueAdult_Executive[j] = 0;
    sendable_flights.ravValueAdult_Executive[j] = 0;
    sendable_flights.numADT_Executive[j] = 0;

    sendable_flights.totalValueInf_Executive[j] = 0;
    sendable_flights.tariffValueInf_Executive[j] = 0;
    sendable_flights.taxValueInf_Executive[j] = 0;
    sendable_flights.ravValueInf_Executive[j] = 0;
    sendable_flights.numINF_Executive[j] = 0;

    // Econômico
    sendable_flights.totalValueCHD_Economic[j] = 0;
    sendable_flights.tariffValueCHD_Economic[j] = 0;
    sendable_flights.taxValueCHD_Economic[j] = 0;
    sendable_flights.ravValueCHD_Economic[j] = 0;
    sendable_flights.numCHD_Economic[j] = 0;

    sendable_flights.totalValueAdult_Economic[j] = 0;
    sendable_flights.tariffValueAdult_Economic[j] = 0;
    sendable_flights.taxValueAdult_Economic[j] = 0;
    sendable_flights.ravValueAdult_Economic[j] = 0;
    sendable_flights.numADT_Economic[j] = 0;

    sendable_flights.totalValueInf_Economic[j] = 0;
    sendable_flights.tariffValueInf_Economic[j] = 0;
    sendable_flights.taxValueInf_Economic[j] = 0;
    sendable_flights.ravValueInf_Economic[j] = 0;
    sendable_flights.numINF_Economic[j] = 0;
  }//Trata o caso de ter que apagar tudo na página

  else {
    console.log('------------------ Caso 3 ---------------------');
    var lst_escala = 0;
    var start = 0;
    var new_start = 0;
    var saving = 0;
    // for (var i = 0; i < flight.escalas.length; i++) {
    //   console.log(flight.escalas[i]);
    // }
    // console.log(i+1);
    for (var i = 0; i < flight.deleting.length; i++) {
      start = new_start;
      lst_escala = start;
      if (flight.escalas[start+1] == 1) {
        console.log('não é voo único');
        for (var a = (start+1); flight.escalas[a] == 1 ; a++) {
          lst_escala++;
        }
        new_start = lst_escala + 1;
        // console.log('vendo onde começa e acaba');
        // console.log(start);
        // console.log(lst_escala);
        // console.log(new_start);
      }//Determina até onde o voo vai

      else {
        console.log('voo único');
        new_start++;
        // console.log('vendo onde começa e acaba');
        // console.log(start);
        // console.log(lst_escala);
        // console.log(new_start);
      }//Caso seja voo sem escalas

      if (flight.deleting[i] == 0) {
        for (var b = start; b <= lst_escala; b++) {
          sendable_flights.escalas[saving] = escalas[b];
          sendable_flights.flightNum[saving] = flightNum[b];
          sendable_flights.dateFlight[saving] = dateFlight[b];
          sendable_flights.from[saving] = from[b];
          sendable_flights.destination[saving] = destination[b];
          sendable_flights.timeOut[saving] = timeOut[b];
          sendable_flights.timeIn[saving] = timeIn[b];
          saving++;
        }
        // Primeira classe
        sendable_flights.totalValueCHD_FirstClass[j] = totalValueCHD_FirstClass[i];
        sendable_flights.tariffValueCHD_FirstClass[j] = tariffValueCHD_FirstClass[i];
        sendable_flights.taxValueCHD_FirstClass[j] = taxValueCHD_FirstClass[i];
        sendable_flights.ravValueCHD_FirstClass[j] = ravValueCHD_FirstClass[i];
        sendable_flights.numCHD_FirstClass[j] = numCHD_FirstClass[i];

        sendable_flights.totalValueAdult_FirstClass[j] = totalValueAdult_FirstClass[i];
        sendable_flights.tariffValueAdult_FirstClass[j] = tariffValueAdult_FirstClass[i];
        sendable_flights.taxValueAdult_FirstClass[j] = taxValueAdult_FirstClass[i];
        sendable_flights.ravValueAdult_FirstClass[j] = ravValueAdult_FirstClass[i];
        sendable_flights.numADT_FirstClass[j] = numADT_FirstClass[i];

        sendable_flights.totalValueInf_FirstClass[j] = totalValueInf_FirstClass[i];
        sendable_flights.tariffValueInf_FirstClass[j] = tariffValueInf_FirstClass[i];
        sendable_flights.taxValueInf_FirstClass[j] = taxValueInf_FirstClass[i];
        sendable_flights.ravValueInf_FirstClass[j] = ravValueInf_FirstClass[i];
        sendable_flights.numINF_FirstClass[j] = numINF_FirstClass[i];

        // Executivo
        sendable_flights.totalValueCHD_Executive[j] = totalValueCHD_Executive[i];
        sendable_flights.tariffValueCHD_Executive[j] = tariffValueCHD_Executive[i];
        sendable_flights.taxValueCHD_Executive[j] = taxValueCHD_Executive[i];
        sendable_flights.ravValueCHD_Executive[j] = ravValueCHD_Executive[i];
        sendable_flights.numCHD_Executive[j] = numCHD_Executive[i];

        sendable_flights.totalValueAdult_Executive[j] = totalValueAdult_Executive[i];
        sendable_flights.tariffValueAdult_Executive[j] = tariffValueAdult_Executive[i];
        sendable_flights.taxValueAdult_Executive[j] = taxValueAdult_Executive[i];
        sendable_flights.ravValueAdult_Executive[j] = ravValueAdult_Executive[i];
        sendable_flights.numADT_Executive[j] = numADT_Executive[i];

        sendable_flights.totalValueInf_Executive[j] = totalValueInf_Executive[i];
        sendable_flights.tariffValueInf_Executive[j] = tariffValueInf_Executive[i];
        sendable_flights.taxValueInf_Executive[j] = taxValueInf_Executive[i];
        sendable_flights.ravValueInf_Executive[j] = ravValueInf_Executive[i];
        sendable_flights.numINF_Executive[j] = numINF_Executive[i];

        // Econômico
        sendable_flights.totalValueCHD_Economic[j] = totalValueCHD_Economic[i];
        sendable_flights.tariffValueCHD_Economic[j] = tariffValueCHD_Economic[i];
        sendable_flights.taxValueCHD_Economic[j] = taxValueCHD_Economic[i];
        sendable_flights.ravValueCHD_Economic[j] = ravValueCHD_Economic[i];
        sendable_flights.numCHD_Economic[j] = numCHD_Economic[i];

        sendable_flights.totalValueAdult_Economic[j] = totalValueAdult_Economic[i];
        sendable_flights.tariffValueAdult_Economic[j] = tariffValueAdult_Economic[i];
        sendable_flights.taxValueAdult_Economic[j] = taxValueAdult_Economic[i];
        sendable_flights.ravValueAdult_Economic[j] = ravValueAdult_Economic[i];
        sendable_flights.numADT_Economic[j] = numADT_Economic[i];

        sendable_flights.totalValueInf_Economic[j] = totalValueInf_Economic[i];
        sendable_flights.tariffValueInf_Economic[j] = tariffValueInf_Economic[i];
        sendable_flights.taxValueInf_Economic[j] = taxValueInf_Economic[i];
        sendable_flights.ravValueInf_Economic[j] = ravValueInf_Economic[i];
        sendable_flights.numINF_Economic[j] = numINF_Economic[i];
        sendable_flights.coin[saving] = coin[i];
        j++;
      }

    }//Analisa o que deve ser feito para cada deleting na página
  }//Trata os demais casos
  console.log('------------------------sendable_saves------------------------');
  console.log(sendable_flights);
  Budget.getById(req.params.budget_id).then((budget) => {
    Flight.update(budget.flights, sendable_flights).then(() => {
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
  const hotel = req.body.hotel;
  const city = req.body.hotel.city;
  const coin = req.body.hotel.coin;
  const acomodationType1 = req.body.hotel.acomodationType1;
  const acomodationType2 = req.body.hotel.acomodationType2;
  const acomodationType3 = req.body.hotel.acomodationType3;
  const hotel1 = req.body.hotel.hotel1;
  const hotel2 = req.body.hotel.hotel2;
  const hotel3 = req.body.hotel.hotel3;
  const qntd1 = req.body.hotel.qntd1;
  const qntd2 = req.body.hotel.qntd2;
  const qntd3 = req.body.hotel.qntd3;
  const valueApt1 = req.body.hotel.valueApt1;
  const valueApt2 = req.body.hotel.valueApt2;
  const valueApt3 = req.body.hotel.valueApt3;
  const numberDaily1 = req.body.hotel.numberDaily1;
  const numberDaily2 = req.body.hotel.numberDaily2;
  const numberDaily3 = req.body.hotel.numberDaily3;
  const numberApt1 = req.body.hotel.numberApt1;
  const numberApt2 = req.body.hotel.numberApt2;
  const numberApt3 = req.body.hotel.numberApt3;
  const total1 = req.body.hotel.total1;
  const total2 = req.body.hotel.total2;
  const total3 = req.body.hotel.total3;
  const food1 = req.body.hotel.food1;
  const food2 = req.body.hotel.food2;
  const food3 = req.body.hotel.food3;
  const category1 = req.body.hotel.category1;
  const category2 = req.body.hotel.category2;
  const category3 = req.body.hotel.category3;
  const cancellationPeriod = req.body.hotel.cancellationPeriod;
  const cancellationPeriod2 = req.body.hotel.cancellationPeriod2;
  const cancellationPeriod3 = req.body.hotel.cancellationPeriod3;
  const budget_id = req.params.budget_id;
  const client_id = req.params.client_id;
  const sendable_hotels = {
    city: [String],
    coin: [String],
    acomodationType1: [String],
    acomodationType2: [String],
    acomodationType3: [String],
    hotel1: [String],
    hotel2: [String],
    hotel3: [String],
    qntd1: [String],
    qntd2: [String],
    qntd3: [String],
    valueApt1: [Number],
    valueApt2: [Number],
    valueApt3: [Number],
    numberDaily1: [Number],
    numberDaily2: [Number],
    numberDaily3: [Number],
    numberApt1:[Number],
    numberApt2: [Number],
    numberApt3: [Number],
    total1: [Number],
    total2: [Number],
    total3: [Number],
    food1: [String],
    food2: [String],
    food3: [String],
    category1: [String],
    category2: [String],
    category3: [String],
    cancellationPeriod:[String],
    cancellationPeriod2:[String],
    cancellationPeriod3:[String]
  };

  var j = 0;//Variável pra organizar informação salva
  var k = 0;//variável pra contar número de blocos a serem apagados na página

  for (var i = 0; i < hotel.deleting.length; i++) {
    if (hotel.deleting[i] == 1) {
      k++;
    }
  }//Checa se é pra apagar tudo que tem na página

  if (hotel.deleting.length == 1 && hotel.deleting[j] != 1) {
    sendable_hotels.city[j] = city;
    sendable_hotels.coin[j] = coin;
    sendable_hotels.acomodationType1[j] = acomodationType1;
    sendable_hotels.acomodationType2[j] = acomodationType2;
    sendable_hotels.acomodationType3[j] = acomodationType3;
    sendable_hotels.hotel1[j] = hotel1;
    sendable_hotels.hotel2[j] = hotel2;
    sendable_hotels.hotel3[j] = hotel3;
    sendable_hotels.qntd1[j] = qntd1;
    sendable_hotels.qntd2[j] = qntd2;
    sendable_hotels.qntd3[j] = qntd3;
    sendable_hotels.valueApt1[j] = valueApt1;
    sendable_hotels.valueApt2[j] = valueApt2;
    sendable_hotels.valueApt3[j] = valueApt3;
    sendable_hotels.numberDaily1[j] = numberDaily1;
    sendable_hotels.numberDaily2[j] = numberDaily2;
    sendable_hotels.numberDaily3[j] = numberDaily3;
    sendable_hotels.numberApt1[j] = numberApt1;
    sendable_hotels.numberApt2[j] = numberApt2;
    sendable_hotels.numberApt3[j] = numberApt3;
    sendable_hotels.total1[j] = total1;
    sendable_hotels.total2[j] = total2;
    sendable_hotels.total3[j] = total3;
    sendable_hotels.food1[j] = food1;
    sendable_hotels.food2[j]  = food2;
    sendable_hotels.food3[j] = food3;
    sendable_hotels.category1[j] = category1;
    sendable_hotels.category2[j] = category2;
    sendable_hotels.category3[j] = category3;
    sendable_hotels.cancellationPeriod[j] = cancellationPeriod;
    sendable_hotels.cancellationPeriod2[j] = cancellationPeriod2;
    sendable_hotels.cancellationPeriod3[j] = cancellationPeriod3;
  }//Trata o caso de ter somente um bloco na página

  else if(hotel.deleting.length == k){
    sendable_hotels.city[j] = '';
    sendable_hotels.coin[j] = 'Selecione qual moeda';
    sendable_hotels.acomodationType1[j] = '';
    sendable_hotels.acomodationType2[j] = '';
    sendable_hotels.acomodationType3[j] = '';
    sendable_hotels.hotel1[j] = '';
    sendable_hotels.hotel2[j] = '';
    sendable_hotels.hotel3[j] = '';
    sendable_hotels.qntd1[j] = 0;
    sendable_hotels.qntd2[j] = 0;
    sendable_hotels.qntd3[j] = 0;
    sendable_hotels.valueApt1[j] = 0;
    sendable_hotels.valueApt2[j] = 0;
    sendable_hotels.valueApt3[j] = 0;
    sendable_hotels.numberDaily1[j] = 0;
    sendable_hotels.numberDaily2[j] = 0;
    sendable_hotels.numberDaily3[j] = 0;
    sendable_hotels.numberApt1[j] = 0;
    sendable_hotels.numberApt2[j] = 0;
    sendable_hotels.numberApt3[j] = 0;
    sendable_hotels.total1[j] = 0;
    sendable_hotels.total2[j] = 0;
    sendable_hotels.total3[j] = 0;
    sendable_hotels.food1[j] = 'Regime de alimentação';
    sendable_hotels.food2[j]  = 'Regime de alimentação';
    sendable_hotels.food3[j] = '';
    sendable_hotels.category1[j] = '';
    sendable_hotels.category2[j] = '';
    sendable_hotels.category3[j] = '';
    sendable_hotels.cancellationPeriod[j] = 'Prazo de cancelamento';
    sendable_hotels.cancellationPeriod2[j] = 'Prazo de cancelamento';
    sendable_hotels.cancellationPeriod3[j] = 'Prazo de cancelamento';
  }//Trata o caso de ter que apagar tudo na página

  else {
    for (var i = 0; i < hotel.deleting.length; i++) {
      if (hotel.deleting[i] != 1) {
        sendable_hotels.city[j] = city[i];
        sendable_hotels.coin[j] = coin[i];
        sendable_hotels.acomodationType1[j] = acomodationType1[i];
        sendable_hotels.acomodationType2[j] = acomodationType2[i];
        sendable_hotels.acomodationType3[j] = acomodationType3[i];
        sendable_hotels.hotel1[j] = hotel1[i];
        sendable_hotels.hotel2[j] = hotel2[i];
        sendable_hotels.hotel3[j] = hotel3[i];
        sendable_hotels.qntd1[j] = qntd1[i];
        sendable_hotels.qntd2[j] = qntd2[i];
        sendable_hotels.qntd3[j] = qntd3[i];
        sendable_hotels.valueApt1[j] = valueApt1[i];
        sendable_hotels.valueApt2[j] = valueApt2[i];
        sendable_hotels.valueApt3[j] = valueApt3[i];
        sendable_hotels.numberDaily1[j] = numberDaily1[i];
        sendable_hotels.numberDaily2[j] = numberDaily2[i];
        sendable_hotels.numberDaily3[j] = numberDaily3[i];
        sendable_hotels.numberApt1[j] = numberApt1[i];
        sendable_hotels.numberApt2[j] = numberApt2[i];
        sendable_hotels.numberApt3[j] = numberApt3[i];
        sendable_hotels.total1[j] = total1[i];
        sendable_hotels.total2[j] = total2[i];
        sendable_hotels.total3[j] = total3[i];
        sendable_hotels.food1[j] = food1[i];
        sendable_hotels.food2[j]  = food2[i];
        sendable_hotels.food3[j] = food3[i];
        sendable_hotels.category1[j] = category1[i];
        sendable_hotels.category2[j] = category2[i];
        sendable_hotels.category3[j] = category3[i];
        sendable_hotels.cancellationPeriod[j] = cancellationPeriod[i];
        sendable_hotels.cancellationPeriod2[j] = cancellationPeriod2[i];
        sendable_hotels.cancellationPeriod3[j] = cancellationPeriod3[i];
        j++;
      }
    }
  }//Trata os demais casos


  Budget.getById(budget_id).then((budget) => {
    Hotel.update(budget.hotels, sendable_hotels).then(() => {
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
  const sendable_traslado = {
    from: [String],
    to: [String],
    dateFrom: [String],
    timeFrom: [String],
    dateTo: [String],
    timeTo: [String],
    valueADT: [Number],
    numADT: [Number],
    valueCHD: [Number],
    numCHD: [Number],
    valueINF: [Number],
    numINF: [Number],
    totalTranslado: [Number],
    coinT: [String],

    typeCar: [String],
    withdrawal: [String],
    delivery: [String],
    totalCar: [Number],
    city: [String],
    shift:[String],
    safe: [String],
    coinC: [String],
    others: [String]
  };
  // Variáveis do traslado
  const from = req.body.car.from;
  const to = req.body.car.to;
  const dateFrom = req.body.car.dateFrom;
  const timeFrom = req.body.car.timeFrom;
  const valueADT = req.body.car.valueADT;
  const numADT = req.body.car.numADT;
  const valueCHD = req.body.car.valueCHD;
  const numCHD = req.body.car.numCHD;
  const valueINF = req.body.car.valueINF;
  const numINF = req.body.car.numINF;
  const totalTranslado = req.body.car.totalTranslado;
  const coinT = req.body.car.coinT;
  // variáveis do Carro
  const typeCar = req.body.car.typeCar;
  const withdrawal = req.body.car.withdrawal;
  const delivery = req.body.car.delivery;
  const totalCar = req.body.car.totalCar;
  const city = req.body.car.city;
  const shift = req.body.car.shift;
  const safe = req.body.car.safe;
  const coinC = req.body.car.coinC;
  const others = req.body.car.others;

  var i = 0;//Variável pra organizar informação de traslados salva
  var j = 0;//variável pra contar número de blocos traslado a serem apagados na página
  var k = 0;//Variável pra organizar informação de carros salva
  var l = 0;//variável pra contar número de blocos carros a serem apagados na página

  // Tratamento do Traslado
  for (var x1 = 0; x1 < car.deletingTraslado.length; x1++) {
    if (car.deletingTraslado[x1] == 1) {
      j++;
    }
  }//Checa se é pra apagar tudo que tem na página

  if (car.deletingTraslado.length == 1 && car.deletingTraslado[i] != 1) {
    sendable_traslado.from[i] = from;
    sendable_traslado.to[i] = to;
    sendable_traslado.dateFrom[i] = dateFrom;
    sendable_traslado.timeFrom[i] = timeFrom;
    sendable_traslado.valueADT[i] = valueADT;
    sendable_traslado.numADT[i] = numADT;
    sendable_traslado.valueCHD[i] = valueCHD;
    sendable_traslado.numCHD[i] = numCHD;
    sendable_traslado.valueINF[i] = valueINF;
    sendable_traslado.numINF[i] = numINF;
    sendable_traslado.totalTranslado[i] = totalTranslado;
    sendable_traslado.coinT[i] = coinT;
  }//Trata o caso de ter somente um bloco na página e que não deve ser apagado

  else if(car.deletingTraslado.length == j){
    sendable_traslado.from[i] = '';
    sendable_traslado.to[i] = '';
    sendable_traslado.dateFrom[i] = '';
    sendable_traslado.timeFrom[i] = '';
    sendable_traslado.valueADT[i] = 0;
    sendable_traslado.numADT[i] = 0;
    sendable_traslado.valueCHD[i] = 0;
    sendable_traslado.numCHD[i] = 0;
    sendable_traslado.valueINF[i] = 0;
    sendable_traslado.numINF[i] = 0;
    sendable_traslado.totalTranslado[i] = 0;
    sendable_traslado.coinT[i] = 'Moeda';
  }//Trata o caso de ter que apagar tudo na página

  else {
    for (var x2 = 0; x2 < car.deletingTraslado.length; x2++) {
      if (car.deletingTraslado[x2] != 1) {
        sendable_traslado.from[i] = from[x2];
        sendable_traslado.to[i] = to[x2];
        sendable_traslado.dateFrom[i] = dateFrom[x2];
        sendable_traslado.timeFrom[i] = timeFrom[x2];
        sendable_traslado.valueADT[i] = valueADT[x2];
        sendable_traslado.numADT[i] = numADT[x2];
        sendable_traslado.valueCHD[i] = valueCHD[x2];
        sendable_traslado.numCHD[i] = numCHD[x2];
        sendable_traslado.valueINF[i] = valueINF[x2];
        sendable_traslado.numINF[i] = numINF[x2];
        sendable_traslado.totalTranslado[i] = totalTranslado[x2];
        sendable_traslado.coinT[i] = coinT[x2];
        i++;
      }
    }
  }//Trata os demais casos



  // Tratamento dos Carros
  for (var y1 = 0; y1 < car.deletingCar.length; y1++) {
    if (car.deletingCar[y1] == 1) {
      l++;
    }
  }//Checa se é pra apagar tudo que tem na página

  if (car.deletingCar.length == 1 && car.deletingCar[k] != 1) {
    sendable_traslado.typeCar[k] = typeCar;
    sendable_traslado.withdrawal[k] = withdrawal;
    sendable_traslado.delivery[k] = delivery;
    sendable_traslado.totalCar[k] = totalCar;
    sendable_traslado.city[k] = city;
    sendable_traslado.shift[k] = shift;
    sendable_traslado.safe[k] = safe;
    sendable_traslado.coinC[k] = coinC;
    sendable_traslado.others[k] = others;
  }//Trata o caso de ter somente um bloco na página e que não deve ser apagado

  else if(car.deletingCar.length == l){
    sendable_traslado.typeCar[k] = '';
    sendable_traslado.withdrawal[k] = '';
    sendable_traslado.delivery[k] = '';
    sendable_traslado.totalCar[k] = 0;
    sendable_traslado.city[k] = '';
    sendable_traslado.shift[k] = '';
    sendable_traslado.safe[k] = '';
    sendable_traslado.coinC[k] = 'Moeda';
    sendable_traslado.others[k] = '';
  }//Trata o caso de ter que apagar tudo na página

  else {
    for (var y2 = 0; y2 < car.deletingCar.length; y2++) {
      if (car.deletingCar[y2] != 1) {
        sendable_traslado.typeCar[k] = typeCar[y2];
        sendable_traslado.withdrawal[k] = withdrawal[y2];
        sendable_traslado.delivery[k] = delivery[y2];
        sendable_traslado.totalCar[k] = totalCar[y2];
        sendable_traslado.city[k] = city[y2];
        sendable_traslado.shift[k] = shift[y2];
        sendable_traslado.safe[k] = safe[y2];
        sendable_traslado.coinC[k] = coinC[y2];
        sendable_traslado.others[k] = others[y2];
        k++;
      }
    }
  }//Trata os demais casos

  Budget.getById(budget_id).then((budget) => {
    Car.update(budget.cars, sendable_traslado).then(() => {
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
  const safe = req.body.safe;
  const budget_id = req.params.budget_id;
  const client_id = req.params.client_id;
  // Variáveis Seguros
  const insuranceName = req.body.safe.insuranceName;
  const insuranceCoverage = req.body.safe.insuranceCoverage;
  const insuranceADT = req.body.safe.insuranceADT;
  const safenumADT = req.body.safe.SafenumADT;
  const insuranceCHD = req.body.safe.insuranceCHD;
  const safenumCHD = req.body.safe.SafenumCHD;
  const insuranceINF = req.body.safe.insuranceINF;
  const safenumINF = req.body.safe.SafenumINF;
  const insuranceTOT = req.body.safe.insuranceTOT;
  const insuranceCoin = req.body.safe.insuranceCoin;
  // Variáveis Tickets
  const ticketsName = req.body.safe.ticketsName;
  const ticketsADT = req.body.safe.ticketsADT;
  const ticketnumADT = req.body.safe.TicketnumADT;
  const ticketsCHD = req.body.safe.ticketsCHD;
  const ticketnumCHD = req.body.safe.TicketnumCHD;
  const ticketsINF = req.body.safe.ticketsINF;
  const ticketnumINF = req.body.safe.TicketnumINF;
  const ticketsTOT = req.body.safe.ticketsTOT;
  const ticketsCoin = req.body.safe.ticketsCoin;
  // Variáveis Outros
  const otherName = req.body.safe.otherName;
  const otherADT = req.body.safe.otherADT;
  const othernumADT = req.body.safe.OthernumADT;
  const otherCHD = req.body.safe.otherCHD;
  const othernumCHD = req.body.safe.OthernumCHD;
  const otherINF = req.body.safe.otherINF;
  const othernumINF = req.body.safe.OthernumINF;
  const otherTOT = req.body.safe.otherTOT;
  const otherCoin = req.body.safe.otherCoin;


  const sendable_saves = {
    // Variáveis seguros
    insuranceName: [String],
    insuranceCoverage: [String],
    insuranceADT: [Number],
    SafenumADT: [Number],
    insuranceCHD: [Number],
    SafenumCHD: [Number],
    insuranceINF: [Number],
    SafenumINF: [Number],
    insuranceTOT: [Number],
    insuranceCoin: [String],

    // Variáveis tickets
    ticketsName: [String],
    ticketsADT: [Number],
    TicketnumADT: [Number],
    ticketsCHD: [Number],
    TicketnumCHD: [Number],
    ticketsINF: [Number],
    TicketnumINF: [Number],
    ticketsTOT: [Number],
    ticketsCoin: [String],

    // Variáveis outros
    otherName: [String],
    otherADT: [Number],
    OthernumADT: [Number],
    otherCHD: [String],
    OthernumCHD: [Number],
    otherINF: [Number],
    OthernumINF: [Number],
    otherTOT: [Number],
    otherCoin: [String],
  };


  // Bloco dos Seguros
  var i = 0;//Variável pra organizar informação salva dos seguros
  var j = 0;//variável pra contar número de blocos de seguros a serem apagados na página
  for (var x1 = 0; x1 < safe.deletingSafes.length; x1++) {
    if (safe.deletingSafes[x1] == 1) {
      j++;
    }
  }//Checa se é pra apagar tudo que tem na página

  if (safe.deletingSafes.length == 1 && safe.deletingSafes[i] != 1) {
    sendable_saves.insuranceName[i] = insuranceName;
    sendable_saves.insuranceCoverage[i] = insuranceCoverage;
    sendable_saves.insuranceADT[i] = insuranceADT;
    sendable_saves.SafenumADT[i] = safenumADT;
    sendable_saves.insuranceCHD[i] = insuranceCHD;
    sendable_saves.SafenumCHD[i] = safenumCHD;
    sendable_saves.insuranceINF[i] = insuranceINF;
    sendable_saves.SafenumINF[i] = safenumINF;
    sendable_saves.insuranceTOT[i] = insuranceTOT;
    sendable_saves.insuranceCoin[i] = insuranceCoin;
  }//Trata o caso de ter somente um bloco na página e que não deve ser apagado

  else if(safe.deletingSafes.length == j){
    sendable_saves.insuranceName[i] = '';
    sendable_saves.insuranceCoverage[i] = '';
    sendable_saves.insuranceADT[i] = 0;
    sendable_saves.SafenumADT[i] = 0;
    sendable_saves.insuranceCHD[i] = 0;
    sendable_saves.SafenumCHD[i] = 0;
    sendable_saves.insuranceINF[i] = 0;
    sendable_saves.SafenumINF[i] = 0;
    sendable_saves.insuranceTOT[i] = 0;
    sendable_saves.insuranceCoin[i] = 'Moeda';
  }//Trata o caso de ter que apagar tudo na página

  else {
    for (var x2 = 0; x2 < safe.deletingSafes.length; x2++) {
      if (safe.deletingSafes[x2] != 1) {
        sendable_saves.insuranceName[i] = insuranceName[x2];
        sendable_saves.insuranceCoverage[i] = insuranceCoverage[x2];
        sendable_saves.insuranceADT[i] = insuranceADT[x2];
        sendable_saves.SafenumADT[i] = safenumADT[x2];
        sendable_saves.insuranceCHD[i] = insuranceCHD[x2];
        sendable_saves.SafenumCHD[i] = safenumCHD[x2];
        sendable_saves.insuranceINF[i] = insuranceINF[x2];
        sendable_saves.SafenumINF[i] = safenumINF[x2];
        sendable_saves.insuranceTOT[i] = insuranceTOT[x2];
        sendable_saves.insuranceCoin[i] = insuranceCoin[x2];
        i++;
      }
    }
  }//Trata os demais casos



  // Bloco dos tickets
  var k = 0;//Variável pra organizar informação salva dos tickets
  var l = 0;//variável pra contar número de blocos de tickets a serem apagados na página
  for (var y1 = 0; y1 < safe.deletingTickets.length; y1++) {
    if (safe.deletingTickets[y1] == 1) {
      l++;
    }
  }//Checa se é pra apagar tudo que tem na página

  if (safe.deletingTickets.length == 1 && safe.deletingTickets[k] != 1) {
    sendable_saves.ticketsName[k] = ticketsName;
    sendable_saves.ticketsADT[k] = ticketsADT;
    sendable_saves.TicketnumADT[k] = ticketnumADT;
    sendable_saves.ticketsCHD[k] = ticketsCHD;
    sendable_saves.TicketnumCHD[k] = ticketnumCHD;
    sendable_saves.ticketsINF[k] = ticketsINF;
    sendable_saves.TicketnumINF[k] = ticketnumINF;
    sendable_saves.ticketsTOT[k] = ticketsTOT;
    sendable_saves.ticketsCoin[k] = ticketsCoin;
  }//Trata o caso de ter somente um bloco na página e que não deve ser apagado

  else if(safe.deletingTickets.length == l){
    sendable_saves.ticketsName[k] = '';
    sendable_saves.ticketsADT[k] = 0;
    sendable_saves.TicketnumADT[k] = 0;
    sendable_saves.ticketsCHD[k] = 0;
    sendable_saves.TicketnumCHD[k] = 0;
    sendable_saves.ticketsINF[k] = 0;
    sendable_saves.TicketnumINF[k] = 0;
    sendable_saves.ticketsTOT[k] = 0;
    sendable_saves.ticketsCoin[k] = 'Moeda';
  }//Trata o caso de ter que apagar tudo na página

  else {
    for (var y2 = 0; y2 < safe.deletingTickets.length; y2++) {
      if (safe.deletingTickets[y2] != 1) {
        sendable_saves.ticketsName[k] = ticketsName[y2];
        sendable_saves.ticketsADT[k] = ticketsADT[y2];
        sendable_saves.TicketnumADT[k] = ticketnumADT[y2];
        sendable_saves.ticketsCHD[k] = ticketsCHD[y2];
        sendable_saves.TicketnumCHD[k] = ticketnumCHD[y2];
        sendable_saves.ticketsINF[k] = ticketsINF[y2];
        sendable_saves.TicketnumINF[k] = ticketnumINF[y2];
        sendable_saves.ticketsTOT[k] = ticketsTOT[y2];
        sendable_saves.ticketsCoin[k] = ticketsCoin[y2];
        k++;
      }
    }
  }//Trata os demais casos



  // Bloco dos outros
  var m = 0;//Variável pra organizar informação salva dos outros
  var n = 0;//variável pra contar número de blocos de outros a serem apagados na página
  for (var z1 = 0; z1 < safe.deletingOthers.length; z1++) {
    if (safe.deletingOthers[z1] == 1) {
      n++;
    }
  }//Checa se é pra apagar tudo que tem na página

  if (safe.deletingOthers.length == 1 && safe.deletingOthers[m] != 1) {
    sendable_saves.otherName[m] = otherName;
    sendable_saves.otherADT[m] = otherADT;
    sendable_saves.OthernumADT[m] = othernumADT;
    sendable_saves.otherCHD[m] = otherCHD;
    sendable_saves.OthernumCHD[m] = othernumCHD;
    sendable_saves.otherINF[m] = otherINF;
    sendable_saves.OthernumINF[m] = othernumINF;
    sendable_saves.otherTOT[m] = otherTOT;
    sendable_saves.otherCoin[m] = otherCoin;
  }//Trata o caso de ter somente um bloco na página e que não deve ser apagado

  else if(safe.deletingOthers.length == n){
    sendable_saves.otherName[m] = '';
    sendable_saves.otherADT[m] = 0;
    sendable_saves.OthernumADT[m] = 0;
    sendable_saves.otherCHD[m] = 0;
    sendable_saves.OthernumCHD[m] = 0;
    sendable_saves.otherINF[m] = 0;
    sendable_saves.OthernumINF[m] = 0;
    sendable_saves.otherTOT[m] = 0;
    sendable_saves.otherCoin[m] = 'Moeda';
  }//Trata o caso de ter que apagar tudo na página

  else {
    for (var z2 = 0; z2 < safe.deletingOthers.length; z2++) {
      if (safe.deletingOthers[z2] != 1) {
        sendable_saves.otherName[m] = otherName[z2];
        sendable_saves.otherADT[m] = otherADT[z2];
        sendable_saves.OthernumADT[m] = othernumADT[z2];
        sendable_saves.otherCHD[m] = otherCHD[z2];
        sendable_saves.OthernumCHD[m] = othernumCHD[z2];
        sendable_saves.otherINF[m] = otherINF[z2];
        sendable_saves.OthernumINF[m] = othernumINF[z2];
        sendable_saves.otherTOT[m] = otherTOT[z2];
        sendable_saves.otherCoin[m] = otherCoin[z2];
        m++;
      }
    }
  }//Trata os demais casos

  Budget.getById(budget_id).then((budget) => {
    Safe.update(budget.safes, sendable_saves).then(() => {
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

// Post PagePersonal
router.post('/PagePersonal/:budget_id',(req, res) => {
  const budget_id = req.params.budget_id;
  Budget.getById(budget_id).then((budget) => {
    const return_page_personal = budget.client;
    Flight.delete(budget.flights).then(() => {
      Hotel.delete(budget.hotels).then(() => {
        Car.delete(budget.cars).then(() => {
          Safe.delete(budget.safes).then(() => {
            Budget.delete(budget_id).then(() => {
              res.redirect(`${return_page_personal}`);
              // res.render(`registred/PagePersonal/${return_page_personal}`, {title: 'Personal', layout: 'layoutDashboard',...req.session});
            }).catch((error) => {
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
      }).catch((error) => {
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


module.exports = router;
