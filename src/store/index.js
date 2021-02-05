import { createStore } from "vuex";

// initialize the vuex store using the vuex module.
export default createStore({
  state: {
    selectedType: undefined,
    selectedMethod: undefined,
    selectedPath: ''
  },
  getters: {
    selectedType: state   => state.selectedType,
    selectedMethod: state => state.selectedMethod,
    selectedPath: state => state.selectedMethod,
  },
  mutations: {
    setSelectedType(state, methodType) {
      state.selectedType = methodType;
    },
    setSelectedMethod(state, method) {
      state.selectedMethod = method;
    },
    setSelectedPath(state, path) {
      state.selectedPath = path;
    }
  }
});