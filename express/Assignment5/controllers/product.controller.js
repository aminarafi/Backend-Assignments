const ProductModel = require("../models/product.models");

const addProduct = async (req, res, next) => {
  const { productName, productPrice, productQuantity, productNumber,productUploadBy } = req.body;
  const { message, data } = await ProductModel.createProduct(req.body);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const findAllProducts = async (req, res, next) => {
  const { message, data } = await ProductModel.getAllProducts();
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const findASingelProduct = async (req, res, next) => {
  const { prodId } = req.params;
  const { message, data } = await ProductModel.getAProductById(prodId);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const updateProduct = async (req, res, next) => {
  const { prodId } = req.params;
  const updateObj = req.body;
  const { message, data } = await ProductModel.update(prodId, updateObj);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const deleteProduct = async(req, res, next) => {
  const { prodId } = req.params;
  const { message, data } = await ProductModel.delSingleProduct(prodId);
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const updateManyProduct = async(req, res, next) => {
const products = req.body;
  const {message, data} = await ProductModel.changeMany(products);
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
const deleteManyProduct = async(req, res, next) => {
  const products = req.body;
   const {message, data} = await ProductModel.delMany(products);
    return res.status(201).json({
      message: message,
      data: data,
    });
    };
module.exports = {
    addProduct,
    findAllProducts,
    findASingelProduct,
    updateProduct,
    deleteProduct,
    updateManyProduct,
    deleteManyProduct,
};