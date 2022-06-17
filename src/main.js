import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugins/antd.plugin";
import "./plugins/splider.plugin";
import i18n from './i18n'
import { configureApis } from "./apis/config";

Vue.config.productionTip = false;
configureApis(Vue);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
