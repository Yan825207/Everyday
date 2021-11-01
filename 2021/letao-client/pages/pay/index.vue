<template>
  <div class="pay_home">
    <!-- 已支付 -->
    <div v-if="payStatus" class="pay">
      <h3>您已支付</h3>
    </div>
    <!-- 未支付 -->
    <div v-else class="nopay">
      <h3>支付二维码</h3>
      <van-image width="100" height="100" :src="payUrl" />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      payStatus: false, // 支付状态,
      payUrl: '' // 支付二维码
    }
  },
  async mounted() {
    let { name, price } = this.$route.query
    let params = {
      body: name,
      spbill_create_ip: '127.0.0.1',
      total_fee: price,
      trade_type: 'NATIVE'
    }
    // 调用下单接口
    let {
      data: { result_code, return_code, return_msg, payUrl }
    } = await this.$api.Order(params)
    console.log(result_code, return_code, return_msg, payUrl)
    if (
      result_code[0] === 'SUCCESS' &&
      return_code[0] === 'SUCCESS' &&
      return_msg[0] === 'OK'
    ) {
      // 下单成功
      // 修改二维码地址
      this.payUrl = payUrl
      let timeId = setInterval(() => {
        this.payStatus = true
      }, 5000)
    }
  }
}
</script>

<style>
.pay_home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>