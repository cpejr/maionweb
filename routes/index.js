const express = require('express');
const firebase = require('firebase');
//const User = require('../models/user');
const auth = require('./middleware/auth');
const Client = require ('../models/client');
const User = require('../models/user');
const Budget = require('../models/budget');
const Flight = require('../models/flight');
const Hotel = require('../models/hotel');
const Safe = require('../models/safe');
const Car = require('../models/car');

var router = express.Router();


/* GET home page. */
router.get('/',  function(req, res) {
  res.render('login', { title: 'Login', layout: 'layout' });
});

/* GET login page. */
router.get('/login',  (req, res) => {
  res.render('login', { title: 'Login', layout: 'layout' });
});

/* GET dashboard Admin page. */
router.get('/dashboard', auth.isAuthenticated, (req, res) => {
    console.log(req.session.userType);
    res.render('dashboard', { title: 'homeadmin', layout: 'layout', ...req.session});
});

/* GET dashboard Comum page. */
router.get('/dashboardCom', auth.isAuthenticated, (req, res) => {
  res.render('dashboardCom', { title: 'home', layout: 'layout' });
});

/* GET signup page. */
router.get('/signup', /*auth.isAuthenticated,*/ (req, res) => {
  res.render('form', { title: 'signup', layout: 'layout' });
});

/* GET forgot password page. */
router.get('/forgot',  (req, res) => {
  res.render('forgot', { title: 'Esqueci minha senha', layout: 'layout' });
});

// Tabela
router.post('/table',  (req, res) => {
    let month1 = req.body.info.monthMin;
    let year1 = req.body.info.yearMin;
    let month2 = req.body.info.monthMax;
    let year2 = req.body.info.yearMax;
    let register = req.body.info.register;

    let dadosPuxados = [];
    Budget.getAll().then((budgets)=>{
        const tratarDataVetor = (vetorData) =>{
            for(let i = 0; i < vetorData.length; i ++){
              if(vetorData[i] && vetorData[i].length === 10){
              const date = ' '+ vetorData[i][8]+vetorData[i][9]+'/'+vetorData[i][5]+vetorData[i][6]+'/'+vetorData[i][0]+vetorData[i][1]+vetorData[i][2]+vetorData[i][3];
              vetorData[i] = date;
            }
          }
          return vetorData;
        }
        const tratarData = (data) =>{
          if(data && data.length === 10){
              const newData = ' '+ data[8]+data[9]+'/'+data[5]+data[6]+'/'+data[0]+data[1]+data[2]+data[3];
              data = newData;
          }
          return data;
        }
        const getMes = (data) =>{
          if(data && data.length === 10){
            const mes = data[5]+data[6];
            const mesInt = parseInt(mes);
            return mesInt;
          }
          else{
            return undefined;
          }
        }
        const getAno = (data) =>{
          if(data && data.length === 10){
            const ano = data[0]+data[1]+data[2]+data[3];
            const anoInt = parseInt(ano);
            return anoInt;
          }
          else{
            return undefined;
          }
        }
        const tratarValorVazio = (valor) =>{
          if(!valor){
            valor = '-';
          }
          else if(!valor.length){
            valor = '-';
          }
          else if(valor === 'Selecione: Estado Civil' || valor === 'Selecione: Estado' || valor === 'Selecione: Funil Vendas'
          || valor === 'Selecione: Budget Mínimo' || valor === 'Classe Avião:' || valor === 'Preferêcia Assento:'){
            valor = '-';
          }
          else {
            for(let i = 0; i < valor.length; i ++){
              if(!valor[i] || valor[i] === 'Moeda' || valor[i] === 'Moeda:' || valor[i] === 'Selecione qual moeda'
              || valor[i] === 'Selecione qual moeda:' || valor[i] === 'Regime de Alimentação' || valor[i] === 'Prazo de Cancelamento'){

                valor[i] = '-';
            }
          }
        }
        return valor;
        }

      let cont = 0;
      if(!year1 && !year2){
        Client.getAll().then((clients)=>{
            clients.forEach((cliente) => {
            if(cliente.budgets.length === 0 && ((register && cliente.register === register) || !register)){

              cliente.birthDate = tratarData(cliente.birthDate);
              cliente.passportValidation = tratarData(cliente.passportValidation);
              cliente.wedding_anniversary = tratarData(cliente.wedding_anniversary);
              cliente.birthDateSpouse = tratarData(cliente.birthDateSpouse);
              cliente.spousePassportValidation = tratarData(cliente.spousePassportValidation);
              cliente.birthDateChildren = tratarDataVetor(cliente.birthDateChildren);
              cliente.childrenPassportValidation = tratarDataVetor(cliente.childrenPassportValidation);
              cliente.birthDateCompanion = tratarDataVetor(cliente.birthDateCompanion);
              cliente.companionPassportValidation = tratarDataVetor(cliente.companionPassportValidation);

              cliente.maritalStatus = tratarValorVazio(cliente.maritalStatus);
              cliente.state = tratarValorVazio(cliente.state);
              cliente.funil = tratarValorVazio(cliente.funil);
              cliente.average_Budget = tratarValorVazio(cliente.average_Budget);
              cliente.plane_class = tratarValorVazio(cliente.plane_class);
              cliente.plane_seat_pref = tratarValorVazio(cliente.plane_seat_pref);
              cliente.id = tratarValorVazio(cliente.id);
              cliente.phone = tratarValorVazio(cliente.phone);
              cliente.street = tratarValorVazio(cliente.street);
              cliente.neighbourhood = tratarValorVazio(cliente.neighbourhood);
              cliente.passport = tratarValorVazio(cliente.passport);
              cliente.neighbourhood = tratarValorVazio(cliente.neighbourhood);
              cliente.passportValidation = tratarValorVazio(cliente.passportValidation);
              cliente.profession = tratarValorVazio(cliente.profession);
              cliente.maritalStatus = tratarValorVazio(cliente.maritalStatus);
              cliente.spouseName = tratarValorVazio(cliente.spouseName);
              cliente.wedding_anniversary = tratarValorVazio(cliente.wedding_anniversary);
              cliente.birthDateSpouse = tratarValorVazio(cliente.birthDateSpouse);
              cliente.spouseEmail = tratarValorVazio(cliente.spouseEmail);
              cliente.phoneFamily = tratarValorVazio(cliente.phoneFamily);
              cliente.spouseProfession = tratarValorVazio(cliente.spouseProfession);
              cliente.spousePassport = tratarValorVazio(cliente.spousePassport);
              cliente.spousePassportValidation = tratarValorVazio(cliente.spousePassportValidation);
              cliente.children = tratarValorVazio(cliente.children);
              cliente.birthDateChildren = tratarValorVazio(cliente.birthDateChildren);
              cliente.childrenPassport = tratarValorVazio(cliente.childrenPassport);
              cliente.childrenPassportValidation = tratarValorVazio(cliente.childrenPassportValidation);
              cliente.companionFullname = tratarValorVazio(cliente.companionFullname);
              cliente.birthDateCompanion = tratarValorVazio(cliente.birthDateCompanion);
              cliente.companionCellphone = tratarValorVazio(cliente.companionCellphone);
              cliente.companionEmail = tratarValorVazio(cliente.companionEmail);
              cliente.companionPassport = tratarValorVazio(cliente.companionPassport);
              cliente.companionPassportValidation = tratarValorVazio(cliente.companionPassportValidation);
              cliente.instagram = tratarValorVazio(cliente.instagram);
              cliente.facebook = tratarValorVazio(cliente.facebook);
              cliente.others = tratarValorVazio(cliente.others);
              cliente.profile_OtherNeed = tratarValorVazio(cliente.profile_OtherNeed);
              cliente.profile_OtherType = tratarValorVazio(cliente.profile_OtherType);
              cliente.profile_OtherHotel = tratarValorVazio(cliente.profile_OtherHotel);
              cliente.profile_OtherSports = tratarValorVazio(cliente.profile_OtherSports);
              cliente.profile_OtherDiet = tratarValorVazio(cliente.profile_OtherDiet);

              dadosPuxados.push({dados_client: [cliente]});
            }
          });
        })
      }
      budgets.forEach((budget)=>{
        const mes = getMes(budget.planDate[0]);
        const ano = getAno(budget.planDate[0]);

        budget.planDate = tratarDataVetor(budget.planDate);
        budget.planDate = tratarValorVazio(budget.planDate);
        budget.planCity = tratarValorVazio(budget.planCity);
        budget.planCountry = tratarValorVazio(budget.planCountry);
        budget.planFreeField = tratarValorVazio(budget.planFreeField);

        Client.getByIdArray(budget.client).then((cliente)=>{

          if((register && cliente[0].register === register) || !register){

          cliente[0].birthDate = tratarData(cliente[0].birthDate);
          cliente[0].passportValidation = tratarData(cliente[0].passportValidation);
          cliente[0].wedding_anniversary = tratarData(cliente[0].wedding_anniversary);
          cliente[0].birthDateSpouse = tratarData(cliente[0].birthDateSpouse);
          cliente[0].spousePassportValidation = tratarData(cliente[0].spousePassportValidation);
          cliente[0].birthDateChildren = tratarDataVetor(cliente[0].birthDateChildren);
          cliente[0].childrenPassportValidation = tratarDataVetor(cliente[0].childrenPassportValidation);
          cliente[0].birthDateCompanion = tratarDataVetor(cliente[0].birthDateCompanion);
          cliente[0].companionPassportValidation = tratarDataVetor(cliente[0].companionPassportValidation);

          cliente[0].maritalStatus = tratarValorVazio(cliente[0].maritalStatus);
          cliente[0].state = tratarValorVazio(cliente[0].state);
          cliente[0].funil = tratarValorVazio(cliente[0].funil);
          cliente[0].average_Budget = tratarValorVazio(cliente[0].average_Budget);
          cliente[0].plane_class = tratarValorVazio(cliente[0].plane_class);
          cliente[0].plane_seat_pref = tratarValorVazio(cliente[0].plane_seat_pref);
          cliente[0].id = tratarValorVazio(cliente[0].id);
          cliente[0].phone = tratarValorVazio(cliente[0].phone);
          cliente[0].street = tratarValorVazio(cliente[0].street);
          cliente[0].neighbourhood = tratarValorVazio(cliente[0].neighbourhood);
          cliente[0].passport = tratarValorVazio(cliente[0].passport);
          cliente[0].neighbourhood = tratarValorVazio(cliente[0].neighbourhood);
          cliente[0].passportValidation = tratarValorVazio(cliente[0].passportValidation);
          cliente[0].profession = tratarValorVazio(cliente[0].profession);
          cliente[0].maritalStatus = tratarValorVazio(cliente[0].maritalStatus);
          cliente[0].spouseName = tratarValorVazio(cliente[0].spouseName);
          cliente[0].wedding_anniversary = tratarValorVazio(cliente[0].wedding_anniversary);
          cliente[0].birthDateSpouse = tratarValorVazio(cliente[0].birthDateSpouse);
          cliente[0].spouseEmail = tratarValorVazio(cliente[0].spouseEmail);
          cliente[0].phoneFamily = tratarValorVazio(cliente[0].phoneFamily);
          cliente[0].spouseProfession = tratarValorVazio(cliente[0].spouseProfession);
          cliente[0].spousePassport = tratarValorVazio(cliente[0].spousePassport);
          cliente[0].spousePassportValidation = tratarValorVazio(cliente[0].spousePassportValidation);
          cliente[0].children = tratarValorVazio(cliente[0].children);
          cliente[0].birthDateChildren = tratarValorVazio(cliente[0].birthDateChildren);
          cliente[0].childrenPassport = tratarValorVazio(cliente[0].childrenPassport);
          cliente[0].childrenPassportValidation = tratarValorVazio(cliente[0].childrenPassportValidation);
          cliente[0].companionFullname = tratarValorVazio(cliente[0].companionFullname);
          cliente[0].birthDateCompanion = tratarValorVazio(cliente[0].birthDateCompanion);
          cliente[0].companionCellphone = tratarValorVazio(cliente[0].companionCellphone);
          cliente[0].companionEmail = tratarValorVazio(cliente[0].companionEmail);
          cliente[0].companionPassport = tratarValorVazio(cliente[0].companionPassport);
          cliente[0].companionPassportValidation = tratarValorVazio(cliente[0].companionPassportValidation);
          cliente[0].instagram = tratarValorVazio(cliente[0].instagram);
          cliente[0].facebook = tratarValorVazio(cliente[0].facebook);
          cliente[0].others = tratarValorVazio(cliente[0].others);
          cliente[0].profile_OtherNeed = tratarValorVazio(cliente[0].profile_OtherNeed);
          cliente[0].profile_OtherType = tratarValorVazio(cliente[0].profile_OtherType);
          cliente[0].profile_OtherHotel = tratarValorVazio(cliente[0].profile_OtherHotel);
          cliente[0].profile_OtherSports = tratarValorVazio(cliente[0].profile_OtherSports);
          cliente[0].profile_OtherDiet = tratarValorVazio(cliente[0].profile_OtherDiet);

        }

          Flight.getByIdArray(budget.flights).then((manyFlights)=>{

            manyFlights[0].dateFlight = tratarDataVetor(manyFlights[0].dateFlight);

            manyFlights[0].coin = tratarValorVazio(manyFlights[0].coin);
            manyFlights[0].flightNum = tratarValorVazio(manyFlights[0].flightNum);
            manyFlights[0].dateFlight = tratarValorVazio(manyFlights[0].dateFlight);
            manyFlights[0].from = tratarValorVazio(manyFlights[0].from);
            manyFlights[0].destination = tratarValorVazio(manyFlights[0].destination);
            manyFlights[0].timeOut = tratarValorVazio(manyFlights[0].timeOut);
            manyFlights[0].timeIn = tratarValorVazio(manyFlights[0].timeIn);


            Hotel.getByIdArray(budget.hotels).then((manyHotels) =>{

              manyHotels[0].coin = tratarValorVazio(manyHotels[0].coin);
              manyHotels[0].cancellationPeriod = tratarValorVazio(manyHotels[0].cancellationPeriod);
              manyHotels[0].cancellationPeriod2 = tratarValorVazio(manyHotels[0].cancellationPeriod2);
              manyHotels[0].cancellationPeriod3 = tratarValorVazio(manyHotels[0].cancellationPeriod3);
              manyHotels[0].food1 = tratarValorVazio(manyHotels[0].food1);
              manyHotels[0].food2 = tratarValorVazio(manyHotels[0].food2);
              manyHotels[0].food3 = tratarValorVazio(manyHotels[0].food3);
              manyHotels[0].city = tratarValorVazio(manyHotels[0].city);
              manyHotels[0].acomodationType1 = tratarValorVazio(manyHotels[0].acomodationType1);
              manyHotels[0].hotel1 = tratarValorVazio(manyHotels[0].hotel1);
              manyHotels[0].category1 = tratarValorVazio(manyHotels[0].category1);
              manyHotels[0].acomodationType2 = tratarValorVazio(manyHotels[0].acomodationType2);
              manyHotels[0].hotel2 = tratarValorVazio(manyHotels[0].hotel2);
              manyHotels[0].category2 = tratarValorVazio(manyHotels[0].category2);
              manyHotels[0].acomodationType3 = tratarValorVazio(manyHotels[0].acomodationType3);
              manyHotels[0].hotel3 = tratarValorVazio(manyHotels[0].hotel3);
              manyHotels[0].category3 = tratarValorVazio(manyHotels[0].category3);

              Car.getByIdArray(budget.cars).then((manyCars)=>{

                manyCars[0].dateFrom = tratarDataVetor(manyCars[0].dateFrom);

                manyCars[0].coinT = tratarValorVazio(manyCars[0].coinT);
                manyCars[0].coinC = tratarValorVazio(manyCars[0].coinC);
                manyCars[0].from = tratarValorVazio(manyCars[0].from);
                manyCars[0].to = tratarValorVazio(manyCars[0].to);
                manyCars[0].dateFrom = tratarValorVazio(manyCars[0].dateFrom);
                manyCars[0].timeFrom = tratarValorVazio(manyCars[0].timeFrom);
                manyCars[0].typeCar = tratarValorVazio(manyCars[0].typeCar);
                manyCars[0].withdrawal = tratarValorVazio(manyCars[0].withdrawal);
                manyCars[0].delivery = tratarValorVazio(manyCars[0].delivery);
                manyCars[0].totalCar = tratarValorVazio(manyCars[0].totalCar);
                manyCars[0].city = tratarValorVazio(manyCars[0].city);
                manyCars[0].shift = tratarValorVazio(manyCars[0].shift);
                manyCars[0].safe = tratarValorVazio(manyCars[0].safe);
                manyCars[0].others = tratarValorVazio(manyCars[0].others);


                Safe.getByIdArray(budget.safes).then((manySafes)=>{

                  manySafes[0].insuranceCoin = tratarValorVazio(manySafes[0].insuranceCoin);
                  manySafes[0].ticketsCoin = tratarValorVazio(manySafes[0].ticketsCoin);
                  manySafes[0].otherCoin = tratarValorVazio(manySafes[0].otherCoin);
                  manySafes[0].insuranceName = tratarValorVazio(manySafes[0].insuranceName);
                  manySafes[0].insuranceCoverage = tratarValorVazio(manySafes[0].insuranceCoverage);
                  manySafes[0].ticketsName = tratarValorVazio(manySafes[0].ticketsName);
                  manySafes[0].otherName = tratarValorVazio(manySafes[0].otherName);


                  if(year1 && year2){
                    if((ano && ano >= year1 && ano <= year2) && ((register && cliente[0].register === register) || !register)){
                      if((year1 === year2 && mes >= month1 && mes <= month2)
                        || (year1 !== year2 && ((ano == year1 && mes >= month1) || (ano == year2 && mes <= month2) || (ano != year1 && ano != year2)))){
                        dadosPuxados.push({dados_manyBudgets: budget, dados_client: cliente, dados_manyFlights:manyFlights, dados_manyHotels:manyHotels, dados_manyCars: manyCars, dados_manySafes: manySafes});
                      }
                    }
                  }
                  else if(year1 && !year2){
                    if((ano && ano >= year1) && ((register && cliente[0].register === register) || !register)){
                      if((ano == year1 && mes >= month1) || ano != year1){
                        dadosPuxados.push({dados_manyBudgets: budget, dados_client: cliente, dados_manyFlights:manyFlights, dados_manyHotels:manyHotels, dados_manyCars: manyCars, dados_manySafes: manySafes});
                      }
                    }
                  }
                  else if(!year1 && year2){
                    if((ano && ano <= year2) && ((register && cliente[0].register === register) || !register)){
                      if((ano == year2 && mes <= month2) || ano != year2){
                        dadosPuxados.push({dados_manyBudgets: budget, dados_client: cliente, dados_manyFlights:manyFlights, dados_manyHotels:manyHotels, dados_manyCars: manyCars, dados_manySafes: manySafes});
                      }
                    }
                  }
                  else if(!year1 && !year2){
                    if((register && cliente[0].register === register) || !register){
                      dadosPuxados.push({dados_manyBudgets: budget, dados_client: cliente, dados_manyFlights:manyFlights, dados_manyHotels:manyHotels, dados_manyCars: manyCars, dados_manySafes: manySafes});
                    }
                  }
                  cont ++;
                  if(cont === budgets.length){
                      res.render('table2', { title: 'Tabela de viagens', layout: 'layout', information: dadosPuxados});
                  }
                });
              });
            });
          });

        });


      });
    });
});

router.get('/tableGenerator', auth.isAuthenticated, (req, res)=>{
 res.render('tableGenerator',{title: 'Gerar Tabela', layout: 'layout', ...req.session});
});

/*Get da cadastro de novo usuario*/
router.get('/newuser', /*auth.isAuthenticated, auth.isAdmin,*/ (req, res)=>{
 res.render('novocadastro',{title: 'Cadastro de novo usuário', layout: 'layout'});
});

// GET Logout Request
router.get('/logout', auth.isAuthenticated, (req,res) => {
  firebase.auth().signOut().then(() => {
    delete req.session.email;
    delete req.session.userUid;
    res.redirect('/login');
  }).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});

// POST LOGIN
router.post('/login', (req,res) => {
  const userData  = req.body.user;
  firebase.auth().signInWithEmailAndPassword(userData.email, userData.password).then((currentLogged) => {
    User.getByUid(currentLogged.user.uid).then((userMongo)=> {
      if (currentLogged) {
        req.session.userUid = currentLogged.user.uid;
        req.session.email = currentLogged.user.email;
        req.session.userType = userMongo.userType;

        if(userMongo.userType == 'Adm'){
          res.redirect('/dashboard');
        }
        else {
          res.redirect('/dashboardCom');
        }
      }
      else {
        console.log('User not found');
        res.redirect('/error');
      }
    }).catch((error)=>{
      console.log(error);
      res.redirect('/error');
    });
   }).catch((error) => {
       switch (error.code) {
          case 'auth/wrong-password':
            req.flash('danger', 'Senha incorreta.');
            break;
          case 'auth/user-not-found':
            req.flash('danger', 'Email não cadastrado.');
            break;
          case 'auth/network-request-failed':
            req.flash('danger', 'Falha na internet. Verifique sua conexão de rede.');
            break;
          default:
            req.flash('danger', 'Erro indefinido.');
          }
    console.log(`Error Code: ${error.code}`);
    console.log(`Error Message: ${error.message}`);
    res.redirect('/login');
   });
 });

//POST SIGNUP
  router.post('/signup', (req,res) => {
    const user = req.body.user;
    console.log(user);
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
    // Handle Errors here
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
});

//POST ESQUECI MINHA SENHA
router.post('/forgot', (req, res) => {
  const emailAddress = req.body.user;
  firebase.auth().sendPasswordResetEmail(emailAddress.email).then(function() {
    res.redirect('/login');
    req.flash('success', 'Email enviado com sucesso!');
  }).catch((error)=>{
    switch (error.code) {
       case 'auth/user-not-found':
         req.flash('danger', 'Email não cadastrado.');
         break;
       case 'auth/network-request-failed':
         req.flash('danger', 'Falha na internet. Verifique sua conexão de rede.');
         break;
       default:
         req.flash('danger', 'Erro indefinido.');
       }
   res.redirect('/forgot');
  });
});


// GET /logout
router.get('/logout',/* auth.isAuthenticated,*/ (req, res, next) => {
  firebase.auth().signOut().then(() => {
      delete req.session.fullName;
      //delete req.session.userId;
      delete req.session.email;
      res.redirect('/login');
    }).catch((error) => {
      console.log(error);
      res.redirect('/error');
    });
  });


//POST NOVO USUARIO

router.post('/newuser', (req,res,next) =>{
  const user = req.body.user;
  const user_id = req.params.user_id;

  console.log(user);
  firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((firebase) => {
    user.uid = firebase.user.uid;
    User.create(user).then((user_id)=>{
           console.log(firebase.user.uid);
            console.log(user.uid);
            console.log(firebase);
            console.log(user.email);
            console.log(user.password);
            res.redirect('/dashboard');

          }).catch(function(error) {
            console.log(error);
            res.redirect('/error');
          });

      }).catch(function(error) {
        switch (error.code) {
          case 'auth/weak-password':
            req.flash('danger', 'Senha fraca.');
            break;
          case 'auth/email-already-in-use':
            req.flash('danger', 'Email já cadastrado.');
            break;
           case 'auth/invalid-email':
             req.flash('danger', 'Email mal formatado.');
             break;
           case 'auth/network-request-failed':
             req.flash('danger', 'Falha na internet. Verifique sua conexão de rede.');
             break;
           default:
             req.flash('danger', 'Erro indefinido.');
           }
      console.log(error.code);
      res.redirect('/newuser');
  });


});



module.exports = router;
