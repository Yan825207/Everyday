<template>
  <div class="my">
    <h3>会员个人信息</h3>
    <p>
      <span>用户名:</span>
      <span>{{userinfo.username}}</span>
    </p>
    <p>
      <span>手机号:</span>
      <span>{{userinfo.mobile}}</span>
    </p>
    <van-button type="danger" @click="outLogin">退出登录</van-button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['userinfo'])
  },
  methods: {
    ...mapMutations(['updateToken']),
    // 退出登录
    outLogin() {
      // 清除数据
      this.updateToken('')
      //跳转页面
      this.$router.push('/user/login')
    }
  }
}
</script>

<style>
.my {
  padding-left: 2rem;
}
</style>