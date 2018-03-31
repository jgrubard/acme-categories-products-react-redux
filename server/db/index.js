const { _conn, Sequelize } = require('./conn');
const Product = require('./models/Product');
const Category = require('./models/Category');
const faker = require('faker');

Product.belongsTo(Category, { as: 'category' });
Category.hasMany(Product, { as: 'products', foreignKey: 'categoryId' })

const sync = () => {
  return _conn.sync({ force: true });
}

const seed = () => {
  return Promise.all([
    Category.create({ name: `Category-${Math.round(Math.random()*999)}`}),
    Category.create({ name: `Category-${Math.round(Math.random()*999)}`}),
    Category.create({ name: `Category-${Math.round(Math.random()*999)}`}),
    Product.create({ name: faker.commerce.productName()}),
    Product.create({ name: faker.commerce.productName()}),
    Product.create({ name: faker.commerce.productName()}),
    Product.create({ name: faker.commerce.productName()}),
    Product.create({ name: faker.commerce.productName()}),
    Product.create({ name: faker.commerce.productName()})
  ])
  .then(([ catergoryA, catergoryB, catergoryC, product1, product2, product3, product4, product5, product6, ]) => {
    return Promise.all([
      product1.setCategory(catergoryA),
      product2.setCategory(catergoryA),
      product3.setCategory(catergoryB),
      product4.setCategory(catergoryB),
      product5.setCategory(catergoryC),
      product6.setCategory(catergoryC),
    ])
  })
}

module.exports = {
  sync,
  seed,
  models: {
    Product,
    Category
  }
}
