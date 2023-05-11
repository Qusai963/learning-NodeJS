const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

const adminData = require('./admin')

router.get('/', (req, res, next) => {
   console.log(adminData.products);
    res.render('shop', {prods: adminData.products, pageTitle: 'shop', path: '/'});
  });

  module.exports = router;