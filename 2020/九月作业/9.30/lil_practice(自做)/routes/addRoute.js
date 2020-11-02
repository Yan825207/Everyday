const express = require('express');
const {
    show,
    adduser
} = require('../controllers/indexCtrl');
// 创建路由
const AddRouter = express.Router();
// 显示用户添加页面
AddRouter.get('/add', show)
// 添加数据
AddRouter.post('/addUser', adduser)
// 导出
module.exports = AddRouter;