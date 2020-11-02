const express = require('express')
const path = require('path')
//导入ejs模块
var ejs = require('ejs');

const app = express()
// 首页
const index = require('./routes/indexRoute');
// 添加
const adminAdd = require('./routes/addRoute');
// 删除
const adminDelect = require('./routes/delectRoute')
// 设置默认路径
app.use(express.static(path.join(__dirname, 'public')))

//把./views目录设置为模板文件的根，html文件模板放在view目录中
app.set('views', './views');

//设置模板引擎为ejs
app.set('view engine', 'ejs');

//为html扩展名注册ejs
app.engine('html', ejs.renderFile);

// 2.4 POST请求处理中间件
app.use(express.urlencoded({
    extended: false
}))
// 路由
app.use(index)
// 添加路由
app.use(adminAdd)
// 删除路由
app.use(adminDelect)
app.listen(3000, function () {
    console.log('打开：http://localhost:3000');
})