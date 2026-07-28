const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

//create Product
router.post("/", ProductController.createProduct);

//get all Products
router.get("/", ProductController.getAllProducts);

//get Product By ID
router.get("/:id", ProductController.getProductById);

//update Product
router.put("/:id", ProductController.updateProduct);

//delete Product
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;