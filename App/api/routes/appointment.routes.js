const express = require('express')

const router = express.Router()

const AppointmentController = require('../controllers/appointments.controllers')

const checkAuth = require('../middlewares/checkAuth')

const { authorizeTo } = require('../middlewares/authorization')
const { validateData } = require('../middlewares/validate-data')

const { SYSTEM_ROLES_ENUM } = require('../../config/constants')
const appointmentSchema = require('../validations/appointment.validation-schema')

router.post(
  '/schedule',
  checkAuth,
  authorizeTo(SYSTEM_ROLES_ENUM.ASSISTANT),
  validateData(appointmentSchema, 'body'),
  AppointmentController.scheduleAppointment
)

router.patch(
  '/:appointmentId',
  checkAuth,
  authorizeTo(SYSTEM_ROLES_ENUM.ASSISTANT, SYSTEM_ROLES_ENUM.MD),
  AppointmentController.updateAppointment
)
router.delete(
  '/:appointmentId',
  checkAuth,
  authorizeTo(SYSTEM_ROLES_ENUM.ASSISTANT, SYSTEM_ROLES_ENUM.MD),
  AppointmentController.deleteAppointment
)

module.exports = router

