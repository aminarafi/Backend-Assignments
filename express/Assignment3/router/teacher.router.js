const express = require("express");

const routes = express.Router();
const { listTeachers, getTeacher, addTeacher, updateTeacher , deleteTeacher} = require('../teacher.controller')


/**
 * list all users
 */
 routes.get('/', (req, res) => {
    const teachers = listTeachers()
  
    res.send(teachers)
  })
  
  /**
 * get a user with id
 * @param teacherId
 */
routes.get('/:teacherId', (req, res) => {
    const { teacherId } = req.params
  
    const teacher = getTeacher(teacherId)
  
    res.send(teacher)
  })

  routes.get('/', (req, res) => {
  const teachers = listTeachers()

  res.send(teachers)
})

/**
 * Add a user to DB
 */
 routes.post('/', (req, res) => {
    const teacher = req.body
  
    const message = addTeacher(teacher)
  
    res.send(message)
  })

  /**
 * update an existing user
 */
   routes.put('/:teacherId',(req, res) => {
    let id = req.params.teacherId
   const teacher = req.body
   const message = updateTeacher(teacher, id)
   res.send(message)
 })


 /**
 * delete a user
 */
  routes.delete('/:teacherId',(req, res) => {
    const { teacherId } = req.params

    const teacher = deleteTeacher(teacherId)
  
    res.send(teacher)
})


  module.exports = routes;