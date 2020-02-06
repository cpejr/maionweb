const express = require('express');
const router = express.Router();
const auth = require('./middleware/auth');

router.get('/layout',/* auth.isAuthenticated,*/ (req, res) => {
  res.render('index.hbs', { title: 'layout', layout: 'index' });
});


//pagian de nova funcionario cadastrado
router.get('/novocadastro',/* auth.isAuthenticated,*/ (req, res) => {
  res.render('novocadastro', { title: 'Novo Cadastro', layout: 'layoutDashboard.hbs' });

});


module.exports = router;
