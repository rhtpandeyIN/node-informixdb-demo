var express = require('express');
var router = express.Router();
const productsController = require('./products.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// Register a new product 
// /api/products/product POST API
router.post('/product', productsController.addProduct);

router.get('/products', productsController.getAllProducts);

router.put('/product/:id', productsController.updateProduct);

router.get('/product/:id', productsController.getProductById);

router.delete('/product/:id', productsController.deleteProductById);

module.exports = router;


// api
// api/products --> get all products  ---
// api/products/product (post)  --> will generate id
// api/products/product/:id (get)   ---
// api/products/product/:id (PUT)
// api/products/product/:id (DELETE)   ---

// api/users
// api/users/user (post)  --> will generate id
// api/users/user/:id (get)
// api/users/user/:id (PUT)
// api/users/user/:id (DELETE)