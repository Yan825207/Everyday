const express = require('express')
// 使用router方法创建路由
const listRouter = express.Router()

listRouter.get('/list', (req, res) => {
    res.render('./list')
})

module.exports = listRouter