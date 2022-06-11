<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>职位：{{ job.type }}</h3>
  <h3>薪水：{{ job.salary }}</h3>
  <button @click="changeInfo">改变信息</button>
</template>

<script>
// 引入渲染函数
// import { h } from "vue";
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 数据要想是响应式的，得用ref函数去的定义
    let name = ref("张烨");
    let age = ref(30);
    const job = ref({
      type:'前端',
      salary: '30k'
    })

    
    function changeInfo() {
      // 更改时要用ref函数定义变量里的value
      name.value = '罗杰'
      age.value = '18'

      job.value.type = '服务员'
      job.value.salary = '3k'

      // ref函数处理过的数据叫做ref引用对象
      console.log(name,age);

      // 如果传给ref的是一个引用数据类型，那么他的value就是一个proxy
      // 如果传给ref的是一个基础数据类型，那么就是一个ref对象（引用对象）
      console.log(job.value);
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      job,
      changeInfo
    };
  },
};
</script>

<style></style>
