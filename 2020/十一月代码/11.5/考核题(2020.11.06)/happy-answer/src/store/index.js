import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state() {
    return {
      // 第几题
      itemTitle: "第一周",
      // 题目
      itemNum: 1,
      // 题目数据
      list: [],
      // 选择的选项的id
      itemIds: []
    };
  },
  mutations: {
    dataInfo(state, payload) {
      state.list = payload;
    },
    saveId(state, payload) {
      // 保存id
      state.itemIds.push(payload);
      // 判断题号小于数组则加一
      if (state.itemNum < state.list.length) {
        state.itemNum++;
      }
      console.log(state.itemIds);
    },
    clear(state) {
      // 点击再来一次，把题号重置为1
      state.itemNum = 1;
      // 清空数组
      state.itemIds = [];
    }
  },
  actions: {
    async getdata(context) {
      // 获取题目数据
      let res = await axios.get("/data/question.json");
      // 调用mutation方法存储数据
      context.commit("dataInfo", res.data);
    }
  },
  modules: {}
});
