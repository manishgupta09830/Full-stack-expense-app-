const Sequelize = require('sequelize');

const sequelize = new Sequelize('avi_expense', 'root', 'Manish@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
