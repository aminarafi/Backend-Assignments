const express = require("express");
const router = express.Router();

// const { listUsers, getUser, addUser } = require("../services");
const userController = require("../controllers/users.controller");

router.post("/createUser", userController.addUser);

router.get("/findAll", userController.findAllUsers);

router.get("/findASingleUser/:userId", userController.findASingelUser);

router.patch("/update/:userId", userController.updateUser);

router.delete("/delete/:userId" , userController.deleteUser);

router.patch("/updateMany", userController.updateManyUsers);

router.delete("/deleteMany", userController.deleteManyUsers);

module.exports = router;