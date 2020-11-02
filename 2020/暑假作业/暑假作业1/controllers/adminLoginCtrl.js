// 引入表单校验插件
const Joi = require('joi');
// 引入模型
const {findUser} = require('../models/adminLoginModel');

module.exports.loginUser = (req,res)=>{
    // location.href="/"
    let {username,password} = req.body
    const schema = Joi.object().keys({
        username: Joi.string().min(1).max(6).error(new Error('用户或密码不正确')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{4,30}$/).required().error(new Error('用户名或密码不正确'))
      })
    //   let result = Joi.validate({username:username, password: password }, schema);
      const result = schema.validate({ username:username, password: password  });
    // console.log(result.error); // 如果校验通过那么 error对象为null
      if (result.error) {
        res.send({
          code: 500,
          message: result.error.message
        })
        // 抛出错误
        throw result.error;
      }

      // 数据库对比
      findUser(username,function(result){
       if(result.length!=0){
         if(result[0].password == password){
           res.send({
             code:200,
             message:'登录成功'
           })
         }else{
           res.send({
             code:500,
             message:'密码错误'
           })
         }
       }else{
         res.send({
           code:500,
           message:'用户名不存在'
         })
       }
      })
    // res.send({
    //     code:200,
    //     success:'登陆成功'
    // })

}