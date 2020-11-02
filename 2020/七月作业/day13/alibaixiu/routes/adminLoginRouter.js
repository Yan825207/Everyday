const express = require('express');
const { loginUSer, loginPage,logoutUser} = require('../controllers/adminLoginCtrl');
const adminLoginRouter = express.Router();
// 显示登录页面
adminLoginRouter.get("/login", loginPage)

// 处理登录业务（接受ajsx请求）
adminLoginRouter.post('/login',loginUSer)

// 处理退出业务
adminLoginRouter.get('/logout',logoutUser)
module.exports = adminLoginRouter