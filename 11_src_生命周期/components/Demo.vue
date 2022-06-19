<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
// 引入渲染函数
// import { h } from "vue";
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "demo",
  props: ["msg", "school"],
  // vue3传自定义事件得在这里使用emits里接收
  emits: ["hello"],

  /**
   * 且setup会在beforeCreate之前先执行一次
   * @param {*} props 组件外传输进来的值
   * @param {*} context 里面包含emit attrs slots
   */

  /**
   * @备注 当钩子api和配置项的形式同时存在时，api的顺序是比配置项的形式优先级更高
   */
  setup() {
    console.log(`---setup---`);
    let sum = ref(0);

    // 通过组合式API的形式去使用生命周期钩子
    onBeforeMount(() => {
      console.log(`---onBeforeMount---`);
    });
    onMounted(() => {
      console.log(`---onMounted---`);
    });
    onBeforeUpdate(() => {
      console.log(`---onBeforeUpdate---`);
    });
    onUpdated(() => {
      console.log(`---onUpdated---`);
    });
    onBeforeUnmount(() => {
      console.log(`---onBeforeUnmount---`);
    });
    onUnmounted(() => {
      console.log(`---onUnmounted---`);
    });

    // 返回一个对象（常用）
    return {
      sum,
    };
  },

  // 通过配置项的形式使用生命周期
  // beforeCreate() {
  //   console.log(`---beforeCreate---`);
  // },
  // created() {
  //   console.log(`---created---`);
  // },
  // beforeMount() {
  //   console.log(`---beforeMount---`);
  // },
  // mounted() {
  //   console.log(`---mounted---`);
  // },
  // beforeUpdate() {
  //   console.log(`---beforeUpdate---`);
  // },
  // updated() {
  //   console.log(`---updated---`);
  // },
  // beforeUnmount() {
  //      console.log(`---beforeUnmount---`);
  // },
  // unmounted() {
  //   console.log(`---unmounted---`);
  // }
};
</script>

<style></style>
