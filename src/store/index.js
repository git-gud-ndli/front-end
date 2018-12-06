import Vue from "vue";
import Vuex from "vuex";
import { users } from "./users.module";
import { auth } from "./auth.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    users,
    auth
  }
});

export default store;
