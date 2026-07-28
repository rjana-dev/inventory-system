const ProductService = require("../services/ProductService");

class ProductController {
    
    //create product
    async createProduct(req, res) {
        try {
            const product = await ProductService.createProduct(req.body);

            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    }

    //get all products
    async getAllProducts(req, res) {
        try {
            const products = await ProductService.getAllProducts();

            res.json(products);
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    }

    //get product by id
    async getProductById(req, res) {
        try {
            const product = await ProductService.getProductById(req.params.id);

            if (!product) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            res.json(product);
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    }

    //update product
    async updateProduct(req, res) {
        try {

            const updatedProduct =
                await ProductService.updateProduct(
                    req.params.id,
                    req.body
                );

            res.json(updatedProduct);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });

        }
    }

    //delete product
    async deleteProduct(req, res) {
        try {

            await ProductService.deleteProduct(req.params.id);

            res.json({
                message: "Product Deletion Successful"
            });

        } catch (error) {

            res.status(500).json({
                error: error.message
            });

        }
    }
}

module.exports = new ProductController();