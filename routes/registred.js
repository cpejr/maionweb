var express = require('express');
var router = express.Router();
const Client = require('../models/client');
const Flight = require('../models/flight');
const Hotel = require('../models/hotel');
const Budget = require('../models/budget');
const Car = require('../models/car');
const Safe = require('../models/safe');

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
      };

      budget._id = budgets[i]._id;
      budget.codFile = budgets[i].codFile;
      budget.planDate = budgets[i].planDate[0];
      budget.finalized = budgets[i].finalized;

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
        birthDateChildren: Date,
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
      };

      companionsInfo.companionFullname = client.companionFullname[j];
      companionsInfo.companionEmail = client.companionEmail[j];
      companionsInfo.companionCellphone = client.companionCellphone[j];
      companionsInfo.companionPassport = client.companionPassport[j];
      companionsInfo.companionPassportValidation = client.companionPassportValidation[j];
      companionsInfo.repNum = (j+1);

      companions++;

      allCompanions.push(companionsInfo);
    }

    clientInfoToFunctions.family = family;
    clientInfoToFunctions.companions = companions;
    console.log('-------');
    console.log(client.children.length);
    console.log(client.companionFullname.length);
    console.log(client);

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

              planDate: Date,
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
            var age_id1 = 1;
            var age_id2 = 2;
            var age_id3 = 3;
            var result = 1;

            for (var i = 0; i < flights.escalas.length; i++) {
              // console.log("loop rodando yeeeet");
              // console.log(testando.vetor[i]);


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
            dateTo: String,
            timeTo: String,
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
          carsTrasladoInfo.dateTo = car.dateTo[i];
          carsTrasladoInfo.timeTo = car.timeTo[i];
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
    Flight.delete(budget.flights).then(() => {
      Hotel.delete(budget.hotels).then(() => {
        Car.delete(budget.cars).then(() => {
          Safe.delete(budget.safes).then(() => {
            Budget.delete(budget_id).then(() => {
              res.render(`dashboard`, {title: 'Personal', layout: 'layoutDashboard',...req.session});
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
