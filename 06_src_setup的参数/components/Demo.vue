<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">触发一下传的自定义事件</button>
</template>

<script>
// 引入渲染函数
// import { h } from "vue";
import { reactive } from "vue";
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
  setup(props, context) {
    console.log(props); // 组件外的传值

    console.log(context);
    console.log(context.attrs); // 相当于vue2的$attrs,组件外有传但是组件内没接收的值就会在这里
    console.log(context.emit); // 触发自定义事件
    console.log(context.slots); // 插槽的信息，相当于vue2的$slots

    let person = reactive({
      name: "张烨",
      age: 18,
    });

    function test() {
      context.emit("hello", 666);
    }

    // 返回一个对象（常用）
    return {
      person,
      test,
    };
  },
};
</script>

<style></style>
