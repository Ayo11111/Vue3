<template>
  <div class="app">
    <h3>我是APP组件 . {{ name }}---{{ price }}</h3>
    <Child></Child>
  </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import Child from "./components/child";
export default {
  name: "App",
  components: { Child },
  setup() {
    const car = reactive({ name: "兰博基尼", price: "40w" });
    provide("car", car);

    return { ...toRefs(car) };
  },
};
</script>

<style>
.app {
  background: red;
  padding: 10px;
}
</style>