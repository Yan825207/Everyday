const express = require('express')

const delectRouter = express();
const {
    removedata
} = require('../models/removeModele');
const {
    editData
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
module.exports = delectRouter