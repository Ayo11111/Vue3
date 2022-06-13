<template>
  <demo @hello="sayHello" msg="信息" school="学校">
  <!-- 插槽简写 #... -->
    <template #qwe>
      <span>hello</span>
    </template>

    <!-- vue3中 slot=''的写法已经废除，使用v-slot或者简写 -->
    <template v-slot:ahq>
      <span>hello</span>
    </template>
  </demo>
</template>

<script>
import demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    demo,
  },

  setup() {
    function sayHello(value) {
      alert(`我被触发了，值是${value}`);
    }

    return {
      sayHello,
    };
  },
};
</script>

<style></style>
