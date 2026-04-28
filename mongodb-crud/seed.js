const mongoose = require('mongoose');
const Department = require('./models/Department');
const Student = require('./models/Student');
const Course = require('./models/Course');

mongoose.connect('mongodb://localhost:27017/university_db');

async function seed() {
  await Department.deleteMany();
  await Student.deleteMany();
  await Course.deleteMany();

  const cs = await Department.create({ name: "Computer Science", building: "A Block" });
  const mech = await Department.create({ name: "Mechanical", building: "B Block" });

  const math = await Course.create({ name: "Mathematics", credits: 4 });
  const ai = await Course.create({ name: "AI", credits: 3 });

  await Student.create({
    name: "Himadri",
    age: 21,
    department: cs._id,
    courses: [math._id, ai._id]
  });

  console.log("🌱 Seeded!");
  process.exit();
}

seed();