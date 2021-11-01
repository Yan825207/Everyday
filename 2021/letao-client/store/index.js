export const state = () => {
  return {
    token: "",
    userinfo: "",
  }
}

export const mutations = {
  // 更改用户信息
  updateUserInfo(state, payload) {
    state.userinfo = payload
  },
  // 更新token
  updateToken(state, payload) {
    state.token = payload
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let token = ""
    // 判断是否存在cookie
    if (req.headers.cookie) {
      let parsed = require("cookieparser").parse(req.headers.cookie)
      // 设置cookie
      token = parsed.token
    }

    commit("updateToken", token)
  }
}