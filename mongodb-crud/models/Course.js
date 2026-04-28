const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  credits: Number
});

module.exports = mongoose.model('Course', courseSchema);