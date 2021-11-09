import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from './mock-data.js';

Vue.config.productionTip = false;

let data = { //data is where changing information is stored
  journal: mock //from line 4
}

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
