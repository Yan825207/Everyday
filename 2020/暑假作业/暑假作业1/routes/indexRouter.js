const express = require('express');

// 用router方法创建路由
const loginRouter = express.Router();

loginRouter.get('/',(req,res)=>{
    res.render('login')
})


module.exports = loginRouter