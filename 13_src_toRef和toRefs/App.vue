<template>
  <button @click="isShow = !isShow">切换/显示组件</button>
  <demo v-if="isShow"></demo>
</template>

<script>
import { ref } from "vue";
import demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    demo,
  },
  setup() {
    let isShow = ref(true);

    return {
      isShow,
    };
  },
};
</script>

<style></style>
