const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
    },
    firstName: { type: String ,require: true },
    lastName: { type: String, require: true },
    age: { type: Number },
    phoneNumber: { type: Number },
    cnic: {type: Number, unique: true},
    disease:{type: String, require:true},
    address:{type:String}
  },
  {
    collection: 'patients',
    timestamps: true
  }
)

module.exports = mongoose.model('Patient', patientSchema)
