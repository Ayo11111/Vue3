<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="speak">说话</button>
</template>

<script>
// 引入渲染函数
// import { h } from "vue";
export default {
  name: "App",
  setup() {
    let name = "张烨";
    let age = 30;

    function speak() {
      alert(`我是${name},今年${age}岁`);
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      speak,
    };

    // 返回一个函数（渲染函数）
    // return () => h("h1", "咯咯鸡");
  },
};
</script>

<style></style>
