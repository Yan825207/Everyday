const express = require('express');

const adminAddRoutes = express.Router();


adminAddRoutes.get('/add',(req,res)=>{
    res.render('add')
})

adminAddRoutes.get('/data',(req,res)=>{
    res.send({
        code:200,
        success:'添加失败'
    })
})
module.exports = adminAddRoutes