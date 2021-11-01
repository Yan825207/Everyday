// 校验规则
export const verify = {
  // 校验用户名
  username(name) {
    if (!name) return ("请输入用户名")

    if (!/^[a-zA-Z0-9]{4,20}$/.test(name.trim())) {
      return ("请输入4到20个字符的用户名")
    }
  },
  // 校验密码
  password(pas, repeatpas) {
    if (!pas) return ("请输入密码")
    if (!/^[a-zA-Z0-9]{6,20}$/.test(pas.trim())) {
      return ("请输入6到20个字符的密码")
    }
    // 用repeatpas来判断登录还是注册
    if (!repeatpas) return
    if (pas !== repeatpas) return ("两次输入密码不一致")
  },
  // 校验手机号
  mobile(phone) {
    if (!phone) return ("请输入手机号")
    if (!/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(phone.trim())) {
      return ("请输入正确的手机号")
    }
  },

}