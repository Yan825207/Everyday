// 短信验证
const {
    sendsms,
    code
} = require("../utils/index")
module.exports.sendsms = async (ctx) => {
    const {
        mobile
    } = ctx.request.body
    const sms = code(6)
    const result = await sendsms(mobile, sms)
    if (result.SendStatusSet[0].Code == 'Ok') {
        // 获取验证码成功
        ctx.body = {
            status: 200,
            message: "获取验证码成功",
            data: sms
        }
    } else {
        ctx.body = {
            status: 0,
            message: "获取验证码失败"
        }
    }
}