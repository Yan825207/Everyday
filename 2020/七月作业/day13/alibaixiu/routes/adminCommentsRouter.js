const express = require('express')

const adminComments = express.Router()

adminComments.get('/comments', (req, res) => {
    res.render('./admin/comments',{title:'后台管理系统-评论'})
})
module.exports = adminComments