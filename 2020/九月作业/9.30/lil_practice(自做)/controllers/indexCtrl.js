const Joi = require('joi');
const {
    adddata
} = require('../models/adduserModel')
// 引入后端校验插件
// 显示添加页面
module.exports.show = async (req, res) => {
    res.render('add')
    // res.send('添加')
}

// 添加数据
module.exports.adduser = (req, res) => {

    // 判断爱好是否为数组
    if (!req.body.hobbies) {
        req.body.hobbies = ''
    } else if (Array.isArray(req.body.hobbies) && req.body.hobbies.length >= 1) {
        req.body.hobbies = req.body.hobbies.join(',')
    }
    
    var userdata = {
        uname: req.body.username,
        password: req.body.password,
        age: req.body.age,
        email: req.body.email,
        hobbies: req.body.hobbies
    }
    // 添加道数据库
    adddata(userdata, function (result) {
        if (result.affectedRows == 1) {
            res.send({
                code: 200,
                msg: '用户添加成功'
            })
        }
    })
}