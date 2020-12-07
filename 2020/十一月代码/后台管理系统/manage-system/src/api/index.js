// 关于用户的接口
export const user = {
  LoginUser: "login", // 用户登录
  GetUsers: "users", // 获取所有用户
  Adduser: "users", //添加用户
  getuser: "users", //通过id查询用户信息
  subuser: "users", // 编辑用户提交
  deluser: "users", // 删除用户
};

// 关于权限的接口
export const rights = {
  AsideMenus: "menus", // 获取左侧菜单权限
  getTabData: "rights/list", // 获取所有限权
  getTreeData: "rights/tree", // 获取所有限权---tree
};

export const role = {
  getrole: "roles"
}
// 关于订单的接口
export const order = {
  getorders: "orders", //获取订单数据列表
}
// 关于商品的接口
export const goods = {
  getgoodsList: "goods", //获取商品列表
  getgood: "categories" //获取商品分类
}