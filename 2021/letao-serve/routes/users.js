const router = require('koa-router')()
const {
  register
} = require("../controller/register")
const {
  login
} = require("../controller/users")
router.prefix('/users')
// 注册
router.post("/register", register)

// 登录
router.post("/login", login)
module.exports = router