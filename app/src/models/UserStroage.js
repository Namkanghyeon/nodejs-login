"use strict";

class UserStorage {
  static #users = {
    id: ["asdf", "andy", "nam"],
    passwd: ["1234", "1234", "1234"],
    name: ["aaaa", "bbbb", "cccc"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
