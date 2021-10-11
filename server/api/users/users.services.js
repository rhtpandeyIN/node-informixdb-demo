


module.exports.createUser = function (data, dbConn, callback) {
    console.log("User Service : createUser");
    
    // create table products(pid int, productname varchar(20), productcategory varchar(20), price int);
    let sql = `insert into users(uid, firstname, lastname, useremail, userpassword) values(?,?,?,?,?)`;
    
    try {
        var res = dbConn.querySync(sql,
            [
            data.uid,
            data.firstname,
            data.lastname,
            data.useremail,
            data.userpassword
            ]
        );
        return callback(null, res)
    }
    catch(error){
        return callback(error, null);
    }
    finally {
        dbConn.closeSync();
    }
};

module.exports.getAllUsers = function (dbConn, callback) {
    console.log("Users Service : getAllUsers : " );
    
    let sql = `select uid, firstname, lastname, useremail, userpassword from users`;
    
    try {
        var res = dbConn.querySync(sql);
        return callback(null, res);
    }
    catch(error){
        return callback(error, null);
    }
    finally {
        dbConn.closeSync();
    }
};

module.exports.getUserById = function (uid, dbConn, callback) {
    console.log("Users Service : getUserById : " + uid);
    
    let sql = `select * from users where uid = ?`;
    
    try {
        var res = dbConn.querySync(sql, [uid]);
        return callback(null, res);
    }
    catch(error){
        return callback(error, null);
    }
    finally {
        dbConn.closeSync();
    }
};


module.exports.deleteUserById = function (uid, dbConn, callback) {
    console.log("Users Service : deleteUserById : " + uid);
    
    let sql = `delete from users where uid = ?`;
    
    try {
        var res = dbConn.querySync(sql, [uid]);
        return callback(null, res[0]);
    }
    catch(error){
        return callback(error, null);
    }
    finally {
        dbConn.closeSync();
    }
}
