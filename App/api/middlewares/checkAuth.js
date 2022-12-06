const JWT = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config/userConfig')

const UserService = require('../services/user.services')

module.exports = async (req, res, next) => {
  try {
    let token = req.headers['authorization']
    if (!token) {
      return res.status(401).json({
        message: 'Invalid Token!'
      })
    }

    token = token.split(' ')[1]

    const decoded = JWT.verify(token, JWT_SECRET)


    const userFound = await UserService.getUserById(decoded._id)

    // || userFound._id.toString() !== userId

    if (!userFound) {
      return res.status(401).json({
        message: "You're unauthorized to do this action"
      })
    }

    // unique key check
    if (!userFound?.uniqueKeys.includes(decoded.uniqueKey)) {
      return res.status(401).json({
        message: 'Session ended!'
      })
    }

    req.user = userFound
    console.log(userFound)

    next()
  } catch (error) {
    console.log(error)

    res.status(500).json({
      error: 'INTERNAL SERVER ERROR'
    })
  }
}