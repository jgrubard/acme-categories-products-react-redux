const router = require('express').Router();
const db = require('../db')
const { Product, Category } = db.models;

module.exports = router;

router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next);
})
