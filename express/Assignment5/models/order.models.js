const { default: mongoose } = require("mongoose");
const Order = require("../schemas/order.schema");

const createOrder = async (requestBodyData) => {
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    _productId: requestBodyData._productId,
    _customerId: requestBodyData._customerId,
    paidAmount: requestBodyData.paidAmount,
    orderStatus: requestBodyData.orderStatus,
    orderNumber: requestBodyData.orderNumber,
  });
  const createdOrder = await order.save();
  return {
    message: "SUCCESS",
    data: createdOrder,
  };
};

var aggregation = [
  {
    '$lookup': {
      'from': 'products', 
      'localField': '_productId', 
      'foreignField': '_id', 
      'as': 'product'
    }
  }, {
    '$lookup': {
      'from': 'users', 
      'localField': '_customerId', 
      'foreignField': '_id', 
      'as': 'user'
    }
  }, {
    '$project': {
      'product.productName': 1, 
      'product.productPrice': 1, 
      'user.firstName': 1, 
      'user.email': 1, 
      'user.phoneNumber': 1
    }
  }
];
const getAllOrders = async () => {
  const orders = await Order.aggregate(aggregation);
  return {
    message: "SUCCESS",
    data: orders,
  };
};

const getAOrderById = async (orderId) => {
  const pro = await Order.findOne({ _id: orderId });
  return {
    message: "SUCCESS",
    data: pro,
  };
};

const update = async (orderId, updateObj) => {
  const updatedOrder = await Order.findByIdAndUpdate(orderId, updateObj , {
    new: true
  });
  return {
    message: "SUCCESS",
    data: updatedOrder,
  };
};

const delSingleOrder = async(orderId) =>{
  const delOrder = await Order.findByIdAndDelete(orderId)
  return {
    message: "Order DELETED",
    data: delOrder,
  };
};

const changeMany = async(order) => {
  const updateManyorders = await Order.updateMany( {name: /^n/ },order)
  return{
    message: "SUCCESS",
    data: updateManyorders,
  }
};
const delMany = async(order) => {
  const deleteManyOrders = await Order.deleteMany( {name: /^r/ }, order)
  return{
    message: "SUCCESS",
    data: deleteManyOrders,
  }
};

module.exports = {
    createOrder,
    getAllOrders,
    getAOrderById,
    update,
    delSingleOrder,
    changeMany,
    delMany,  
};