const router = require('koa-router')()
const {
    oneCategory,
    twoCategory
} = require("../controller/Category")

// 一级分类
router.get("/onecategory", oneCategory)

// 二级分类
router.get("/twocategory", twoCategory)

module.exports = router