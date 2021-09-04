// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css' //新添加，避免后期打包样式不同，要放在import App from './App';之前
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import echarts from 'echarts'
import { VueJsonp } from 'vue-jsonp'//解决跨域
Vue.use(VueJsonp)

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)   //新添加
Vue.config.productionTip = false
Vue.prototype.$http= axios

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>',
// })
// running-time 模式
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app")
