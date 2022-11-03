const fs = require('fs')

let students = fs.readFileSync('./data/students.json', 'utf-8')
let teachers = fs.readFileSync('./data/teacher.json', 'utf-8')
let classroom = fs.readFileSync('./data/classroom.json' , 'utf-8')

students = JSON.parse(students)
teachers = JSON.parse(teachers)
classroom = JSON.parse(classroom)

  const stdId = students.map(s =>s.id);
  const getTeacherId = tchId => {
    tchId = Number(tchId)
    const teacher = teachers.find(tch => tch.id === tchId)
    if(tchId!==null){
      const obj = {teacher:teacher.id, student:stdId}
      classroom.push(obj)
    fs.writeFileSync('./data/classroom.json', JSON.stringify(classroom), 'utf-8')
    
    console.log("Teacher ids", tchId)
   return "Found Teacher id "}
   else{
    return "error"
   }

}

module.exports = {
    getTeacherId: getTeacherId
}