const express = require('express');
const router = express.Router();

const { Employee } = require('../models/employee');

// Get all employees

router.get('/api/employees', (req, res) => {
  Employee.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(error);
    }
  });
});

// Save employee
router.post('/api/employee/add', (req, res) => {
  const emp = new Employee({
    name: req.body.name,
    email: req.body.email,
    salary: req.body.salary,
  });
  emp.save((err, data) => {
    res.status(200).json({ code: 200, message: 'Employee added', addEmployee: data });
  });
});

// Get single employee

router.get('/api/employee/:id', (req, res) => {
  Employee.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

// Update Employee not working

router.put('/api/employee/update/:id', (req, res) => {
  const emp = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  };
  Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
    if (!err) {
      res
        .status(200)
        .json({ code: 200, message: 'Employee Updated Successfully', updateEmployee: data });
    } else {
      console.log(err);
    }
  });
});

// Delete
router.delete('/api/employee/:id', (req, res) => {
  Employee.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({ code: 200, message: 'deleted', deleteEmployee: data });
    } else {
      console.log(err);
    }
  });
});

// Delete Employee
// router.delete('/api/employee/:id', (req, res) => {
//   Employee.findByIdAndRemove(req.params.id, (err, data) => {
//     if (!err) {
//       // res.send(data);
//       res.status(200).json({ code: 200, message: 'deleted', deleteEmployee: data });
//     } else {
//       console.log(err);
//     }
//   });
// });

module.exports = router;
