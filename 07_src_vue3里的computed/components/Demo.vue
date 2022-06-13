<template>
  <h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.firstName" />
  <br />
  名：<input type="text" v-model="person.lastName" />
  <br />
  全名：<span>{{ person.fullName }}</span>
  全名：<input type="text" v-model="person.fullName">
</template>

<script>
// 引入渲染函数
// import { h } from "vue";
import { reactive, computed } from "vue";
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
      firstName: "张",
      lastName: "烨",
    });

    // vue3计算属性--简写
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });

    // vue3计算属性--完整写法
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },

      set(value) {
        console.log(value);
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    // 返回一个对象（常用）
    return {
      person,
    };
  },
};
</script>

<style></style>
