const router = require("koa-router")()
const {
    order,
    notify,
    queryOrder
} = require("../controller/order")
router.post("/order", order)

router.post("pay/notify", notify)

// 微信订单查询
router.post('/queryOrder', queryOrder);
module.exports = router