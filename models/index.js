const sequelize = require("../config/db");
const Employee = require("./employee");
const Department = require("./department");

const initDB = async () => {
  await sequelize.sync({ alter: true });
  console.log("Database synced");
};

module.exports = { sequelize, Employee, Department, initDB };
