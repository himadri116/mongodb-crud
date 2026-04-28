const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/', async (req, res) => {
  const data = await Student.find()
    .populate('department')
    .populate('courses');
  res.json(data);
});

router.post('/', async (req, res) => {
  res.json(await Student.create(req.body));
});

module.exports = router;