export const state = () => {
  return {
    token: "",
    userinfo: ""
  }
}

export const mutations = {
  // 更改用户信息
  updateUserInfo(state, payload) {
    state.userinfo = payload
    console.log(state);
  }
}