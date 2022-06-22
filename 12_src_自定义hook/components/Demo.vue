<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前鼠标的坐标为x:{{ point.x }} y:{{ point.y }}</h2>
</template>

<script>
// 引入渲染函数
// import { h } from "vue";
import { ref } from "vue";
// 引用hook函数，类似于mixin
import usePoint from '../hooks/usePoint'
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
    let point = usePoint()
    // 返回一个对象（常用）
    return {
      sum,
      point
    };
  },
};
</script>

<style></style>
