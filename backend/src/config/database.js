const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pyme_logistica', 'root', 'rootpassword', {
  host: 'db',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
