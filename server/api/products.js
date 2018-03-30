const app = require('express').Router();

module.exports = app;

app.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next);
})
