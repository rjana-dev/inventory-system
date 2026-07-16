const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

//Create Product
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Read Product
router.get("/", async (req, res) => {
    try {
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

//Update Product
router.put("/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

//Delete Product
router.delete("/:id", async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.json({message : "Product Deletion Successful"});
    } catch (error){
        res.status(500).json({ error: error.message});
    }
});


module.exports = router;