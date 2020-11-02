const express = require("express")
const adminUserRouter = express.Router()

adminUserRouter.get('/users', (req, res) => {
    res.render('./admin/users',{title:'后台管理系统-用户'})
})
adminUserRouter.get('/users/edit', (req, res) => {
    res.render('./admin/profile',{title:'后台管理系统-用户编辑'})
})
module.exports = adminUserRouter