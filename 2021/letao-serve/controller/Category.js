const {
    oneCategory,
    twoCategory
} = require("../model/category")
module.exports.oneCategory = async (ctx) => {
    const results = await oneCategory()
    ctx.body = {
        status: 200,
        oneCategoryList: results
    }
}

module.exports.twoCategory = async (ctx) => {
    const res = ctx.request.query
    const results = await twoCategory(res.id)
    ctx.body = {
        status: 200,
        results
    }
}