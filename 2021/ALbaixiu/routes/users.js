const { getAllUser } = require("../controller/user")

const router = require('koa-router')()

router.prefix('/users')

router.get('/', async (ctx, next) => {
  const result = getAllUser()
  await ctx.render("users", result)
})

module.exports = router
