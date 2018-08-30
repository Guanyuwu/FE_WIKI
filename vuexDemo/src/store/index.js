import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

//状态定义的地方 数据定义在这里
const state = {
  count: 0
};

//state 的拷贝 动态变化
const getters = {
  getCount() {
    return state.count;
  },
  evenOrOdd: state => (state.count % 2 === 0 ? "even" : "odd")
};
//只有这个才能修改state上面的状态
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
};

// 最后还是执行mutation 最后mutation通过action包装一下 供vue组件引入mapActions使用
const actions = {
   // actions 3.2
  increment: ({ commit }) => commit("increment"),
  decrement : ({commit}) => commit("decrement")
};
//导出vuex实例 供main.js  注册到根组件上  方便全局使用
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
