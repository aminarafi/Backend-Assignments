const User = require('../models/user.model')

const createUser = async user => {
  try {
    const newUser = new User(user)

    return await newUser.save()
  } catch (error) {
    throw error
  }
}
const getUserById = async userId => {
  try {
    const user = await User.findById(userId)
      .select('-password')
      .lean()

    return user
  } catch (error) {
    throw error
  }
}
const getUserExistance = async ({ userEmail, userName }) => {
  try {
    const existingUser = await User.findOne({
      $or: [{ email: { $eq: userEmail } }, { userName: { $eq: userName } }]
    }).lean()

    // existingUser ? true : false

    return existingUser
  } catch (error) {
    throw error
  }
}

const updateUser = async ({ userId, dataToUpdate }) => {
  try {
    const userUpdated = await User.findByIdAndUpdate(userId, dataToUpdate, {
      new: true
      // upsert: true
    })

    return userUpdated
  } catch (error) {
    throw error
  }
}

module.exports = { createUser, getUserExistance, updateUser, getUserById}