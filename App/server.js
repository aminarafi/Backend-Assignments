

require('dotenv').config()
const express = require('express');

const PORT = 8999;
const http = require('http')
const { connectDB } = require('./config/dbConnect')

// importing routers
const UserRoutes = require('./api/routes/user.routes')
const TwilioRoutes = require('./api/routes/twilio.route')
const AppointmentRoutes = require('./api/routes/appointment.routes')
const Patientrouter = require('./api/routes/patient.route')
const AnalyticsRoutes = require('./api/routes/analytics.routes')
const app = express()

connectDB()
//frontend form available
app.use(express.urlencoded({ extended: false }))
//
app.use(express.json())

app.use('/users', UserRoutes)
app.use('/twilio' , TwilioRoutes)
app.use('/appointments', AppointmentRoutes)
app.use('/patient' , Patientrouter)
app.use('/analytics', AnalyticsRoutes)
const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
