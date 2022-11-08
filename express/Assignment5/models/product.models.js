const { default: mongoose } = require("mongoose");
const Product = require("../schemas/product.schema");

const createProduct = async (requestBodyData) => {
  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    productName: requestBodyData.productName,
    productPrice: requestBodyData.productPrice,
    productQuantity: requestBodyData.productQuantity,
    productNumber: requestBodyData.productNumber,
    productUploadBy: requestBodyData.productUploadBy,
  });
  const createdProduct = await product.save();
  return {
    message: "SUCCESS",
    data: createdProduct,
  };
};

const getAllProducts = async () => {
  const products = await Product.find();
  return {
    message: "SUCCESS",
    data: products,
  };
};

const getAProductById = async (prodId) => {
  const pro = await Product.findOne({ _id: prodId });
  return {
    message: "SUCCESS",
    data: pro,
  };
};

const update = async (prodId, updateObj) => {
  const updatedProduct = await Product.findByIdAndUpdate(prodId, updateObj , {
    new: true
  });
  return {
    message: "SUCCESS",
    data: updatedProduct,
  };
};

const delSingleProduct = async(prodId) =>{
  const delProduct = await Product.findByIdAndDelete(prodId)
  return {
    message: "Product DELETED",
    data: delProduct,
  };
};

const changeMany = async(product) => {
  const updateManyproducts = await Product.updateMany( {name: /^n/ },product)
  return{
    message: "SUCCESS",
    data: updateManyproducts,
  }
};
const delMany = async(product) => {
  const deleteManyProducts = await Product.deleteMany( {name: /^r/ }, product)
  return{
    message: "SUCCESS",
    data: deleteManyProducts,
  }
};

module.exports = {
    createProduct,
    getAllProducts,
    getAProductById,
    update,
    delSingleProduct,
    changeMany,
    delMany,  
};