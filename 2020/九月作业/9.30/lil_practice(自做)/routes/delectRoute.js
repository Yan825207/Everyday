const express = require('express')

const delectRouter = express();
const {
    removedata
} = require('../models/removeModele');
const {
    editData,
    editSave
} = require('../models/editModel.js')

// 删除数据
delectRouter.get('/delect', (req, res) => {
    let {
        id
    } = req.query
    removedata(id, function (result) {
        if (result.affectedRows == 1) {
            res.send({
                code: 200,
                msg: '删除成功'
            })
        }
    })
})

// 修改数据
delectRouter.post('/edit', (req, res) => {
    let {
        id
    } = req.body
    editData(id, function (result) {
        result[0].hobbies = result[0].hobbies.split(',')
        res.send({
            code: 200,
            msg: '获取数据',
            data: result
        })
    })
})
// 点击保存修改数据库
delectRouter.post('/editsave', (req, res) => {
    // 判断hobbies
    if (!req.body.hobbies) {
        req.body.hobbies = ''
    } else if (Array.isArray(req.body.hobbies) && req.body.hobbies.length >= 1) {
        req.body.hobbies = req.body.hobbies.join(',')
    }
    let updatedata = {

        uname: req.body.username,
        password: req.body.password,
        age: req.body.age,
        email: req.body.email,
        hobbies: req.body.hobbies
    }
    let id = req.body.id
    editSave(id, updatedata, function (result) {
        if (result.affectedRows == 1) {
            res.send({
                code: 200,
                msg: '数据修改成功'
            })
        }
    })
})
module.exports = delectRouter