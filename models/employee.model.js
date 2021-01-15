const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema({
  firstName: {type: String, required: true, minlength: 3, maxlength: 20},
  lastName: {type: String, required: true, minlength: 3, maxlength: 20},
  department: {type: String, required: true, minlength: 2, maxlength: 20, ref: 'Department'}
});

module.exports = mongoose.models.Employee || mongoose.model('Employee', employeesSchema);