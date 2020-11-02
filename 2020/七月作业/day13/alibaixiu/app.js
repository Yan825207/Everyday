// 引包
const express = require('express');
const path = require('path');

// 导入用户首页路由
const index = require('./routes/indexRouter');
const list = require('./routes/listRouter');
const detail = require('./routes/detailRouter');
// 导入ejs包
const ejs = require("ejs");
const adminLogin = require('./routes/adminLoginRouter');
const adminIndex = require('./routes/adminIndexRouter');
const adminComments = require('./routes/adminCommentsRouter');
const adminCategories = require('./routes/adminCategoriesRouter');
const adminPosts = require("./routes/adminPostsRouter");
const adminSettings = require("./routes/adminSettingsRouter");
const adminUser = require('./routes/adminUserRouter');
// 引入session 包（登录保持）
const session = require('express-session');
// 创建服务器
const app = express();

// 配置静态资源
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
// 挂载路由
// 设置中间件
app.use(express.urlencoded({ extended: false }));

// 配置session 包
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000 * 5
    }
  }))

// 登录拦截
app.use(function (req,res,next) {
    // 获取url
    let url = req.originalUrl;
    // console.log(req.session.user);
    if (url != '/admin/login' && !req.session.user){
        // 重定向
        return res.redirect("/admin/login");
        // location.href = '/admin'
    }
    next();
})

// 挂载首页路由
app.use(index);
app.use(list);
app.use(detail);
app.use('/admin', adminLogin)
app.use('/admin', adminIndex)
app.use('/admin', adminComments)
app.use('/admin', adminCategories)
app.use("/admin", adminPosts)
app.use('/admin', adminSettings)
app.use("/admin", adminUser)
app.listen(3000, () => {
    console.log('请打开:http://localhost:3000');
})