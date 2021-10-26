const router = require("koa-router")()
const { banners } = require("../controller/banners")
router.get("/banners", banners)
module.exports = router