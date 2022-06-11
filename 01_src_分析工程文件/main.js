// vue2引入的是Vue构造函数，vue3引入一个createAPP的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

// 创建应用实例对象-app（类似于之前vue2中的vm，但是app比vm更轻）
const app = createApp(App)

// 挂载 
app.mount('#app')