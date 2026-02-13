const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Department = require("./department");

const Employee = sequelize.define("Employee", {
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
});

Employee.belongsTo(Department, { foreignKey: "department_id" });
Employee.belongsTo(Employee, {
  as: "manager",
  foreignKey: "manager_id",
});

module.exports = Employee;
