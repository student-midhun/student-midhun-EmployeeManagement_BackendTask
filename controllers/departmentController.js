const { Department, Employee } = require("../models");

exports.createDepartment = async (req, res) => {
  try {
    const dept = await Department.create(req.body);
    res.status(201).json(dept);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getDepartments = async (req, res) => {
  const depts = await Department.findAll();
  res.json(depts);
};

exports.deleteDepartment = async (req, res) => {
  const id = req.params.id;

  const count = await Employee.count({
    where: { department_id: id },
  });

  if (count > 0) {
    return res
      .status(400)
      .json({ message: "Department has employees" });
  }

  await Department.destroy({ where: { id } });

  res.json({ message: "Deleted" });
};
