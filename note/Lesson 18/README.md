## VUEX的基本配置

Vuex是一个专门为vue.js应用程序开发的状态管理模式。

**1、基本使用：**

类似于vue-router，vuex的使用也是需要引入、定义store和导出store。

```vue
// store定义
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({});
export default store

// store引入并使用
import Vue from 'vue'
import App from './App.vue'
import store from './store';
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
```

**2、基本配置：**

- `include` - 字符串或正则表达式。只有名称匹配的组件会被缓存。
- `exclude` - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
- `max` - 数字。最多可以缓存多少组件实例。

**3、对应事件：**

当组件在 `<keep-alive>` 内被切换，它的 `activated` 和 `deactivated` 这两个生命周期钩子函数将会被对应执行。

```vue
export default {
    name:"about",
    data(){
        return {
            path:'/home/detail'
        }
    },
    created(){
        console.log("home is created");
    },
    destroyed(){
        console.log("home is destroyed")
    },
    activated(){
        // 该函数只有组件被keep-alive保持状态时才会有效
        this.$router.push(this.path);
    },
    beforeRouteLeave (to, from, next) {
        this.path=this.$route.path;
        next();
    }
}
```

