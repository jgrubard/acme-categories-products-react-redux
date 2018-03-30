const router = require('express').Router();
const db = require('../db')
const { Product, Category } = db.models;

module.exports = router;

router.get('/', (req, res, next) => {
  Category.findAll()
    .then(categories => res.send(categories))
    .catch(next);
})

