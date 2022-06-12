<template>
  <h1>一个人的信息</h1>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2 v-show="person.job.sex">性别：{{ person.job.sex }}</h2>
  <h3>职位：{{ person.job.type }}</h3>
  <h3>爱好：{{ person.hobby[0] }}</h3>
  <h3>薪水：{{ person.job.salary }}</h3>
  <h3>测试深层次：{{ person.a.b.c }}</h3>
  <button @click="changeInfo">改变信息</button>
  <button @click="addInfo">添加一个信息</button>
  <button @click="deleteInfo">删除一个信息</button>
</template>

<script>
// 引入渲染函数
// import { h } from "vue";
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // reactive函数支持支对象类型的，不支持基础数据类型
    // 而且这个函数支持深层次的
    let person = reactive({
      name: "张烨",
      age: 30,
      job: {
        type: "前端",
        salary: "30k",
      },
      a: {
        b: {
          c: 1,
        },
      },
      hobby: ["喝酒"],
    });

    function changeInfo() {
      person.name = "罗杰";
      person.age = "18";
      person.hobby[0] = "亲亲";
      person.job.type = "服务员";
      person.job.salary = "3k";
      person.a.b.c = 2;
    }

    // 在vue3中可以不使用$set,就可以直接对数组或者对象中的属性进行crud，并且还是响应式的
    function addInfo() {
      person.job.sex = "男";
    }

    function deleteInfo() {
      delete person.name;
    }

    // 返回一个对象（常用）
    return {
      person,
      changeInfo,
      addInfo,
      deleteInfo,
    };
  },
};
</script>

<style></style>
