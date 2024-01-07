import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'uno.css'
import './app.scss'
const App = createApp({
  globalData: {
    // envConfig: config.env
  },
  onShow(options) {
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})



App.use(createPinia())

export default App
