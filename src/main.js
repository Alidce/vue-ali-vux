import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import APP_CONFIG from './config/app.config'
// 项目属性文件
import router from './router/index'
// 导入vue路由
import axios from './config/axios.js'
// 封装的axios请求
import api from './config/api'
// 配置接口
import 'normalize.css'
// 这里是移动优先原则的reset.css 建议使用这个
import "../app.css"
// 这里是全局的公共css样式
Vue.use(api)
Vue.prototype.$http = axios;
// 将axios请求挂载到vue实例
/**
 * 项目属性文件
 */
Vue.use(APP_CONFIG);
FastClick.attach(document.body)
Vue.config.productionTip = false
// vux全局toast
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
// 默认参数
// 路由全局守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const role = localStorage.getItem(APPCONFIG.abbr + '_username');
  // 这里用于身份认证
  if (!role && to.path !== '/' && to.path !== '/error') {
    next('/');
  } else {
    next();
  }
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
