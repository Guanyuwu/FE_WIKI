<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <test-ele></test-ele>
    <ele-table></ele-table>
    <el-col style="margin-top:30px">
      <el-button type="success">保存</el-button>
    </el-col>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TestEle from "./components/aside/testEle.vue";
import EleTable from "./components/table/table.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    TestEle,
    EleTable
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
