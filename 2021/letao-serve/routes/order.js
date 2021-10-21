const router = require("koa-router")()
const {
    order
} = require("../controller/order")
router.post("/order", order)

module.exports = router