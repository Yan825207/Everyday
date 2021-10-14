const router = require('koa-router')()
const {
  gridlist,
  banners,
  sports
} = require("../controller/index")
router.get("/", async (ctx) => {
  ctx.body = "HELLO"
})
router.get("/gridlist", gridlist)
router.get("/banners", banners)
router.get("/sports", sports)
module.exports = router