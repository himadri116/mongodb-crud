const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

router.get('/', async (req, res) => {
  res.json(await Department.find());
});

router.post('/', async (req, res) => {
  res.json(await Department.create(req.body));
});

module.exports = router;