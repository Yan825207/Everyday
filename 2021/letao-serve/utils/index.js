//  用于第三方工具
const crypto = require('crypto'); //node 内置加密模块
// 传入需要加密的字段
module.exports.cryptoPassword = (password) => {
    // 返回加密完成的字段
    return crypto.createHash('MD5').update(password).digest('hex');
}