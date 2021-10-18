// 重复注册拦截
const {
    query
} = require("../db/query")
module.exports.repeatregister = async (username) => {
    return await query("select * from user where username = ?", [username])
}