const UserModel = require("../models/users.models");

const addUser = async (req, res, next) => {
  const { name, age, email, address,state, phoneNumber,cardNumber,cardIssueDate , cardExpiryDate } = req.body;
  const { message, data } = await UserModel.createUser(req.body);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const findAllUsers = async (req, res, next) => {
  const { message, data } = await UserModel.getAllUsers();
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const findASingelUser = async (req, res, next) => {
  const { userId } = req.params;
  const { message, data } = await UserModel.getAUserById(userId);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const updateUser = async (req, res, next) => {
  const { userId } = req.params;
  const updateObj = req.body;
  const { message, data } = await UserModel.update(userId, updateObj);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const deleteUser = async(req, res, next) => {
  const { userId } = req.params;
  const { message, data } = await UserModel.delSingleUser(userId);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const updateManyUsers = async(req, res, next) => {
const users = req.body;
  const {message, data} = await UserModel.changeMany(users);
  res.matchedCount; // Number of documents matched
  res.modifiedCount; // Number of documents modified
  res.acknowledged; // Boolean indicating everything went smoothly.
  res.upsertedId; // null or an id containing a document that had to be upserted.
  res.upsertedCount; // Number indicating how many documents had to be upserted. Will either be 0 or 1.
  return res.status(201).json({
    message: message,
    data: data,
  });
  };
const deleteManyUsers = async(req, res, next) => {
  const users = req.body;
   const {message, data} = await UserModel.delMany(users);
    return res.status(201).json({
      message: message,
      data: data,
    });
    };
module.exports = {
  addUser,
  findAllUsers,
  findASingelUser,
  updateUser,
  deleteUser,
  updateManyUsers,
  deleteManyUsers,
};