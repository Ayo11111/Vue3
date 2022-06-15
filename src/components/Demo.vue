<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
// 引入渲染函数
// import { h } from "vue";
import { reactive, ref,watch } from "vue";
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
    
    let sum = ref(0)
    let msg = ref('你好啊')
    
    // 情况一：监视ref所定义的一个响应式数据
    // watch('sum',(newVal,oldVal)=>{
    //   console.log(`sum变化了`,newVal,oldVal);
    // },{immediate:true,deep:true})

    // 情况二：监视ref所定义的多个响应式数据
    watch([sum,msg],(newVal,oldVal)=>{
      console.log(`sum变化了`,newVal,oldVal);  // 监视多个时，new和old返回的都是数组，然后参数也是数组，并且是按顺序返回
    },{immediate:true,deep:true})

    // 返回一个对象（常用）
    return {
      sum
    };
  },
};
</script>

<style></style>
