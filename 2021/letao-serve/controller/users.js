const {
    register,
    login
} = require("../model/users")
// 导入加密模块
const {
    cryptoPassword
} = require("../utils/index")
const Joi = require("joi")
// 导入查重方法
const {
    repeatregister
} = require("../model/repeatregister")
// 注册功能
module.exports.register = async (ctx) => {
    // 接收参数
    const {
        username,
        password,
        mobile
    } = ctx.request.body;
    // 定义规则
    const schema = Joi.object({
        username: Joi.string()
            .min(2)
            .max(6)
            .required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        repeat_password: Joi.ref('password'),
        mobile: Joi.string()
            .pattern(new RegExp(/^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/))
    })

    const verify = schema.validate({
        username,
        password,
        mobile
    });
    // 信息错误
    if (verify.error) {
        ctx.body = {
            status: 0,
            msg: verify.error.details[0].message
        }
        return
    }

    // 检查是否已经注册
    const isRepeat = await repeatregister(username)
    if (isRepeat[0]) {
        ctx.body = {
            status: 0,
            message: "已注册,请勿重复注册"
        }

        return
    }
    // 注册
    const result = await register(username, cryptoPassword(password + process.env.crypto), mobile)
    ctx.body = {
        status: 200,
        msg: "访问成功"
    }
}

// 登录功能
module.exports.login = async (ctx) => {
    const {
        username,
        password
    } = ctx.request.body
    const result = await login(username, cryptoPassword(password + process.env.crypto))
    if (result[0]) {
        ctx.body = {
            status: 200,
            message: "登陆成功"
        }
    } else {
        ctx.body = {
            status: 0,
            message: "用户名或密码错误",
        }
    }
}