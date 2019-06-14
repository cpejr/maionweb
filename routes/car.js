const express = require('express');
const Car = require('../models/car.js');

const router = express.Router();

/**
 * GET Index - Show all Products
 */
router.get('/', (req, res) => {
  Car.getAll().then((cars) => {
    console.log(cars);
    res.send('oi');
    // res.render('cars/index', { title: 'Cars', cars });
  }).catch((err) => {
    console.log(err);
  });
});

/**
 * GET New - Show form to create new product
 */
router.get('/new', (req, res) => {
  res.render('products/new', { title: 'New Product' });
});

/**
 * POST Create - Add new product to DB
 */
router.post('/', (req, res) => {
  const { car } = req.body;
  console.log(car);
  Car.create(car).then((id) => {
    console.log(`Created new car with id: ${id}`);
    res.send('deu certo essa porra');
    // res.redirect(`/cars/${id}`);
  }).catch((err) => {
    console.log(err);
    res.redirect('/cars');
  });
});

/**
 * GET Show - Show details of a product
 */
router.get('/:id', (req, res) => {
  Product.getById(req.params.id).then((product) => {
    if (product) {
      console.log(product);
      res.render('products/show', { title: product.name, id: req.params.id, ...product });
    }
    else {
      console.log('Product not found!');
      res.redirect('/products');
    }
  }).catch((err) => {
    console.log(err);
    res.redirect('/products');
  });
});

/**
 * GET Edit - Show the product edit form
 */
router.get('/:id/edit', (req, res) => {
  Product.getById(req.params.id).then((product) => {
    if (product) {
      console.log(product);
      res.render('products/edit', { title: `Edit ${product.name}`, id: req.params.id, ...product });
    }
    else {
      console.log('Product not found!');
      res.redirect('/');
    }
  }).catch((err) => {
    console.log(err);
    res.redirect('/products');
  });
});

/**
 * PUT Update - Update a product in the database
 */
router.put('/:id', (req, res) => {
  const { product } = req.body;
  Product.update(req.params.id, product).catch((err) => {
    console.log(err);
  });
  res.redirect(`/products/${req.params.id}`);
});

/**
 * DELETE Destroy - Removes a product from the databse
 */
router.delete('/:id', (req, res) => {
  Product.delete(req.params.id).catch((err) => {
    console.log(err);
  });
  res.redirect('/products');
});

module.exports = router;
