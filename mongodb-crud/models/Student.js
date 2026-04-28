const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,

  // ONE-TO-MANY
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  },

  // MANY-TO-MANY
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

module.exports = mongoose.model('Student', studentSchema);