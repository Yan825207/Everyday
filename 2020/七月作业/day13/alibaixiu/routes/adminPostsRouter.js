const express = require("express")
const adminPostsRouter = express.Router()
const {postspages,postAddpages} = require('../controllers/adminpostsCtrl')
// 显示文章页面
adminPostsRouter.get('/posts', postspages)

// 显示文章添加页面
adminPostsRouter.get('/posts/add',postAddpages)


module.exports = adminPostsRouter