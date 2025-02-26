// my-node-react-app/backend/src/routes/index.js
const express = require('express');
const IndexController = require('../controllers/index');
const ProductController = require('../controllers/productController');

const setRoutes = (app) => {
    const router = express.Router();
    const indexController = new IndexController();
    const productController = new ProductController();

    router.get('/', indexController.home);
    router.get('/api/data', indexController.getData);
    router.get('/api/products', productController.getProducts); // New route for products

    app.use('/api', router);
};

module.exports = setRoutes;