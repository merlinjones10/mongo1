const mongoose = require('mongoose');

// Employee Schema

const Employee = mongoose.model('Employee', {
  name: {
    type: String,
    reuired: true,
  },
  email: {
    type: String,
    reuired: true,
  },
  salary: {
    type: String,
    reuired: true,
  },
});

module.exports = { Employee };
