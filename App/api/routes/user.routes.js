const express = require('express')
const router = express.Router()

const upload = require('../middlewares/multer')

const UserController = require('../controllers/user.controller')

const checkAuth = require('../middlewares/checkAuth')
const { authorizeTo } = require('../middlewares/authorization')

const { SYSTEM_ROLES_ENUM } = require('../../config/constants')

router.post('/create',
checkAuth,
authorizeTo(SYSTEM_ROLES_ENUM.SYS_ADMIN),
UserController.signup)

router.post('/login', UserController.login)

router.post('/verify-OTP/:userId', UserController.verifyOTP)

router.patch('/update/:userId',
 checkAuth, 
 authorizeTo(SYSTEM_ROLES_ENUM.SYS_ADMIN),
 UserController.updateUser)

router.get('/logout', checkAuth , UserController.logout)

router.patch(
  '/:userId/profileImage',
  checkAuth,
  upload.single('avatar'),
  UserController.uploadProfileImage
)

module.exports = router