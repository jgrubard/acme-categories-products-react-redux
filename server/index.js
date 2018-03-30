const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const { Product, Category } = db.models;

app.use('/public', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// app.use('/api/products', require('./api/products'));
// app.use(require('./api/categories'));

app.get('/api/products', (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next);
})

app.get('/api/categories', (req, res, next) => {
  Category.findAll()
    .then(categories => res.send(categories))
    .catch(next);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`** Listening on Port ${port} **`);
});

db.sync()
  .then(() => {
    db.seed();
  })


