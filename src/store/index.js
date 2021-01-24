
import { createStore } from "vuex";

// initialize the vuex store using the vuex module.
createStore({
  state: {
    selectedMethod: undefined,
    currentLang: 'en'
  },
  mutations: {
    changeLang(state, newLang) {
      state.currentLang = newLang;
    }
  },
  actions: {},
});