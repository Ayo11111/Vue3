<template>
  <div class="app">
    <h3>我是APP组件 }</h3>
  </div>
</template>

<script>
import { readonly,ref,reactive, toRefs,isReactive,isRef,isReadonly,isProxy } from "vue";
export default {
  name: "App",
  setup() {
    const car = reactive({ name: "兰博基尼", price: "40w" });
    const sum = ref(0)
    const car2 = readonly(car) 

    console.log(isReactive(car2));
    console.log(isRef(sum));
    console.log(isReadonly(car2));
    console.log(isProxy(sum));

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