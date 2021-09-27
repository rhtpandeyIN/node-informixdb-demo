var informix = require("informixdb").Pool;
const pool = new informix();

module.exports.connectDB = function (connStr, callback) {
    console.log("OneDB Services : connectDB");

    pool.open(connStr, function (err, dbConn) {
        if (err) {
            return callback(err, null);
        }
        else {
            return callback(null, dbConn);
        }    
    });
}
