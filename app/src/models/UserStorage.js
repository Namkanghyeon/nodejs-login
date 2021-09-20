"use strict";

const db = require("../config/db");

class UserStorage {
    static getUserInfo(id) {
        const query = "SELECT * FROM users WHERE id = ?;";
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, data) => {
                if (err) {
                    reject(`${err}`);
                }
                resolve(data[0]); // RowDataPacket의 배열로 전달되기 때문에 첫 번째 element만 전달해야 함
            });
        });
    }

    static async save(userInfo) {
        const query = "INSERT INTO users(id, passwd, name) VALUES(?, ?, ?);";
        return new Promise((resolve, reject) => {
            db.query(
                query,
                [userInfo.id, userInfo.passwd, userInfo.name],
                (err) => {
                    if (err) {
                        reject(`${err}`);
                    }
                    resolve({ success: true });
                }
            );
        });
    }
}

module.exports = UserStorage;
