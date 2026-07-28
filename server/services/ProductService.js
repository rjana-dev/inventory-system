const ProductRepository = require("../repositories/ProductRepository");

class ProductService{

    //create Product
    async createProduct(productData) {
        return await ProductRepository.create(productData);
    }

    //Get all products
    async getAllProducts() {
        return await ProductRepository.findAll();
    }

    //Get product by Id
    async getProductById(id){
        return await ProductRepository.findById(id);
    }

    //Update Product
    async updateProduct(id, productData){
        return await ProductRepository.update(id, productData);
    }

    //Delete product
    async deleteProduct(id) {
        return await ProductRepository.delete(id);
    }
}

module.exports = new ProductService();