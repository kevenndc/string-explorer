
import { createStore } from "vuex";

// initialize the vuex store using the vuex module.
createStore({
  state: {
    selectedMethod: undefined,
  },
  mutations: {},
  actions: {},
});

// initialize the internationalization plugin on the vue instance.

// function getStartLang() {
//   let userLang =  navigator.language;
//   userLang.replace('-', '_');

//   return acceptedLangs.includes(userLang) ? userLang : 'en';
// }