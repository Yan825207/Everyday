<template>
  <div class="home_container">
    <section>
      <!-- 头部标签 -->
      <header class="top_tips">
        <span class="num_tip">题目{{ itemNum }}</span>
      </header>
      <!-- 题目内容 -->
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="itemNum <= list.length">
          <!-- 题干 -->
          <header class="item_title">{{ list[itemNum - 1].topic_name }}</header>
          <!-- 选项 -->
          <ul>
            <li
              @click="change(item.topic_answer_id, index)"
              class="item_list"
              v-for="(item, index) in list[itemNum - 1].topic_answer"
              :key="index"
            >
              <span
                class="option_style"
                :class="index == itemIndex ? 'has_choosed' : ''"
                >{{ String.fromCharCode(65 + index) }}</span
              >
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span
        class="next_item button_style"
        v-if="itemNum < list.length"
        @click="next"
      ></span>
      <span class="submit_item button_style" v-else @click="submit"></span>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      itemIndex: null,
      itemId: null
    };
  },
  created() {
    // 页面加载获取数据
    this.$store.dispatch("getdata");
  },
  methods: {
    change(id, index) {
      //  点击保存id和索引
      this.itemIndex = index;
      this.itemId = id;
    },
    next() {
      // 点击下一题判断是否选择了选项
      if (this.itemIndex == null) {
        alert("请选择选项");
      } else {
        // 保存id，使题号加一
        this.$store.commit("saveId", this.itemId);
        this.itemIndex = null;
      }
    },
    submit() {
      // 点击提交按钮
      if (this.itemIndex == null) {
        alert("请选择选项");
      } else {
        // 保存id，使题号加一
        this.$store.commit("saveId", this.itemId);
        this.itemIndex = null;
        // 跳转道分数显示页面
        this.$router.push("/score");
      }
    }
  },
  computed: {
    ...mapState(["itemNum", "list"])
  }
};
</script>

<style lang="scss">
.home_container {
  height: 100%;
  background-image: url("/images/1-1.jpg");
}
.next_item {
  background-image: url("/images/2-2.png");
}

.submit_item {
  background-image: url("/images/3-1.png");
}

.item_back {
  background-image: url("/images/2-1.png");
  background-size: 100% 100%;
}

.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}

.item_list_container {
  margin: 2.5rem;
  padding: 0;
}

.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>
