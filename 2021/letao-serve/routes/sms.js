const router = require("koa-router")()
const {
    sendsms
} = require("../controller/sendsms")
router.post("/sendsms", sendsms)


module.exports = router