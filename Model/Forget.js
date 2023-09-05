const sequelize = require("sequelize");
const Sequelize = require("../util/database");

const ForgetPassword = Sequelize.define("forget", {
  id: {
    type: sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  isactive: sequelize.BOOLEAN,
});

module.exports = ForgetPassword;