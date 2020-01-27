const express = require('express');
const router = express.Router();

router.get('/layout', (req, res) => {
  res.render('index.hbs', { title: 'layout', layout: 'index' });
});


//pagian de nova funcionario cadastrado
router.get('/novocadastro', (req, res) => {
  res.render('novocadastro', { title: 'Novo Cadastro', layout: 'layoutDashboard.hbs' });

});


module.exports = router;
