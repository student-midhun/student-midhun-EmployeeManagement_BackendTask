const { Employee, Department } = require("../models");

exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: [
        { model: Department, attributes: ["name"] },
        {
          model: Employee,
          as: "manager",
          attributes: ["first_name", "last_name"],
        },
      ],
    });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.findByPk(req.params.id, {
    include: ["manager", Department],
  });

  if (!employee) return res.status(404).json({ message: "Not found" });

  res.json(employee);
};

exports.updateEmployee = async (req, res) => {
  await Employee.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ message: "Updated" });
};

exports.deleteEmployee = async (req, res) => {
  const id = req.params.id;

  await Employee.update(
    { manager_id: null },
    { where: { manager_id: id } }
  );

  await Employee.destroy({ where: { id } });

  res.json({ message: "Deleted" });
};
