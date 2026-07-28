const Product = require("../models/Product");

class ProductRepository {

    //create Product
    async create(productData) {
        const product = new Product(productData);
        return await product.save();
    }

    //Get all Products
    async findAll() {
        return await Product.find();
    }

    //Get Product By ID
    async findById(id) {
        return await Product.findById(id);
    }

    //Update Product
    async update(id, productData) {
        return await Product.findByIdAndUpdate(
            id,
            productData,
            { new: true,
                runValidators: true,
            }
        );
    }

    //delete Product
    async delete(id) {
        return await Product.findByIdAndDelete(id);
    }

}

module.exports = new ProductRepository();