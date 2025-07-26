const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const { getProducts } = require('../controllers/products');

const products = require('./admin').products;

const router = express.Router();

router.get('/', getProducts);

module.exports = router;
