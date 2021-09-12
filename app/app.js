"use strict";

//모듈
const express = require("express");
const app = express();

//포트 번호
const PORT = 3000;

//라우팅
const home = require("./src/routes/home");

//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들웨어를 등록해주는 메소드

module.exports = app;