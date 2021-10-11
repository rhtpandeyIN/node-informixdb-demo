


const UsersService = require('./users.services');
const OneDBService = require('../../config/onedb');

var connection = require("../../config/connectionString");
const connStr = connection.connectionString;

module.exports.addUser = (req, res, next) => {
    console.log("Controller : Add User : " + JSON.stringify(req.body));
    const data = req.body;

    OneDBService.connectDB(connStr, function (err, dbConn) {
        if (err) {
            return res.status(400).json({ success: false,
                status: 400,
                message: "Unable to connect with database", error : err });
        }
        else {
            UsersService.createUser(data, dbConn, function (err, output) {
                if (err) {
                    return res.status(400).json({ success: false,
                        status: 400,
                        message: "Unable to add user into database", error : err });
                }
                if (!output) {
                    return res.status(400).json({ success: false,
                    status: 400, msg: 'Bad Request' });
                }
                else {
                    return res.status(200).json({
                        success : true,
                        status : 200,
                        message: "User addedd successfully!"
                    });
                }
            });
        }
    });
};


module.exports.getAllUsers = (req, res, next) => {

    OneDBService.connectDB(connStr, function (err, dbConn) {
        if (err) {
            return res.status(400).json({ success: false,
                status: 400,
                message: "Unable to connect with database", error : err });
        }
        else {
            UsersService.getAllUsers(dbConn, function (err, output) {
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


module.exports.getUserById = (req, res, next) => {
    console.log("Controller : Get User : " + JSON.stringify(req.params.id));
    const uid = req.params.id;

    OneDBService.connectDB(connStr, function (err, dbConn) {
        if (err) {
            return res.status(400).json({ success: false,
                status: 400,
                message: "Unable to connect with database", error : err });
        }
        else {
            UsersService.getUserById(uid, dbConn, function (err, output) {
                if (err) {
                    return res.status(400).json({ success: false,
                        status: 400,
                        message: "Unable to get user from database", error : err });
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

module.exports.updateUser = (req, res, next) => {
    console.log("Controller : Update User : " + JSON.stringify(req.body));
    const data = req.body;

    OneDBService.connectDB(connStr, function (err, dbConn) {
        if (err) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: "Unable to connect with database", error: err
            });
        }
        else {
            UsersService.updateUser(data, dbConn, function (err, output) {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        status: 400,
                        message: "Unable to update user into database", error: err
                    });
                }
                if (!output) {
                    return res.status(400).json({
                        success: false,
                        status: 400, msg: 'Bad Request'
                    });
                }
                else {
                    return res.status(200).json({
                        success: true,
                        status: 200,
                        message: "User Updated successfully!"
                    });
                }
            });
        }
    });
};

module.exports.deleteUserById = (req, res, next) => {
    console.log("Controller : Delete User : " + JSON.stringify(req.params.id));
    const uid = req.params.id;

    OneDBService.connectDB(connStr, function (err, dbConn) {
        if (err) {
            return res.status(400).json({ success: false,
                status: 400,
                message: "Unable to connect with database", error : err });
        }
        else {
            UsersService.deleteUserById(uid, dbConn, function (err, output) {
                if (err) {
                    return res.status(400).json({ success: false,
                        status: 400,
                        message: "Unable to get user from database", error : err });
                }
                else {
                    return res.status(200).json({
                        success : true,
                        status : 200,
                        message : "User deleted successfully"
                    });
                }
            });
        }
    });
};
