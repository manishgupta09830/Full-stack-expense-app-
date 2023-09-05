const sequelize = require("sequelize");
const Sequelize = require("../util/database");

const Expense = Sequelize.define("expenses", {
  id: {
    type: sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: sequelize.BIGINT,
  description: sequelize.STRING,
  category: sequelize.STRING,
});

module.exports = Expense;