import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from './mock-data.js';

Vue.config.productionTip = false;
Vue.use(require("moment"));


let data = { //data is where changing information is stored
  journal: mock, //from line 4
  id: 13
}

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
