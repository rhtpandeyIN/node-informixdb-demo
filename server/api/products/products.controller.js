const ProductsService = require('./products.services');
const OneDBService = require('../../config/onedb');

var connection = require("../../config/connectionString");
const connStr = connection.connectionString;

module.exports.getProductById = (req, res, next) => {
    console.log("Controller : Get Product : " + JSON.stringify(req.params.id));
    const product_id = req.params.id;

    OneDBService.connectDB(connStr, function (err, dbConn) {
        if (err) {
            return res.status(400).json({ success: false,
                status: 400,
                message: "Unable to connect with database", error : err });
        }
        else {
            ProductsService.getProductById(product_id, dbConn, function (err, output) {
                if (err) {
                    return res.status(400).json({ success: false,
                        status: 400,
                        message: "Unable to get product from database", error : err });
                }
                if (!output) {
                    return res.status(400).json({ success: false,
                    status: 400, msg: 'Bad Request' });
                }
                else {
                    return res.status(200).json({
                        success : true,
                        status : 200,
                        data: output
                    });
                }
            });
        }
    });
};

module.exports.addProduct = (req, res, next) => {
    console.log("Controller : Add Product : " + JSON.stringify(req.body));
    const data = req.body;

    OneDBService.connectDB(connStr, function (err, dbConn) {
        if (err) {
            return res.status(400).json({ success: false,
                status: 400,
                message: "Unable to connect with database", error : err });
        }
        else {
            ProductsService.createProduct(data, dbConn, function (err, output) {
                if (err) {
                    return res.status(400).json({ success: false,
                        status: 400,
                        message: "Unable to add product into database", error : err });
                }
                if (!output) {
                    return res.status(400).json({ success: false,
                    status: 400, msg: 'Bad Request' });
                }
                else {
                    return res.status(200).json({
                        success : true,
                        status : 200,
                        message: "Product addedd successfully!"
                    });
                }
            });
        }
    });
};