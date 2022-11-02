const fs = require('fs')

let students = fs.readFileSync('./data/students.json', 'utf-8')
let teachers = fs.readFileSync('./data/teacher.json', 'utf-8')

students = JSON.parse(students)
teachers = JSON.parse(teachers)
const listStudentsId = () => {
    const stdId = students.map(s =>s.id);
    console.log("Student ids",stdId)
    fs.writeFileSync('./data/classroom.json', JSON.stringify(stdId), 'utf-8')
    return "Get Student ids"

  }
  const getTeacherId = tchId => {
    tchId = Number(tchId)
    tchId = teachers.find(tch => tch.id === tchId)
    fs.writeFileSync('./data/classroom.json', JSON.stringify(tchId), 'utf-8')
    
    console.log("Teacher ids", tchId)
   return "Found Teacher id "
}

module.exports = {
    listStudentsId: listStudentsId,
    getTeacherId: getTeacherId
}