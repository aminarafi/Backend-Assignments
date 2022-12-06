const express = require('express')

const router = express.Router()

const patientController = require('../controllers/patients.controller')

const checkAuth = require('../middlewares/checkAuth')

const { authorizeTo } = require('../middlewares/authorization')

const { SYSTEM_ROLES_ENUM } = require('../../config/constants')

router.post(
  '/create',
  checkAuth,
  authorizeTo(SYSTEM_ROLES_ENUM.ASSISTANT),
  patientController.createPatient
)

router.patch(
  '/update/:patientId',
  checkAuth,
  authorizeTo(SYSTEM_ROLES_ENUM.ASSISTANT, SYSTEM_ROLES_ENUM.MD),
  patientController.updatePatient
)
router.delete(
    '/delete/:patientId',
    checkAuth,
    authorizeTo(SYSTEM_ROLES_ENUM.ASSISTANT),
    patientController.deletePatient
)

module.exports = router
