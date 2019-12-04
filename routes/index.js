const express = require('express');
const firebase = require('firebase');
//const User = require('../models/user');
const auth = require('./middleware/auth');
const Client = require ('../models/client');
const User = require('../models/user');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'Login', layout: 'layout' });
});

/* GET login page. */
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login', layout: 'layout' });
});

/* GET dashboard Admin page. */
router.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'homeadmin', layout: 'layout' });
});

/* GET dashboard Comum page. */
router.get('/dashboardCom', (req, res) => {
  res.render('dashboardCom', { title: 'home', layout: 'layout' });
});

/* GET signup page. */
router.get('/signup', (req, res) => {
  res.render('form', { title: 'signup', layout: 'layout' });
});

/* GET forgot password page. */
router.get('/forgot', (req, res) => {
  res.render('forgot', { title: 'Esqueci minha senha', layout: 'layout' });
});

/*Get da cadastro de novo usuario*/
router.get('/newuser', (req, res)=>{
  res.render('novocadastro',{title: 'Cadastro de novo usuário', layout: 'layout'});
});

// GET Logout Request
router.get('/logout', (req,res) => {
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
   console.log(error);
   res.redirect('/error');
  });
});


// GET /logout
router.get('/logout', (req, res, next) => {
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
