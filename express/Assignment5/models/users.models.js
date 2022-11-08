const { default: mongoose } = require("mongoose");
const User = require("../schemas/users.schema");

const createUser = async (requestBodyData) => {
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    firstName: requestBodyData.firstName,
    lastName: requestBodyData.lastName,
    email: requestBodyData.email,
    phoneNumber:requestBodyData.phoneNumber,
    city: requestBodyData.city,
    state: requestBodyData.state,
    zipCode: requestBodyData.zipCode,
    status : requestBodyData.status,
    userType: requestBodyData.userType,
    payment: requestBodyData.payment,
  });

  const createdUser = await user.save();
  return {
    message: "SUCCESS",
    data: createdUser,
  };
};

const getAllUsers = async () => {
  const users = await User.aggregate([{
    $match: {
     status: 'active'
    }
   }]);
  return {
    message: "SUCCESS",
    data: users,
  };
};

const getAUserById = async (userId) => {
  const user = await User.findOne({ _id: userId });
  return {
    message: "SUCCESS",
    data: user,
  };
};

const update = async (userId, updateObj) => {
  const updatedUser = await User.findByIdAndUpdate(userId, updateObj , {
    new: true
  });
  return {
    message: "SUCCESS",
    data: updatedUser,
  };
};

const delSingleUser = async(userId) =>{
  const delUser = await User.findByIdAndDelete(userId)
  return {
    message: "USER DELETED",
    data: delUser,
  };
};

const changeMany = async(users) => {
  const updateManyUsers = await User.updateMany( {name: /^n/ },users)
  return{
    message: "SUCCESS",
    data: updateManyUsers,
  }
};
const delMany = async(users) => {
  const deleteManyUsers = await User.deleteMany( {name: /^r/ }, users)
  return{
    message: "SUCCESS",
    data: deleteManyUsers,
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getAUserById,
  update,
  delSingleUser,
  changeMany,
  delMany,  
};