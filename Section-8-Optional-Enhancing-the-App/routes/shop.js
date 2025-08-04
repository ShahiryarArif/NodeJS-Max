const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const { getProducts, getIndex, getCart, getCheckout } = require('../controllers/shop');

const products = require('./admin').products;

const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/cart', getCart);

router.get('/checkout', getCheckout);

module.exports = router;
