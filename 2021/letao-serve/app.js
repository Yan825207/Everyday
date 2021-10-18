const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const jwt = require("koa-jwt")
// 导入token加密字符
const {
  tokenStr
} = require("./config/index")
// 启动dotenv
require('dotenv').config()
const index = require('./routes/index')
const users = require('./routes/users')
const category = require("./routes/category")
const sms = require('./routes/sms')
const {
  login
} = require('./model/users')



// error handler
onerror(app)

// 登录拦截  ------必须卸载路由之前
//  koa-jwt  如果请求头中没有token这返回401
app.use(function (ctx, next) {
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  });
});
// 设置那些接口不需要token
app.use(jwt({
  secret: tokenStr
}).unless({
  path: [/^\/public/, /^\/users\/login/]
}));

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(category.routes(), category.allowedMethods())
app.use(sms.routes(), sms.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app