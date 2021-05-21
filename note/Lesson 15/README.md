## 路由基本配置

Vue Router 是 [Vue.js (opens new window)](http://cn.vuejs.org/)官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。

**1、安装使用：**

使用`npm i vue-router -S`安装即可。

**2、使用步骤：**

vue-router在使用过程中，遵循以下步骤：

- 使用`vue.use()`安装router插件：
- 创建vueRouter对象，并导出该对象；
- 在vue实例中使用该router对象。

```javascript
// router定义
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter({
    routes:[
    ],
    mode:'hash'
});
export default router;
// 实例中使用
import Vue from 'vue';
import App from './component/app';
import router from './router';
new Vue({
    el: "#app",
    router,
    render: h => h(App)
})
```

