const patientService = require('../services/patients.services')

const createPatient = async (req, res) => {
  try {
    const patient = req.body

    const newPatient = await patientService.createPatient(
      patient
    )

    res.status(201).json({
      message: 'SUCCESS: Patient Added',
      newPatient
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      error: 'Internal Server Error'
    })
  }
}

const updatePatient = async (req, res) => {
  try {

    const { patientId } = req.params

    const updatedPatient = await patientService.updatePatient({
      patientId,
      dataToUpdate:  req.body 
    })

    res.status(200).json({
      updatedPatient
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      error: 'Internal Server Error'
    })
  }
}
const deletePatient = async(req, res, next) => {
    try {
        const { patientId } = req.params;
    const deletedPatient = await patientService.deletePatient({patientId}); 

    res.status(200).json({
        message: `SUCCESS: patient deleted ${deletedPatient}`
      })
    } catch (error)  {
        console.log(error)
    
        res.status(500).json({
          error: 'Internal Server Error'
        })
      }
   

  }

module.exports = { createPatient, updatePatient, deletePatient }
