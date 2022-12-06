const Patient = require('../models/patients')

const createPatient = async patient => {
  try {
    const newPatient = new Patient(patient)

    return await newPatient.save()
  } catch (error) {
    throw error
  }
}
const getPatientById = async patientId => {
  try {
    const patient = await Patient.findById(patientId).lean()

    return patient
  } catch (error) {
    throw error
  }
}
const updatePatient = async ({ patientId, dataToUpdate }) => {
  try {
    const patientUpdated = await Patient.findByIdAndUpdate(patientId, dataToUpdate, {
      new: true
    })

    return patientUpdated
  } catch (error) {
    throw error
  }
}
const deletePatient = async ({patientId})=>{
    try {
        const patientdeleted = await Patient.findByIdAndDelete(patientId)
        return patientdeleted
    } catch (error) {
        throw error
    }
}


module.exports = { createPatient, getPatientById, updatePatient, deletePatient}