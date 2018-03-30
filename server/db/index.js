const { _conn, Sequelize } = require('./conn');
const Product = require('./models/Product')
const Category = require('./models/Category')

const sync = () => {
  return _conn.sync({ force: true });
}

const seed = () => {
  return Promise.all([
    Product.create({ name: 'Product 1'}),
    Product.create({ name: 'Product 2'}),
    Product.create({ name: 'Product 3'}),
    Product.create({ name: 'Product 4'}),
    Product.create({ name: 'Product 5'}),
    Product.create({ name: 'Product 6'}),
    Category.create({ name: 'Category A'}),
    Category.create({ name: 'Category B'}),
    Category.create({ name: 'Category C'}),
  ])
  // .then(([ catergoryA, catergoryB, catergoryC, product1, product2, product3, product4, product5, product6, ]) => {

  // })
}

module.exports = {
  sync,
  seed,
  models: {
    Product,
    Category
  }
}
