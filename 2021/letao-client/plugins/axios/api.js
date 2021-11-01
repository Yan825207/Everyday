export default ({ $request }, inject) => {
  // 全局注册插件
  inject("api", {
    // 首页轮播图接口
    IndexBanner() {
      return $request.$get("/banners")
    },
    // 首页宫格接口
    IndexGrid() {
      return $request.$get("/gridlist")
    },
    // 首页运动接口
    IndexSport() {
      return $request.$get('/sports')
    },
    // 一级分类接口
    OneCategory() {
      return $request.$get("/onecategory")
    },
    // 二级分类接口
    TwoCategory(cid) {
      return $request.$get(`/twocategory?id=${cid}`)
    },
    // 短信验证接口
    smsCode(mobile) {
      return $request.$post("/sendsms", { mobile })
    },
    // 注册接口
    register(data) {
      return $request.$post("/users/register", data)
    }
  })
}