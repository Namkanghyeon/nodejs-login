"use strict";

//모듈
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//라우팅
const home = require("./src/routes/home");

//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

// use: 미들웨어를 등록해주는 메소드
app.use(express.static(`${__dirname}/src/public`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;
