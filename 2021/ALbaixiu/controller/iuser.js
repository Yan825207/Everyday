const { query } = require("../db/query")
// 获取所有用户
module.exports.getAllUser = async () => {
  return await query("select * from users")
}