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
    let msg = ref("你好啊");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 21,
        },
      },
    });

    // 情况一：监视ref所定义的一个响应式数据
    // watch('sum',(newVal,oldVal)=>{
    //   console.log(`sum变化了`,newVal,oldVal);
    // },{immediate:true,deep:true})

    // 情况二：监视ref所定义的多个响应式数据
    // watch([sum,msg],(newVal,oldVal)=>{
    //   console.log(`sum变化了`,newVal,oldVal);  // 监视多个时，new和old返回的都是数组，然后参数也是数组，并且是按顺序返回
    // },{immediate:true,deep:true})

    /* 
    情况三：监视reactive所定义的一个响应式数据的全部属性时
            1、无法获取正确的oldValue （如果需要可以把他单拎出去用ref创建）
            2、强制开启了深度监视（deep配置无效）
    */
    // watch(person,(newVal,oldVal)=>{
    //     console.log('person变化了',newVal,oldVal);
    // },{deep:false}) // 此处的deep失效

    // 情况四：监视reactive所定义的一个响应式数据中的某个属性时  (第一个参数得是函数的返回值)
    // watch(()=> person.name,(newVal,oldVal)=>{
    //     console.log('person.name变化了',newVal,oldVal);
    // },{deep:false}) // 此处的deep失效

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性时  (第一个参数得是数组，其中每个元素是函数的返回值) (直接一个函数返回数组也行)
    watch(
      () => [person.name, person.age],
      (newVal, oldVal) => {
        console.log("person.name或person.age变化了", newVal, oldVal);
      }
    ); // 此处的deep失效
    // watch([()=> person.name,()=> person.age],(newVal,oldVal)=>{
    //     console.log('person.name或person.age变化了',newVal,oldVal);
    // },) // 此处的deep失效

    // 特殊情况 (监视的是对象就拿不到oldval)
    // watch(()=>person.job,(newVal,oldVal)=>{
    //     console.log('person.name或person.age变化了',newVal,oldVal);
    // },{deep:false}) // 此处由于监视的是reactive定义的对象中的某个属性（对象），所以deep生效

    // 返回一个对象（常用）
    return {
      sum,
      person,
    };
  },
};
</script>

<style></style>
