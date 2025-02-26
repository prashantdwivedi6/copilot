// my-node-react-app/backend/src/controllers/productController.js
const productService = require('../services/productService');

class ProductController {
    async getProducts(req, res) {
        const products = productService.getAllProducts();
        res.json(products);
    }
}

module.exports = new ProductController();