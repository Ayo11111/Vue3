<template>
  <input v-model="keyWord" type="text" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    // 自定义ref--名为：myRef
    // customRef里必须返回一个对象
    function myRef(value, delay) {
      // 防抖
      let timeId;
      return customRef((track, trigger) => {
        return {
          get: function () {
            console.log(`有人从myRef读取数据了，我把${value}给了他`);
            track(); // 通知Vue追踪value的变化（提前和get商量一下，让他认为是有用的）
            return value;
          },
          // value 修改后的值
          set: function (newValue) {
            console.log(`有人把myRef的数据修改为：${newValue}`);
            clearTimeout(timeId);
            timeId = setTimeout(() => {
              value = newValue;
              trigger(); // 提醒vue去重新解析模板
            }, delay);
          },
        };
      });
    }

    // let keyWord = ref("hello"); // 使用vue提供的ref
    let keyWord = myRef("hello", 1000); // 使用程序员自定义提供的ref

    return {
      keyWord,
    };
  },
};
</script>>

<style></style>
