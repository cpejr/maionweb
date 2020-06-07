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
    let year1 = req.body.info.yearMin;
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
        const tratarMoeda = (moeda) =>{
          for(let i = 0; i < moeda.length; i ++){
            if(!moeda[i] || moeda[i] === 'Moeda' || moeda[i] === 'Moeda:' || moeda[i] === 'Selecione qual moeda' || moeda[i] === 'Selecione qual moeda:'){
              const coin = '-';
              moeda[i] = coin;
          }
        }
        return moeda;
        }

      let cont = 0;
      budgets.forEach((budget)=>{
        const ano = getAno(budget.planDate[0]);
        budget.planDate = tratarDataVetor(budget.planDate);

        Client.getByIdArray(budget.client).then((cliente)=>{
          cliente[0].birthDate = tratarData(cliente[0].birthDate);
          cliente[0].passportValidation = tratarData(cliente[0].passportValidation);
          cliente[0].wedding_anniversary = tratarData(cliente[0].wedding_anniversary);
          cliente[0].birthDateSpouse = tratarData(cliente[0].birthDateSpouse);
          cliente[0].spousePassportValidation = tratarData(cliente[0].spousePassportValidation);
          cliente[0].birthDateChildren = tratarDataVetor(cliente[0].birthDateChildren);
          cliente[0].childrenPassportValidation = tratarDataVetor(cliente[0].childrenPassportValidation);
          cliente[0].birthDateCompanion = tratarDataVetor(cliente[0].birthDateCompanion);
          cliente[0].companionPassportValidation = tratarDataVetor(cliente[0].companionPassportValidation);

          Flight.getByIdArray(budget.flights).then((manyFlights)=>{

            manyFlights[0].dateFlight = tratarDataVetor(manyFlights[0].dateFlight);
            manyFlights[0].coin = tratarMoeda(manyFlights[0].coin);

            Hotel.getByIdArray(budget.hotels).then((manyHotels) =>{

              manyHotels[0].coin = tratarMoeda(manyHotels[0].coin);

              Car.getByIdArray(budget.cars).then((manyCars)=>{

                manyCars[0].dateFrom = tratarDataVetor(manyCars[0].dateFrom);
                manyCars[0].coinT = tratarMoeda(manyCars[0].coinT);
                manyCars[0].coinC = tratarMoeda(manyCars[0].coinC);


                Safe.getByIdArray(budget.safes).then((manySafes)=>{

                  manySafes[0].insuranceCoin = tratarMoeda(manySafes[0].insuranceCoin);
                  manySafes[0].ticketsCoin = tratarMoeda(manySafes[0].ticketsCoin);
                  manySafes[0].otherCoin = tratarMoeda(manySafes[0].otherCoin);

                  if(year1 && year2){
                    if((ano && ano >= year1 && ano <= year2) && ((register && cliente[0].register === register) || !register)){
                      dadosPuxados.push({dados_manyBudgets: budget, dados_client: cliente, dados_manyFlights:manyFlights, dados_manyHotels:manyHotels, dados_manyCars: manyCars, dados_manySafes: manySafes});
                    }
                  }
                  else if(year1 && !year2){
                    if((ano && ano >= year1) && ((register && cliente[0].register === register) || !register)){
                      dadosPuxados.push({dados_manyBudgets: budget, dados_client: cliente, dados_manyFlights:manyFlights, dados_manyHotels:manyHotels, dados_manyCars: manyCars, dados_manySafes: manySafes});
                    }
                  }
                  else if(!year1 && year2){
                    if((ano && ano <= year2) && ((register && cliente[0].register === register) || !register)){
                      dadosPuxados.push({dados_manyBudgets: budget, dados_client: cliente, dados_manyFlights:manyFlights, dados_manyHotels:manyHotels, dados_manyCars: manyCars, dados_manySafes: manySafes});
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
router.get('/newuser', auth.isAuthenticated, auth.isAdmin, (req, res)=>{
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
