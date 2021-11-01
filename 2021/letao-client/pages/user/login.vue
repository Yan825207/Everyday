<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { verify } from '../../utils'
import { Toast } from 'vant'
import { mapMutations } from 'vuex'
const Cookie = require('js-cookie')
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations(['updateToken', 'updateUserInfo']),

    async onSubmit(values) {
      // 校验用户名和密码
      const msg =
        verify.username(this.username) || verify.password(this.password)
      // 判断如果校验失败,弹出提示信息
      if (msg) return Toast(msg)
      // 校验成功发起请求
      const { message, status, token, username, mobile } =
        await this.$api.Login(values)
      // 判断是否登录成功
      if (status !== 200) {
        // 弹出提示
        return Toast(message)
      }
      // 登录成功
      // 弹出提示
      Toast(message)
      // 保存token到vuex
      this.updateToken(token)
      // 保存token到cookie
      Cookie.set('token', token)
      // 保存用户信息
      this.updateUserInfo({ username, mobile })
      // 跳转首页
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>