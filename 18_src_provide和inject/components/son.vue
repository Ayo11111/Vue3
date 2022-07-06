<template>
  <div class="son">
    <h3>我是孙组件  {{x.name}}---{{x.price}}</h3>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
  name: "Son",
  setup() {
      // 传过来的还是一个Proxy响应式的
      const x = inject('car')

      return {x}
  }
};
</script>

<style>
.son {
  background:skyblue;
  padding: 10px;
}
</style>