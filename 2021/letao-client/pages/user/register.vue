<template>
  <div class="register">
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
      <van-field
        v-model="repeatpassword"
        type="password"
        name="repeatpassword"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请确认密码' }]"
      />
      <van-field
        v-model="mobile"
        type="text"
        name="mobile"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      >
        <template #button>
          <van-button
            type="primary"
            size="small"
            :disabled="isBtn"
            @click="handleSmsCode"
          >{{codeTime}}</van-button>
        </template>
      </van-field>
      <van-field
        v-model="smscode"
        type="text"
        name="短信验证码"
        label="短信验证码"
        placeholder="短信验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      ></van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <!-- 会员协议 -->
    <!-- 两端对齐 -->
    <van-row type="flex" justify="space-between">
      <van-col span="14" offset="2">
        <van-checkbox v-model="checked">我同意《会员服务协议》</van-checkbox>
      </van-col>
      <van-col span="6">
        <a href="#">立即登录</a>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { verify } from '../../utils'
import { Toast } from 'vant'
export default {
  data() {
    return {
      username: '', //用户名
      password: '', //密码
      repeatpassword: '', //确认密码
      mobile: '', //手机号
      smscode: '', //用户输入验证码
      checked: false, // 是否同意协议
      code: 'aaa', // 后端接收验证码
      codeTime: '发送验证码', // 验证码文案(倒计时)
      isBtn: false
    }
  },
  methods: {
    // 发送验证码
    async handleSmsCode() {
      const msg = verify.mobile(this.mobile)
      if (msg) {
        return Toast(msg)
      }
      // 调用短信接口
      const { data } = await this.$api.smsCode(this.mobile)
      let sum = 60
      // 禁用按钮
      this.isBtn = true
      this.timeId = setInterval(() => {
        // 倒计时
        sum--
        this.codeTime = sum + ' s'
        if (sum == 0) {
          // 倒计时结束,停止定时器
          clearInterval(this.timeId)
          // 改变倒计时文案
          this.codeTime = '重新发送'
          // 取消按钮禁用状态
          this.isBtn = false
        }
      }, 100)
      // 保存后端传过来的验证码
      this.code = data
      // console.log(this.code)
    },
    // 提交注册
    async onSubmit(value) {
      // 验证用户名,密码,手机号
      let msg =
        verify.username(this.username) ||
        verify.password(this.password, this.repeatpassword) ||
        verify.mobile(this.mobile)

      // 判断是否勾选用户协议
      if (!this.checked) {
        return Toast('请阅读会员协议,同意后才可注册~')
      }
      // 判断验证码是否一致
      if (this.code !== this.smscode) {
        return Toast('验证码有误')
      }
      // 判断手机号密码是否通过
      if (msg) {
        return Toast(msg)
      }
      // 发起注册请求
      const { status, message, userinfo } = await this.$api.register(value)
      // 注册失败
      if (!status) {
        return Toast(res.message)
      }
      // 注册成功弹出提示
      Toast(message)
      // 跳转到登录页面
      this.$router.push('/user/login')
      // 将用户信息保存到vuex中
      this.$store.commit('updateUserInfo', userinfo)
    }
  }
}
</script>

<style></style>
