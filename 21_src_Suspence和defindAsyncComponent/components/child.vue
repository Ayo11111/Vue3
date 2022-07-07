<template>
  <div class="child">
    <h3>我是子组件</h3>
    {{ sum }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Child",
  // 这个组件的setup可以返回一个promise，是因为在父组件中使用了异步引入和suspense
  async setup() {
    let sum = ref(0);

    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(sum);
      }, 3000);
    });

    return await p;
  },
};
</script>

<style>
.child {
  background: pink;
  padding: 10px;
}
</style>