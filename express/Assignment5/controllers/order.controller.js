const OrderModel = require("../models/order.models");

const addOrder = async (req, res, next) => {
  const { _productId, _customerId, paidAmount, orderStatus, orderNumber } = req.body;
  const { message, data } = await OrderModel.createOrder(req.body);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const findAllOrders = async (req, res, next) => {
  const { message, data } = await OrderModel.getAllOrders();
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const findASingelOrder = async (req, res, next) => {
  const { orderId } = req.params;
  const { message, data } = await OrderModel.getAOrderById(orderId);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const updateOrder = async (req, res, next) => {
  const { orderId } = req.params;
  const updateObj = req.body;
  const { message, data } = await OrderModel.update(orderId, updateObj);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const deleteOrder = async(req, res, next) => {
  const { orderId } = req.params;
  const { message, data } = await OrderModel.delSingleOrder(orderId);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const updateManyOrder = async(req, res, next) => {
const products = req.body;
  const {message, data} = await OrderModel.changeMany(products);
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
const deleteManyOrder = async(req, res, next) => {
  const products = req.body;
   const {message, data} = await OrderModel.delMany(products);
    return res.status(201).json({
      message: message,
      data: data,
    });
    };
module.exports = {
    addOrder,
    findAllOrders,
    findASingelOrder,
    updateOrder,
    deleteOrder,
    updateManyOrder,
    deleteManyOrder,
};