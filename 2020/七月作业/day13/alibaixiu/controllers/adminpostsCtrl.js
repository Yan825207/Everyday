// 引入模型
const { findByPaging } = require('../modles/adminPostsModel')
// 引入日期格式化插件
const moment = require('moment')
module.exports.postspages = (req, res) => {
    findByPaging(0,5,function(results){
        for(let i=0;i<results[0].length;i++){
          results[0][i].created = moment(results[0].created).format('YYYY-MM-DD')
        }
        console.log(results);
          res.render('./admin/posts',{
              title:'后台管理系统——文章',
              data:results[0],
              total:results[1][0].total,
            //   第几页
              pagenum:1,
            //   每页几条数据
              pagesize:5,
            //   共几页
            //   totalpages :Math.ceil(results[0][1].total / pagesize)
        })
    })
}

module.exports.postAddpages = (req, res) => {
    res.render('./admin/post-add',{title:'后 管理系统——文章添加'})
}
