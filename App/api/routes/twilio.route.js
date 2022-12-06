const express = require('express')
const router = express.Router()

const TwilioController = require('../controllers/twilio.controller')

router.get('/sms-status-callback' , TwilioController.smsStatusCallBack)

module.exports = router