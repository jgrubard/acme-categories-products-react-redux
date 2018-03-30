const router = require('express').Router();
const db = require('../db')
const { Product, Category } = db.models;

module.exports = router;

router.get('/', (req, res, next) => {
  Category.findAll({
    include: {
      model: Product,
      as: 'products'
    }
  })
    .then(categories => res.send(categories))
    .catch(next);
})

router.post('/', (req, res, next) => {
  Category.create(req.body)
    .then(category => res.send(category))
    .catch(next)
})
