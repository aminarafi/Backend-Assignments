const fs = require('fs')

let students = fs.readFileSync('./data/students.json', 'utf-8')

students = JSON.parse(students)
console.log(students)

const listStudents = () => {
  return students
}

const getStudent = stdId => {
    stdId = Number(stdId)

  return students.find(std => std.id === stdId)
}

const addStudent = std => {
  students.push(std)

  fs.writeFileSync('./data/students.json', JSON.stringify(students), 'utf-8')

  return 'SUCCESS: student added'
}

const updateStudent = (std,stdId) => {
  console.log(stdId)
  const index = students.findIndex((std) => 
    std.id ==stdId)
  
  console.log(students[index])

    if (index >= 0) {
      students[index].name=std.name
      students[index].age=std.age
      students[index].profession=std.profession
      students[index].role=std.role
        fs.writeFileSync('./data/students.json', JSON.stringify(students), 'utf-8')
        return "Success : user updated"
     
  }
    else {
      return "No Student found"
    }

 }
const deleteStudent = stdId=> {
   
  const found = students.some(std => std.id === parseInt(stdId))
  if (found){

    students = students.filter(std => std.id !== Number(stdId))

    fs.writeFileSync('./data/students.json', JSON.stringify(students), 'utf-8')

    return "Success : student deleted"
  }
  else{ 
    return "No student found!"
  }
    }  

module.exports = {
  listStudents: listStudents,
  getStudent: getStudent,
  addStudent: addStudent,
  updateStudent: updateStudent,
  deleteStudent: deleteStudent
}