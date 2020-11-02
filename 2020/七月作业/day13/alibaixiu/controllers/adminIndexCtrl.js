const {findCount} = require('../modles/adminindexModel')

//#region  显示后台管理系统首页
module.exports.indexPage = (req, res) => {
    findCount(function(results){
        // flat（）  多维数组转一维数组
         results = results.flat()
        console.log(results[0].pcount); 
        res.render('./admin/index',{
            title:'后台管理系统——首页',
            pcount: results[0].pcount,
            dcount: results[1].dcount,
            cacount: results[2].cacount,
            cocount: results[3].cocount,
            hcount: results[4].hcount,
        });
    })
    
}   
//#endregion