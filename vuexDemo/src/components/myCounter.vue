<template>
  <div id="app">
    Clicked:
    <code>$store.state.count</code>{{ $store.state.count }} 或者
    <code>mapGetters.getCount</code>
    {{getCount}} times, count is
    <code>mapGetters.evenOrOdd</code>{{ evenOrOdd }}.<br/>
    <button @click="increment">+
      <code>mapActions.increment</code>
    </button><br/>
    <button @click="decrement">-
      <code>mapActions.decrement</code>
    </button> <br/>
    <input v-model="iptStr"  />
    <!-- <button @click="incrementIfOdd">Increment if odd</button><br/>
        <button @click="incrementAsync">Increment async</button><br/> -->

    <button @click="hello">test hello</button>
  </div>
</template>

<script>
//组建内使用vuex 其实是使用上面state.count state.mutations state.actions state.getters 4大项 分下面三步：
// 1 引入mapGetters, mapActions 里面包含所有你在store文件夹下 index.js里面所有定义的actions getters
// 2 computed里面注册mapGetters里面 具体要使用的getters
// 3 methods里面注册 mapActions 里面 具体要使用的actions 为什么看不到mutations 因为store/index.js里面 actions里面封装了对应的mutations 所以执行actions里面的某个action 实际上执行的是对应的mutation
// 3.1 修改数据只能通过 mutation改那为什么还要action因为mutation里面只能同步 不能异步
// 3.2 刚说只能mutation改state action里面怎么实现 通知mutation 改动呢？ 显式 提交commit +  mutation的方法名字 参考state/index  actions 3.2
// 4 经过上面三步注册后 使用的时候直接页面里面用就行了 参考template里面 <code></code>注释

//1 引入mapGetters, mapActions
import { mapGetters, mapActions } from "vuex";
export default {
  name: "myCounter",
  //2 单个组件内引入 对应的引用  ["evenOrOdd","getCount"] 语法：['方法名1’，‘方法名2’]
  computed: mapGetters(["evenOrOdd", "getCount"]),
  data() {
    return {
      iptStr:''
    };
  },
  methods: {
    hello() {
      alert("hello ");
    },
    ...mapActions([
      "increment",
      "decrement",
      "incrementIfOdd",
      "incrementAsync"
    ])
  }
};
</script>

<style>
code {
  color: blueviolet;
}
</style>
