const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const products = require('./admin').products;

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
  });
});

module.exports = router;
