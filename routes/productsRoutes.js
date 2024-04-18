const express = require("express");
const productsController = require("../controllers/productsController.js");

//create a router
const productRouter = express.Router();

//route it
productRouter.route("/").get(productsController.getAllProducts)
  .post(productsController.addProduct)

//export the product
module.exports = productRouter;
