const { getBannersList } = require("../model/banners.js")
// 查询轮播图数据
module.exports.banners = (ctx) => {
  const result = getBannersList()
  ctx.body = {
    status: 200,
    result
  }
}