<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}</h2>
  <button @click="person.name = '李四'">修改姓名</button>
  <button @click="person.age = 24">修改年龄</button>
  <button @click="person.age = 24">修改年龄</button>
</template>

<script>
// 引入渲染函数
// import { h } from "vue";
import { reactive, ref, watch } from "vue";
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
    let sum = ref(0);
    let person = ref({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 21,
        },
      },
    });

    // watch是监视一个结构，要是这里的sum.value的话就直接相当于写0，所以不用.value
    watch(sum, (newVal, oldVal) => {
      console.log("sum发生变化了", newVal, oldVal);
    });

    // 同理，这里面的value是一个对象，直接监视不到，所以要不就是要.value，或者开启deep
    watch(person.value, (newVal, oldVal) => {
      console.log("sum发生变化了", newVal, oldVal);
    });

    // 返回一个对象（常用）
    return {
      sum,
      person,
    };
  },
};
</script>

<style></style>
