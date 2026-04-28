const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://mongo_db:27017/university_db')
  .then(() => console.log("✅ MongoDB Connected"));

app.use('/api/departments', require('./routes/departments'));
app.use('/api/students', require('./routes/students'));
app.use('/api/courses', require('./routes/courses'));

app.get('/', (req, res) => {
  res.send("University API Running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});