// my-node-react-app/backend/src/services/productService.js
class ProductService {
    constructor() {
        this.products = [
            { id: 1, name: 'Product 1', price: 10.0 },
            { id: 2, name: 'Product 2', price: 20.0 },
            { id: 3, name: 'Product 3', price: 30.0 },
        ];
    }

    getAllProducts() {
        return this.products;
    }

    generateUniqueId() {
        return Math.random().toString(36).substr(2, 8);
    }
}

module.exports = new ProductService();