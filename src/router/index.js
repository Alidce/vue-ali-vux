import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 这里使用路由的懒加载模式
// meta中的title可以动态修改title需求
export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: resolve => require(['../views/login.vue'], resolve),
    meta: {
      title: "登录"
    }
  },
  {
    path: '/error',
    name: 'error',
    component: resolve => require(['../views/error.vue'], resolve),
    meta: {
      title: "错误页面"
    }
  },
  {
    path: '/index',
    name: 'index',
    component: resolve => require(['../views/index.vue'], resolve),
    meta: {
      title: "首页"
    },
    children: [
      {
        path: '/me',
        name: 'me',
        component: resolve => require(['../views/me.vue'], resolve),
        meta: {
          title: "个人中心"
        },
      }]
  }
  ]
})
