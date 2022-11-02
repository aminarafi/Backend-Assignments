const fs = require('fs')

let teachers = fs.readFileSync('./data/teacher.json', 'utf-8')

teachers = JSON.parse(teachers)
console.log(teachers)

const listTeachers = () => {
  return teachers
}

const getTeacher = tchId => {
    tchId = Number(tchId)

  return teachers.find(tch => tch.id === tchId)
}

const addTeacher = tch => {
  teachers.push(tch)

  fs.writeFileSync('./data/teacher.json', JSON.stringify(teachers), 'utf-8')

  return 'SUCCESS: Teacher added'
}

const updateTeacher = (tch,tchId) => {
  console.log(tchId)
  const index = teachers.findIndex((tch) => 
    tch.id ==tchId)
  
  console.log(teachers[index])

    if (index >= 0) {
      teachers[index].name=tch.name
      teachers[index].age=tch.age
      teachers[index].profession=tch.profession
      teachers[index].role=tch.role
        fs.writeFileSync('./data/teacher.json', JSON.stringify(teachers), 'utf-8')
        return "Success : Teacher updated"
     
  }
    else {
      return "No Teacher found"
    }

 }
const deleteTeacher = tchId=> {

    teachers = teachers.filter(tch => tch.id !== Number(tchId))

    fs.writeFileSync('./data/teacher.json', JSON.stringify(teachers), 'utf-8')

    return "Success : Teacher deleted"
    
    }  
module.exports = {
   listTeachers: listTeachers,
  getTeacher: getTeacher,
  addTeacher: addTeacher,
  updateTeacher: updateTeacher,
  deleteTeacher: deleteTeacher
}