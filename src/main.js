import Vue from "vue";
import Fragment from "vue-fragment";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import apolloProvider from "./vue-apollo";

Vue.use(Fragment.Plugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
