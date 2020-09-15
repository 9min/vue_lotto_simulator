import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import EventBus from "./common/eventBus";
import { numberWithCommas } from "./common/utils";

import "./assets/css/reset.css";
import "./assets/css/common.css";

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    this.EventBus = EventBus;
  },
});

Vue.filter("numberWithCommas", numberWithCommas);

new Vue({
  render: (h) => h(App),
  store,
  router,
  components: { App },
}).$mount("#app");
