"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  ids: ["asdf", "andy", "nam"],
  passwds: ["1234", "1234", "1234"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const passwd = req.body.passwd;

    if (users.ids.includes(id)) {
      const idx = users.ids.indexOf(id);
      if (users.passwds[idx] == passwd) {
        return res.json({
          success: true,
        });
      }
      return res.json({
        success: false,
        msg: "login failed",
      });
    }
  },
};

module.exports = {
  output,
  process,
};
