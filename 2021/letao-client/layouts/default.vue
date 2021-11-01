<template>
  <div>
    <!-- 头部 -->
    <header>
      <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="back">
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </header>
    <!-- 内容 -->
    <main>
      <nuxt />
    </main>
    <!-- 尾部 -->
    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item name="index " icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item name="category" icon="bag-o" to="/category">分类</van-tabbar-item>
        <van-tabbar-item name="cart" icon="cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item name="my" icon="friends-o" to="/my">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: this.$route.name,
      title: ''
    }
  },
  mounted() {
    // 页面刚进入调用方法设置标题
    this.setTitle()
  },
  methods: {
    // 设置标题
    setTitle() {
      this.title = {
        index: '乐淘-首页',
        category: '乐淘-分类',
        cart: '乐淘-购物车',
        my: '乐淘-我的'
      }[this.$route.name]
    },
    // 返回
    back() {
      this.$router.go(-1)
    }
  },
  watch: {
    $route() {
      // 监听路由变化更新标题
      this.setTitle()
    }
  }
}
</script>

<style>
</style>