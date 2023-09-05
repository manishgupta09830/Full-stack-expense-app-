const Expense = require("../Model/Expense");
const User = require("../Model/User");
const sequelize = require("../util/database");
exports.getUserLeaderBoard = async (req, res, next) => {
  try { const leaderBoardOfUsers = await User.findAll({ order : [["totalExpenses", "DESC"]],});
    res.status(200).json(leaderBoardOfUsers);
  } catch (err) {console.log(err);
    res.status(500).json(err);
  }
};