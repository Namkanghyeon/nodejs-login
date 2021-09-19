const mariadb = require("mysql");

const db = mariadb.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "nam",
    password: "0000",
    database: "dating",
});

db.connect();

module.exports = db;
