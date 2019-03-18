# 机器人登录H5页面，这里是公共的代码

> 这是一个Vue项目
> 项目code.aliyun.com地址为git@code.aliyun.com:maxwell/public-h5A.git
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 项目文件说明

``` bash
#assets
静态文件，现在只是用来存放图片
#components
这里存放各个组件
--error.vue 此文件相当于404页面
--index.vue 此组件为tab文件即下方的导航
--login.vue 此组件为登录页
--register.vue 此组件为注册页面
--resetpsw.vue 此组件为重置密码组件
--robot
---rebotlist.vue此组件为机器人列表组件
---siginrobot.vue此组件为登录机器人组件
---me.vue 此组件为个人中心组件
---addgroup.vue 此组件为添加群组件
#config 
此文件夹存放接口文件以及项目配置文件
--api.js
--app.config.js
--config.js
#router
路由文件夹
```
