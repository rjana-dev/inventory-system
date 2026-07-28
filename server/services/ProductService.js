const ProductRepository = require("../repositories/ProductRepository");

class ProductService{

    //create Product
    async createProduct(productData) {
        const {sku, costPrice, price } = productData;

        if (sku) {
            const existing = await ProductRepository.findBySKU(sku);
            if (existing) {
                const error = new Error(`SKU "${sku}" already in use`);
                error.statusCode = 403;
                throw error;
            }

        }

        if (Number(price) <= Number(costPrice)) {
            const error = new Error("Selling price must be higher than cost price");
            error.statusCode = 400;
            throw error;
        }

       
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