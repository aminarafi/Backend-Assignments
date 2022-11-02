const express = require("express");

const router = express.Router();

const { listStudentsId, getTeacherId, addStudent, updateStudent , deleteStudent} = require('../classroom.controller')

router.get('/', (req, res) => {
    const students = listStudentsId()
  
    res.send(students)
  })
  router.get('/:teacherId', (req, res) => {
    const { teacherId } = req.params
  
    const teacher = getTeacherId(teacherId)
    res.send(teacher)
  })
  module.exports = router;