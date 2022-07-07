<template>
  <div class="child">
    <h3>我是子组件</h3>
    <Son></Son>
  </div>
</template>

<script>
import Son from "./son.vue";
export default {
  name: "Child",
  components: { Son },
};
</script>

<style>
.child {
  background: pink;
  padding: 10px;
}
</style>