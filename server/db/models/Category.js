const { Sequelize, _conn } = require('../conn');

const Category = _conn.define('category', {
  name: Sequelize.STRING
}, {
  timestamps: false
})

module.exports = Category;
