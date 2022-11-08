const express = require("express");
const router = express.Router();

// const { listUsers, getUser, addUser } = require("../services");
const orderController = require("../controllers/order.controller");

router.post("/createOrder", orderController.addOrder);

router.get("/findAll", orderController.findAllOrders);

router.get("/findASingleOrder/:prodId", orderController.findASingelOrder);

router.patch("/update/:prodId", orderController.updateOrder);

router.delete("/delete/:prodId" , orderController.deleteOrder);

router.patch("/updateMany", orderController.updateManyOrder);

router.delete("/deleteMany", orderController.deleteManyOrder);

module.exports = router;