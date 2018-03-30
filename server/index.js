const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const { Product, Category } = db.models;

app.use('/public', express.static(path.join(__dirname, '../public')))

app.use(require('body-parser').json());

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use('/api', require('./api'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`** Listening on Port ${port} **`);
});

db.sync()
  .then(() => {
    db.seed();
  })
