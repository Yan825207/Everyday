// 引入数据库连接池
const pool = require('../config/dbconfig');
// 代表创建(Create)、更新(Update)、读取(find)和删除(Delete) 
module.exports.findUser = (email, callback) => {

  pool.query(`select * from users where email ='${email}'`, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}

