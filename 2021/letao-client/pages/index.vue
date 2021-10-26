<template>
  <div class="main">
    <div class="swiper">
      <!-- 轮播图组件 -->
      <Indexswiper :swiperList="swiperList"></Indexswiper>
      <!-- 宫格组件 -->
      <IndexGridList :gridlist="gridlist"></IndexGridList>
      <!-- 活动组件 -->
      <IndexActive></IndexActive>
      <!-- 品牌组件 -->
      <IndexBrand></IndexBrand>
      <!-- 活动专区 -->
      <IndexSport></IndexSport>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { swiperList } = await $axios.$get('/banners')
    const { gridlist } = await $axios.$get('/gridlist')
    const { sports } = await $axios.$get('/sports')

    return {
      swiperList,
      gridlist,
      sports
    }
  }
}
</script>

<style>
</style>