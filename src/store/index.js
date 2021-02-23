import { createStore } from "vuex";

// Initialize the vuex store using the vuex module.
export default createStore({
  state: {
    selectedType: undefined,
    selectedMethod: undefined,
    selectedPath: ''
  },
  getters: {
    selectedType:   state => state.selectedType,
    selectedMethod: state => state.selectedMethod,
    selectedPath:   state => state.selectedPath,
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
    },
    resetSelectedMethod(state) {
      state.selectedMethod = undefined;
    }
  }
});