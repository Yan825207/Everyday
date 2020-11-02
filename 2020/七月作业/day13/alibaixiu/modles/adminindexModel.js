const pool = require('../config/dbconfig');

//#region  查询站点统计
module.exports.findCount = ( callback) => {
    pool.query(`
     SELECT COUNT(*) AS pcount FROM posts;
     SELECT COUNT(*) AS dcount FROM posts WHERE STATUS = 'drafted';
     SELECT COUNT(*) AS cacount FROM categories; SELECT COUNT(*) AS cocount FROM  comments;
     SELECT COUNT(*) AS hcount FROM comments WHERE STATUS = 'held';
     `
     , function (error, results) {
        if (error) throw error;
        callback(results);
        // console.log(results);
      });
  }
