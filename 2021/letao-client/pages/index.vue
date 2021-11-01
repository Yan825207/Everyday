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
      <IndexSport :sports="sports"></IndexSport>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $api }) {
    // const { swiperList } = await $axios.$get('/banners')
    // const { gridlist } = await $axios.$get('/gridlist')
    // const { sports } = await $axios.$get('/sports')

    // const { swiperList } = await $request.$get('/banners')
    // const { gridlist } = await $request.$get('/gridlist')
    // const { sports } = await $request.$get('/sports')

    // const { swiperList } = await $api.IndexBanner()
    // const { gridlist } = await $api.IndexGrid()
    // const { sports } = await $api.IndexSport()

    const [{ swiperList = [] }, { gridlist = [] }, { sports = [] }] =
      await Promise.all([
        $api.IndexBanner(),
        $api.IndexGrid(),
        $api.IndexSport()
      ])
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