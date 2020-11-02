// 引入数据库连接池
const pool = require('../config/dbconfig');
// 从数据库连接池中通过连接去查询数据库
// error错误信息
// results操作结果
// fields 字段信息(一般不需要)
// pool.query(sql语句, function (error, results) {
//   if (error) throw error;
// });
module.exports.findCount = (callback) => {
  pool.query(`select * from users`, function (error, results) {
    if (error) throw error;
    callback(results)
  });
}