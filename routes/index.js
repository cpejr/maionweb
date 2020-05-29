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

// // Tabela budget
// router.get('/table_budget',  (req, res) => {
//     var dadosPuxados = [];
//     Budget.getAll().then((budgets)=>{
//       let cont = 0;
//       budgets.forEach((budget)=>{
//         Client.getByIdArray(budget.client).then((cliente)=>{
//           Flight.getByIdArray(budget.flights).then((manyFlights)=>{
//             Hotel.getByIdArray(budget.hotels).then((manyHotels) =>{
//               Car.getByIdArray(budget.cars).then((manyCars)=>{
//                 Safe.getByIdArray(budget.safes).then((manySafes)=>{
//                   dadosPuxados.push({dados_manyBudgets: budget, dados_client: cliente, dados_manyFlights:manyFlights, dados_manyHotels:manyHotels, dados_manyCars: manyCars, dados_manySafes: manySafes});
//                   cont ++;
//                   if(cont === budgets.length){
//                       res.render('table_budget', { title: 'Tabela de viagens', layout: 'layout', information: dadosPuxados});
//                   }
//                 });
//               });
//             });
//           });
//
//
//
//         });
//
//
//       });
//     });
//
//
//
//   // Client.getAll().then((clients) =>{
//   //   let contClient = 0;
//   //   clients.forEach((client)=>{
//   //       Budget.getByIdArray(client.budgets).then((manyBudgets)=>{
//   //         let contBudget = 0;
//   //         manyBudgets.forEach((budget) => {
//   //           Flight.getByIdArray(budget.flights).then((manyFlights)=>{
//   //             Hotel.getByIdArray(budget.hotels).then((manyHotels) =>{
//   //               Car.getByIdArray(budget.cars).then((manyCars)=>{
//   //                 Safe.getByIdArray(budget.safes).then((manySafes)=>{
//   //                   dadosPuxados.push({dados_client: client , dados_manyBudgets: budget, dados_manyFlights:manyFlights, dados_manyHotels:manyHotels, dados_manyCars: manyCars, dados_manySafes: manySafes});
//   //                   contBudget ++;
//   //                   if(contBudget === budget.length){
//   //                       contClient ++;
//   //                   }
//   //                 });
//   //               });
//   //             });
//   //           });
//   //           if(contClient === clients.length){
//   //               res.render('table_budget', { title: 'Tabela de viagens', layout: 'layout', information: dadosPuxados});
//   //           }
//   //         });
//   //       });
//   //   });
//   // });
// });

// Tabela budget
router.post('/table2',  (req, res) => {
    let year1 = req.body.info.yearMin;
    let year2 = req.body.info.yearMax;
    let register = req.body.info.register;

    let dadosPuxados = [];
    Budget.getAll().then((budgets)=>{
        const tratarDataVetor = (vetorData) =>{
          if(vetorData[0] && vetorData[0].length === 10){
            for(let i = 0; i < vetorData.length; i ++){
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

            Hotel.getByIdArray(budget.hotels).then((manyHotels) =>{
              Car.getByIdArray(budget.cars).then((manyCars)=>{

                manyCars[0].dateFrom = tratarDataVetor(manyCars[0].dateFrom);

                Safe.getByIdArray(budget.safes).then((manySafes)=>{

                  if((ano && ano >= year1 && ano <= year2) && ((register && cliente[0].register === register) || !register)){
                    dadosPuxados.push({dados_manyBudgets: budget, dados_client: cliente, dados_manyFlights:manyFlights, dados_manyHotels:manyHotels, dados_manyCars: manyCars, dados_manySafes: manySafes});
                  }
                  cont ++;
                  if(cont === budgets.length){
                      res.render('table2', { title: 'Tabela de viagens', layout: 'layout', information: dadosPuxados});
                  }
                });
              });
            });
          });

//}

        });


      });
    });



  // Client.getAll().then((clients) =>{
  //   const tratarDataVetor = (vetorData) =>{
  //     if(vetorData[0] && vetorData[0].length === 10 ){
  //       for(let i = 0; i < vetorData.length; i ++){
  //         const date = ' '+ vetorData[i][8]+vetorData[i][9]+'/'+vetorData[i][5]+vetorData[i][6]+'/'+vetorData[i][0]+vetorData[i][1]+vetorData[i][2]+vetorData[i][3];
  //         vetorData[i] = date;
  //       }
  //     }
  //     return vetorData;
  //   }
  //   const tratarData = (vetorData) =>{
  //     if(vetorData && vetorData.length === 10 ){
  //         const date = ' '+ vetorData[8]+vetorData[9]+'/'+vetorData[5]+vetorData[6]+'/'+vetorData[0]+vetorData[1]+vetorData[2]+vetorData[3];
  //         vetorData = date;
  //     }
  //     return vetorData;
  //   }
  //
  //
  //   let contClient = 0;
  //   clients.forEach((client)=>{
  //
  //     client.birthDate = tratarData(client.birthDate);
  //     client.passportValidation = tratarData(client.passportValidation);
  //     client.wedding_anniversary = tratarData(client.wedding_anniversary);
  //     client.birthDateSpouse = tratarData(client.birthDateSpouse);
  //     client.spousePassportValidation = tratarData(client.spousePassportValidation);
  //     client.birthDateChildren = tratarDataVetor(client.birthDateChildren);
  //     client.childrenPassportValidation = tratarDataVetor(client.childrenPassportValidation);
  //     client.birthDateCompanion = tratarDataVetor(client.birthDateCompanion);
  //     client.companionPassportValidation = tratarDataVetor(client.companionPassportValidation);
  //
  //     if(!client.budgets.length){
  //       contClient ++;
  //       dadosPuxados.push({dados_client: client , dados_Budgets: []});
  //     }
  //     else{
  //       Budget.getByIdArray(client.budgets).then((manyBudgets)=>{
  //         let contBudget = 0;
  //         let viagens = [];
  //         manyBudgets.forEach((budget) => {
  //           budget.planDate = tratarDataVetor(budget.planDate);
  //           Flight.getByIdArray(budget.flights).then((manyFlights)=>{
  //             manyFlights[0].dateFlight = tratarDataVetor(manyFlights[0].dateFlight);
  //
  //             Hotel.getByIdArray(budget.hotels).then((manyHotels) =>{
  //
  //               Car.getByIdArray(budget.cars).then((manyCars)=>{
  //                 manyCars[0].dateFrom = tratarDataVetor(manyCars[0].dateFrom);
  //
  //                 Safe.getByIdArray(budget.safes).then((manySafes)=>{
  //
  //
  //                   viagens.push({dados_manyBudgets: budget, dados_manyFlights:manyFlights, dados_manyHotels:manyHotels, dados_manyCars: manyCars, dados_manySafes: manySafes});
  //                   contBudget ++;
  //                   if(contBudget == manyBudgets.length){
  //                     contClient ++;
  //                     dadosPuxados.push({dados_client: client , dados_Budgets: viagens});
  //                   }
  //                   if(contClient === clients.length){
  //                     res.render('table2', { title: 'Tabela de viagens', layout: 'layout', information: dadosPuxados});
  //                   }
  //                 }).catch((error) => {
  //                   console.log(error);
  //                   res.redirect('/error');
  //                   });
  //               }).catch((error) => {
  //                 console.log(error);
  //                 res.redirect('/error');
  //                 });
  //             }).catch((error) => {
  //               console.log(error);
  //               res.redirect('/error');
  //               });
  //           }).catch((error) => {
  //             console.log(error);
  //             res.redirect('/error');
  //             });
  //         });
  //       }).catch((error) => {
  //         console.log(error);
  //         res.redirect('/error');
  //         });
  //     }
  //   });
  // }).catch((error) => {
  //   console.log(error);
  //   res.redirect('/error');
  //   });
});

router.get('/tableGenerator', (req, res)=>{
 res.render('tableGenerator',{title: 'Gerar Tabela', layout: 'layout'});
});


router.get('/table',  (req, res) => {
    let dadosPuxados = [];
    Budget.getAll().then((budgets)=>{
      let cont = 0;
      for(let i = 0; i < budgets.length; i++){
        Client.getByIdArray(budgets[i].client).then((cliente)=>{
          Flight.getByIdArray(budgets[i].flights).then((manyFlights)=>{
            Hotel.getByIdArray(budgets[i].hotels).then((manyHotels) =>{
              Car.getByIdArray(budgets[i].cars).then((manyCars)=>{
                Safe.getByIdArray(budgets[i].safes).then((manySafes)=>{
                  dadosPuxados.push({dados_manyBudgets: budgets[i], dados_client: cliente, dados_manyFlights:manyFlights, dados_manyHotels:manyHotels, dados_manyCars: manyCars, dados_manySafes: manySafes});
                  cont ++;
                  if(cont === budgets.length){
                    Client.getAll().then((clientes)=>{
                      res.render('table', { clientes, title: 'Tabela de viagens', layout: 'layout', information: dadosPuxados});
                    }).catch((error) => {
                        console.log(error);
                        res.redirect('/error');
                    });

                  }

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

          }).catch((error) => {
              console.log(error);
              res.redirect('/error');
          });

        }).catch((error) => {
            console.log(error);
            res.redirect('/error');
        });

      }

    }).catch((error) => {
        console.log(error);
        res.redirect('/error');
    });

});


// router.get('/table', (req, res)=>{
//     Client.getAll().then((clientes)=>{
//     const tamClient =clientes.length;
//
//     console.log(tamClient);
//     var viagens;
//     var voos = [];
//     var hoteis;
//     var carros;
//     var seguros;
//     for(var i=0; i<tamClient; i++){
//         console.log(clientes[i].budgets.length);
//         var tamBudget = clientes[i].budgets.length;
//
//         for(var j=0; j<tamBudget; j++){
//           Budget.getById(clientes[i].budgets[j]).then((budget)=>{
//             viagens = budget;
//             const flights = budget.flights;
//             const hotels = budget.hotels;
//             const cars = budget.cars;
//             const safes = budget.safes;
//             Flight.getById(flights).then((flight) =>{
//                   voos.push(flight);
//
//
//              }).catch((error) => {
//                 console.log(error);
//                 res.redirect('/error');
//             });
//                 Hotel.getById(hotels).then((hotel) =>{
//
//              }).catch((error) => {
//                 console.log(error);
//                 res.redirect('/error');
//             });
//                 Car.getById(cars).then((car) =>{
//
//              }).catch((error) => {
//                 console.log(error);
//                 res.redirect('/error');
//             });
//                 Safe.getById(safes).then((safe) =>{
//
//              }).catch((error) => {
//                 console.log(error);
//                 res.redirect('/error');
//             });
//
//         }).catch((error) => {
//             console.log(error);
//             res.redirect('/error');
//         });
//
//         }
//         console.log(viagens);
//     }
//     res.render('table',{clientes, viagens, title: 'Tabela de Clientes', layout: 'layout'});
//   }).catch((error) => {
//    console.log(error);
//    res.redirect('/error');
//   });
//
// });
//

/*Get da tabela de clientes*/
// router.get('/tabelaclientes', (req, res)=>{
// Client.getAll().then((clients)=>{
//   res.render('table',{clients, title: 'Tabela de Clientes', layout: 'layout'});
// })
//
// });

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
