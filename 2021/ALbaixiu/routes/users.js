const { getAllUser } = require("../controller/user")

const router = require('koa-router')()

router.prefix('/users')

router.get('/', async (ctx, next) => {
  const result = getAllUser()

  const res = await query("select * from users")
  console.log(res);
  await ctx.render("users")
})

module.exports = router
