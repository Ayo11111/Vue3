<template>
  <h4>{{ person }}</h4>
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
import { ref, reactive, toRef,toRefs } from "vue";
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
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 21,
        },
      },
    });

    // 这里相当于是name1 = 张三
    // const name1 = person.name;
    // console.log("🚀 ~ file: Demo.vue ~ line 37 ~ setup ~ name1", name1);

    // // 使用toRef后，是存在一个引用关系，会引用传入的对象指的属性，改name2源数据也会同步更改
    const name2 = toRef(person, "name");
    console.log("🚀 ~ file: Demo.vue ~ line 40 ~ setup ~ name2", name2);

    // toRefs可以把对象里的全部属性变为ref，所以不需要传第二个参数 （不过只能展开第一层，要是有像job这样的深层结构，在模板中使用时还是得job.j1.salary,不过不用person.xxx）
    const x = toRefs(person)
    console.log("🚀 ~ file: Demo.vue ~ line 46 ~ setup ~ x", x)
    

    // 返回一个对象（常用）
    return {
      person,
      // name: toRef(person, "name"),
      // age: toRef(person, "age"),
      // salary: toRef(person.job.j1, "salary"),
      ...toRefs(person)
    };
  },
};
</script>

<style></style>
