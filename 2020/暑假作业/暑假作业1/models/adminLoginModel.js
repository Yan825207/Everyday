// 引入数据库连接池
const pool = require('../config/dbconfig');
// 冲数据库连接池中通过连接去查询数据库
module.exports.findUser = (username, callback) => {
    // sql语句
    pool.query(`select * from users where username = '${username}'`, function (error, results) {
      if (error) throw error;
      callback(results);
    });
  }
  