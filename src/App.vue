<template>
  <div class="app">
    <h3>我是APP组件</h3>

    <!-- suspense有两个插槽，一个default，一个fallback，前者是展示内容，后者是组件尚未展示时的内容 -->
    <Suspense>
      <template #default>
        <Child></Child>
      </template>

      <template v-slot:fallback>
        <h3>稍等，加载中....</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// 静态引入会等所有组件都引入完毕才会出现app组件
// import Child from "./components/child"; // 静态引入
import { defineAsyncComponent } from "vue";

// 动态引入（异步引入）不会出现等待，app可以先出现
let Child = defineAsyncComponent(() => import("./components/child.vue")); // 异步引入
export default {
  name: "App",
  components: { Child },

  setup() {
    // 函数柯里化
    function curry(func) {
      return function curried(...args) {
        // 这里的func.length拿的是func这个函数的参数长度（使用函数对象的 length 属性可以获取函数的形参个数）
        if (args.length >= func.length) {
          return func.apply(null, args);
        } else {
          return function (...args2) {
            return curried.apply(null, args2.concat(args));
          };
        }
      };
    }

    function sum(a, b, c) {
      return a + b + c;
      // return {}
    }

    const x = curry(sum);

    console.log(x(1, 2, 3));
    console.log(x(1)(2, 3));
    console.log(x(1)(2)(3));
  },
};
</script>

<style>
.app {
  background: red;
  padding: 10px;
}
</style>