let mysql = require('mysql2')
let pool;

let dbinfo = {
    user: 'username',
    password: 'password',
    host: '192.168.56.103',
    port: 3306,
    database: 'mydb'
}

function handleDisconnect() {
    pool = mysql.createPool(dbinfo);
    return pool;
}

pool = handleDisconnect();
module.exports.config = pool;