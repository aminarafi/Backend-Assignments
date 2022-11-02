const express = require('express')
const PORT = 9000
// requiring services

const app = express()
const studentRouter = require('./router/student.router')
const teacherRouter = require('./router/teacher.router')
const classRouter = require("./router/classroom.router")
// body parser
app.use(express.json({ extended: false }))

app.use('/students' , studentRouter)
app.use('/teachers' , teacherRouter)
app.use('/classroom' , classRouter)
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})