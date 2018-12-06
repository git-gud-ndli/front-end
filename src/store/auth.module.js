const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ dispatch, commit }) {},
    logout({ commit }) {}
  },
  mutations: {
    login(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    logout(state) {
      state.status = {};
      state.user = null;
    }
  }
};
