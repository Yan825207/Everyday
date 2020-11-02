// 引入mysql包
const mysql = require('mysql');
// 配置数据库信息
const pool = mysql.createPool({
  // 数据库连接池中 有多少连接
  connectionLimit: 20,
  //  host            : '127.0.0.1',
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'lil'
});


module.exports = pool;


