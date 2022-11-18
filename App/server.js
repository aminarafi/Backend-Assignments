const express = require('express');

const PORT = 8999;
const http = require('http')
const { connectDB } = require('./config/dbConnect')

// importing routers
const UserRoutes = require('./api/routes/user.routes')
const app = express()

connectDB()
//frontend form available
app.use(express.urlencoded({ extended: false }))
//
app.use(express.json())

app.use('/users', UserRoutes)

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
