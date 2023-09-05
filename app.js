const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(helmet());
app.use(morgan());
const sequelize = require("./util/database");
console.log(sequelize);
const UserRouter = require("./Routes/UserRoutes");
const ExpenseRouter = require("./Routes/ExpenseRoute");
const PurchaseRouter = require("./Routes/PurchaseRouter");
const PremiumRouter = require("./Routes/PremiumUser");
const ForgetPasswordRouter = require("./Routes/ForgotRoute");
const User = require("./Model/User");
const Expense = require("./Model/Expense");
const Order = require("./Model/Purchase");
const ForgetPassword = require("./Model/Forget");
const DownloadedFiles = require("./Model/Download");
User.hasMany(Expense);
Expense.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User);
User.hasMany(ForgetPassword);
ForgetPassword.belongsTo(User);
User.hasMany(DownloadedFiles);
DownloadedFiles.belongsTo(User);
app.use(bodyParser.json({ extended: true }));
app.use("/user", UserRouter);
app.use("/expense", ExpenseRouter);
app.use("/purchase", PurchaseRouter);
app.use("/preminum", PremiumRouter);
 app.use("/password", ForgetPasswordRouter);
sequelize
  .sync()
  .then((res) => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });