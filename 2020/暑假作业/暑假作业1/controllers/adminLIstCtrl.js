const {listUser} = require("../models/adminlistModel")
module.exports.listpage=(req,res)=>{
    listUser(0,5,function(result){
        // 二维数组扁 平化
     result = result.flat()
        console.log(result);
        res.render('index',{
            title:'英雄管理系统',
            data:result,
            pagenum:1,
            pagesize:5
        })
    })
}
 
// module.exports.adminlist=(req,res)=>{
//     listUser((result)=>{
//         console.log(result[0])
//         res.render('/admin/list',)
//         // res.send({
//         //     code:200,
//         //     cd:result[0].id,
//         //     data:result[0],
//         //     musses:"成功"
//         // })
//     })
// }