<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}</h2>
  <button @click="name = '李四'">修改姓名</button>
  <button @click="age = 24">修改年龄</button>
  <button @click="job.j1.salary++">修改薪资</button>
</template>

<script>
// 引入渲染函数
// import { h } from "vue";
import { reactive, toRefs, ref, readonly, shallowReadonly } from "vue";
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
  setup() {
    // let person = shallowReactive({ // 只是第一层数据是响应式的
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 21,
        },
      },
    });

    // 只可读取，不可修改
    // person = readonly(person)

    // 只有对象的第一层是只读的
    person = shallowReadonly(person)

    let sum = ref(0);
    sum = readonly(sum)

    // 返回一个对象（常用）
    return {
      sum,
      ...toRefs(person),
    };
  },
};
</script>

<style></style>
