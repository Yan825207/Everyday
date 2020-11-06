import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入css文件
import "../public/css/common.scss";
// 引入js文件
import "../public/js/rem";
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
