const express = require('express')
const path = require('path')

const ejs = require('ejs')
// 登录首页
const index = require("./routes/indexRouter")
const list = require('./routes/listRouter')

const adminadd = require('./routes/adminAddRoutes')
const adminedit = require('./routes/adminEditRoutes')
const adminlogin = require('./routes/adminloginRouter')
// 设置包
// 创建服务器
const app = express()
// 设置静态资源目录
app.use(express.static(path.join(__dirname,'public')))

// 2.3 把views设置为模板文件的根目录
app.set('views', path.join(__dirname, 'views'));
// 2.4 设置模板引擎为ejs
app.set('view engine', 'ejs');
// 2.5 //为html扩展名注册ejs
app.engine('html',ejs.renderFile);

// 2.6 配置urlencoded  post中间件
app.use(express.urlencoded({ extended: false }));
// 挂在路由

// 登录页面
app.use(index)
// 英雄列表
app.use(list)
// 操作信息
// 添加
app.use('/admin',adminadd)
// 编辑
app.use('/admin',adminedit)

app.use('/admin',adminlogin)


app.listen(3000,() => {
    console.log('打开 : http://localhost:3000');
})