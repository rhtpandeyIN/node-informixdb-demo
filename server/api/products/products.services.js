module.exports.createProduct = function (data, dbConn, callback) {
    console.log("Products Service : createProduct");
    
    // create table products(pid int, productname varchar(20), productcategory varchar(20), price int);
    let sql = `insert into products(pid, productname, productcategory, price) values(?,?,?,?)`;
    
    try {
        var res = dbConn.querySync(sql,
            [
            data.pid,
            data.productname,
            data.productcategory,
            data.price,
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

module.exports.getProductById = function (product_id, dbConn, callback) {
    console.log("Products Service : getProductById : " + product_id);
    
    let sql = `select * from products where pid = ?`;
    
    try {
        var res = dbConn.querySync(sql, [product_id]);
        return callback(null, res);
    }
    catch(error){
        return callback(error, null);
    }
    finally {
        dbConn.closeSync();
    }
}