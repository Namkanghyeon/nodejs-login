"use strict";

const db = require("../config/db");

class UserStorage {
    static getUsers(isAll, ...fields) {}

    static getUserInfo(id) {
        const query = "SELECT * FROM users";
        db.query(query, (err, data) => {
            console.log(data);
        });
    }

    static async save(userInfo) {}
}

module.exports = UserStorage;
