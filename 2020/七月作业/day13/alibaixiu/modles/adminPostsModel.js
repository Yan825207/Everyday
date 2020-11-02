// 引入数据库连接池
//#region 
const pool = require('../config/dbconfig');
// 代表创建(Create)、更新(Update)、读取(find)和删除(Delete) 

// 分页查询所有文章 
module.exports.findByPaging = (pagenum,pagesize,callback) =>{
    pool.query(`select * from posts limit ?,?; SELECT COUNT(*) AS total FROM posts;`, [pagenum,pagesize],function (error, results) {
        if (error) throw error;
        callback(results);
      });
}
//#endregion