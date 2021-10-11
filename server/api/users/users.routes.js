


var express = require('express');
var router = express.Router();
const usersController = require('./users.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// Register a new product 
// /api/products/product POST API
router.post('/user', usersController.addUser);

router.get('/users', usersController.getAllUsers);

router.get('/user/:id', usersController.getUserById);

router.put('/user', usersController.updateUser);

router.delete('/user/:id', usersController.deleteUserById);

module.exports = router;


// api
// api/products --> get all products  ---
// api/products --> (post) add more than 1 product at once
// api/products/product (post)  --> will generate id
// api/products/product/:id (get)   ---
// api/products/product/:name (get)    ---
// api/products/product/:id (PUT)
// api/products/product/:id (DELETE)   ---

// api/users
// api/users/user (post)  --> will generate id   ---
// api/users/user/:id (get)      ---
// api/users/user/:id (PUT)
// api/users/user/:id (DELETE)      ---