const express = require('express');
const Car = require('../models/car.js');

const router = express.Router();
const auth = require('./middleware/auth');

/**
 * GET Index - Show all Cars
 */
router.get('/',/* auth.isAuthenticated,*/ (req, res) => {
  Car.getAll().then((cars) => {
    // res.render('cars/index', { title: 'Cars', cars });
  }).catch((err) => {
    console.log(err);
  });
});

/**
 * GET New - Show form to create new car
 */
router.get('/new',/* auth.isAuthenticated,*/ (req, res) => {
  res.render('car/new', { title: 'Novo Carro' });
});

/**
 * POST Create - Add new car to DB
 */
router.post('/', (req, res) => {
  const { car } = req.body;
  console.log(car);
  Car.create(car).then((id) => {
    console.log(`Created new car with id: ${id}`);
    // res.redirect(`/car/${id}`);
  }).catch((err) => {
    console.log(err);
    res.redirect('/cars');
  });
});

/**
 * GET Show - Show details of a car
 */
router.get('/:id',/* auth.isAuthenticated,*/ (req, res) => {
  Car.getById(req.params.id).then((car) => {
    if (car) {
      console.log(car);
      res.render('car/show', { title: car.name, id: req.params.id, ...car });
    }
    else {
      console.log('Car not found!');
      res.redirect('/car');
    }
  }).catch((err) => {
    console.log(err);
    res.redirect('/');
  });
});

/**
 * GET Edit - Show the car edit form
 */
router.get('/:id/edit',/* auth.isAuthenticated,*/ (req, res) => {
  Car.getById(req.params.id).then((car) => {
    if (car) {
      console.log(car);
      res.render('car/edit', { title: `Editar ${car.name}`, id: req.params.id, ...car });
    }
    else {
      console.log('Car not found!');
      res.redirect('/');
    }
  }).catch((err) => {
    console.log(err);
    res.redirect('/');
  });
});

/**
 * PUT Update - Update a car in the database
 */
router.put('/:id', (req, res) => {
  const { car } = req.body;
  Car.update(req.params.id, car).catch((err) => {
    console.log(err);
  });
  res.redirect(`/car/${req.params.id}`);
});

/**
 * DELETE Destroy - Removes a car from the databse
 */
router.delete('/:id', (req, res) => {
  Car.delete(req.params.id).catch((err) => {
    console.log(err);
  });
  res.redirect('/car');
});

module.exports = router;
