const express = require('express');
const firebase = require('firebase');
const User = require('../models/user');


const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Login', layout: 'layout' });
});

router.get('/signup', (req, res) => {
  res.render('form', { title: 'signup', layout: 'layout' });
});



// POST LOGIN

router.post('/login',(req,res)=> {
   const userData  = req.body.user;
   console.log(req.body.user);
   firebase.auth().signInWithEmailAndPassword(userData.email, userData.password).then(() => {
     res.redirect('/');
    //espaço para adicionar dentro da funçao
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
  const { user } = req.body;
  console.log(user);
  firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
  // Handle Errors here
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});


// GET /logout
router.get('/logout', auth.isAuthenticated, (req, res, next) => {
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


});



module.exports = router;
