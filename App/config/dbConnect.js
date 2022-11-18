const mongoose = require('mongoose')
const { dbURI } = require('./userConfig')

const connectDB = () => {
  mongoose
    .connect(dbURI)
    .then(() => console.log('DB connected...'))
    .catch(err => console.log(err))
}

module.exports = { connectDB }
