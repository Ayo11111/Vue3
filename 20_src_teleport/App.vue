<template>
  <div class="app">
    <h3>我是APP组件</h3>
    <Child></Child>
  </div>
</template>

<script>
import Child from "./components/child";
export default {
  name: "App",
  components: { Child },
};
</script>

<style>
.app {
  background: red;
  padding: 10px;
}
</style>