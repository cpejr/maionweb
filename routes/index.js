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

// Tabela budget
router.get('/table_budget',  (req, res) => {
    var dadosPuxados = []; 
  Client.getAll().then((clients) =>{
    let cont = 0;
    clients.forEach((client)=>{
        Budget.getByIdArray(client.budgets).then((manyBudgets)=>{
            dadosPuxados.push({dados_client: client , dados_manyBudgets: manyBudgets});
            console.log(client.fullname);
            cont ++;
            if(cont === clients.length){
                res.render('table_budget', { title: 'Tabela de viagens', layout: 'layout', information: dadosPuxados});
            }
        });  
    });
      
  });
});


router.get('/table', (req, res)=>{
    Client.getAll().then((clientes)=>{
    const tamClient =clientes.length;

    //console.log(tamClient);
    var viagens = [];
    var voos = [];
    var hoteis;
    var carros;
    var seguros;
    for(var i=0; i<tamClient; i++){
        console.log(clientes[i].budgets.length);
        var tamBudget = clientes[i].budgets.length;

        for(var j=0; j<tamBudget; j++){
          Budget.getById(clientes[i].budgets[j]).then((budget)=>{
            viagens.push(budget);
            const flights = budget.flights;
            const hotels = budget.hotels;
            const cars = budget.cars;
            const safes = budget.safes;
            Flight.getById(flights).then((flight) =>{
                  voos.push(flight);


             }).catch((error) => {
                console.log(error);
                res.redirect('/error');
            });
                Hotel.getById(hotels).then((hotel) =>{

             }).catch((error) => {
                console.log(error);
                res.redirect('/error');
            });
                Car.getById(cars).then((car) =>{

             }).catch((error) => {
                console.log(error);
                res.redirect('/error');
            });
                Safe.getById(safes).then((safe) =>{

             }).catch((error) => {
                console.log(error);
                res.redirect('/error');
            });

        }).catch((error) => {
            console.log(error);
            res.redirect('/error');
        });

        }

    }
    console.log(viagens);
    res.render('table',{clientes, viagens, ...req.session,  title: 'Tabela de Clientes', layout: 'layout'});
  }).catch((error) => {
   console.log(error);
   res.redirect('/error');
  });

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
