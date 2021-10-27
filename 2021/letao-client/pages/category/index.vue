<template>
  <van-tree-select
    height="80vh"
    :items="oneCategoryList"
    :main-active-index.sync="active"
    @click-nav="()=>handleChange(active)"
  >
    <template #content>
      <div class="category_sencond" v-for="item in TwoCategoryList" :key="item.id">
        <van-image width="4rem" :src="item.brandLogo" />
        <p>{{ item.brandName }}</p>
      </div>
    </template>
  </van-tree-select>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  async asyncData({ $api }) {
    // asyncData在data之前,无法拿到data中的数据,要获取active可以在asyncData中定义,最会会和data合并
    let active = 0
    // 获取一级分类数据
    let { results } = await $api.OneCategory()
    // 整理数据
    const oneCategoryList = results.map((element) => {
      return {
        text: element.categoryName,
        ...element
      }
    })

    // 获取二级分类数据
    let res = await $api.TwoCategory(oneCategoryList[active]['id'])

    return {
      active,
      oneCategoryList,
      TwoCategoryList: res.results
    }
  },
  methods: {
    // 点击左边标签栏切换
    async handleChange(active) {
      console.log(111)
      // 获取二级分类数据
      let { results } = await this.$api.TwoCategory(
        this.oneCategoryList[active]['id']
      )
      this.TwoCategoryList = results
    }
  }
}
</script>

<style>
.category_sencond {
  float: left;
  text-align: center;
}
</style>