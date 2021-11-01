<template>
  <van-overlay class="loading" :show="show">
    <van-loading type="spinner">加载中...</van-loading>
  </van-overlay>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    start() {
      this.show = true
    },
    finish() {
      this.show = false
    }
  }
}
</script>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>