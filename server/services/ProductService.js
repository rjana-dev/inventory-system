const ProductRepository = require("../repositories/ProductRepository");
const { productSchema } = require("../schemas/productSchema");

class ProductService{

    //create Product
    async createProduct(productData) {
        const parsed = productSchema.safeParse(productData);

        if (!parsed.success){
            const error = new Error(parsed.error.issues[0].message);
            error.statusCode = 400;
            throw error;
        }

        const { sku } = parsed.data;

        if (sku) {
            const existing = await ProductRepository.findBySKU(sku);
            if (existing) {
                const error = new Error(`SKU "${sku}" already in use`);
                error.statusCode = 403;
                throw error;
            }

        }
       
        return await ProductRepository.create(parsed.data);
        
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