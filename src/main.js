import Vue from "vue";
import App from "./pages/PageHome.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
