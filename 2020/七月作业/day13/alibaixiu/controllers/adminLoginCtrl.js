// 引入后端校验插件
const Joi = require("joi");
// 引入模型
const { findUser } = require('../modles/adminLoginModel');

module.exports.loginPage = (req,res)=>{
        res.render('./admin/login',{title:'后台管理系统登录'})
}

module.exports.loginUSer = (req,res)=>{
    // 获取前端传来的数据
    let {email,password} = req.body
    // res.send("登录成功")
    const schema = Joi.object().keys({
        email: Joi.string().min(6).max(100).email().required().error(new Error('邮箱或密码不正确')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required().error(new Error('邮箱或密码不正确'))
      })
    let result = Joi.validate({ email: email, password: password }, schema);
    //   console.log(result);
    // 如果校验成功result.error 为null
    if(result.error){
        res.send({
            code:500,
            message:result.error.message
        })
            // 抛出错误
    throw result.error;
    }
    // 数据库数据对比
    findUser(email ,function(result){
        // 不等于1代表邮箱存在
    if(result.length !==0){
        if(result[0].password == password){   //密码匹配
            // 把用户信息保存在session中 
        req.session.user =  result[0]
        // console.log(req.session.user);   
            return res.send({
            code:200,
            message:"登陆成功"
        })
        }else{
            return res.send({
                code:500,
                message:"邮箱或密码错误"
            })
        }
    }else{
        return res.send({
            code:500,
            message:"邮箱或密码错误"
        })
    }
})
}

module.exports.logoutUser = (req,res) =>{
        req.session.destroy(function(err){
            res.clearCookie('connect.sid');
            res.send({
                code:200,
                messafe:"退出成功"
            })
        })
}