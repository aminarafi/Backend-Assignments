const express = require("express");

const routes = express.Router();
const { listStudents, getStudent, addStudent, updateStudent , deleteStudent} = require('../student.controller')


/**
 * list all users
 */
 routes.get('/', (req, res) => {
    const students = listStudents()
  
    res.send(students)
  })
  
  /**
 * get a user with id
 * @param stdId
 */
routes.get('/:stdId', (req, res) => {
    const { stdId } = req.params
  
    const student = getStudent(stdId)
  
    res.send(student)
  })

  routes.get('/', (req, res) => {
  const students = listStudents()

  res.send(students)
})

/**
 * Add a user to DB
 */
 routes.post('/', (req, res) => {
    const student = req.body
  
    const message = addStudent(student)
  
    res.send(message)
  })

  /**
 * update an existing user
 */
   routes.put('/:stdId',(req, res) => {
    let id = req.params.stdId
   const student = req.body
   const message = updateStudent(student, id)
   res.send(message)
 })


 /**
 * delete a user
 */
  routes.delete('/:stdId',(req, res) => {
    const { stdId } = req.params

    const student = deleteStudent(stdId)
  
    res.send(student)
})


  module.exports = routes;