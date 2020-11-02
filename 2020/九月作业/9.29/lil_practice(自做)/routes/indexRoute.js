const express = require('express')
const {
    findCount
} = require("../models/adminIndexModel")
// 创建路由
const indexRouter = express.Router()
// 首页
indexRouter.get('/', (req, res) => {
    return res.render('index')
})

// 渲染数据
indexRouter.get('/admin/data', (req, res) => {
    findCount(function (result) {
        return res.send({
            data: result
        })
    })
})


module.exports = indexRouter