const express = require("express");
const router = express.Router();

// const { listUsers, getUser, addUser } = require("../services");
const productController = require("../controllers/product.controller");

router.post("/createProduct", productController.addProduct);

router.get("/findAll", productController.findAllProducts);

router.get("/findASingleProduct/:prodId", productController.findASingelProduct);

router.patch("/update/:prodId", productController.updateProduct);

router.delete("/delete/:prodId" , productController.deleteProduct);

router.patch("/updateMany", productController.updateManyProduct);

router.delete("/deleteMany", productController.deleteManyProduct);

module.exports = router;