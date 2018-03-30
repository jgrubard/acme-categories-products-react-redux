const app = require('express').Router();

module.exports = app;

app.get('/api/categories', (req, res, next) => {
  Category.findAll()
    .then(categories => res.send(categories))
    .catch(next);
})
