<template>
  <div class="son">
    <h3>我是孙组件</h3>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from "./dialog.vue";
export default {
  name: "Son",
  components: { Dialog },
};
</script>

<style>
.son {
  background: skyblue;
  padding: 10px;
}
</style>