## 路由基本配置

Vue Router 是 [Vue.js (opens new window)](http://cn.vuejs.org/)官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。

**1、配置步骤：**

使用vue-router的步骤分为以下三个步骤：

- 创建路由组件；
- 配置路由映射：组件和路径映射关系；
- 通过`<router-view>`定位路由显示位置。

```vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../component/home';
import About from '../component/about';
Vue.use(VueRouter);
// 配置路由映射关系
const routes=[
    {
        path:"/home",
        component:Home
    },
    {
        path:'/about',
        component:About
    }
];
const router = new VueRouter({
    routes,
    mode:'hash'
});
export default router;
// 定义路由
```

**2、mode模式：**

在路由定义中可以选择`mode`为hash模式，也可以是history模式，建议使用hash模式，使用history的话还需要配置服务器。

```vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../component/home';
import About from '../component/about';
Vue.use(VueRouter);
const routes=[
    {
        path:"",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:'/about',
        component:About
    }
];
const router = new VueRouter({
    routes,
    mode:'hash'
});
export default router;
```

**3、redirect路由跳转：**

使用`redirect`可以实现路由的跳转，这样有利于路由的默认跳转。

```vue
const routes=[
    {
        path:"",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:'/about',
        component:About
    }
];
```

**4、router-link：**

router-link默认解析为a标签，也可以使用`tag`属性定义其解析类型。

- `to`属性定义路由地址；
- `tag`属性定义`router-link`解析格式。
- `replace`属性定义浏览器上是否显示“返回 / 前进”按钮。

**5、事件跳转：**

路径的跳转不但可以通过`router-link`解析的链接跳转，也可以通过按钮事件触发跳转。

使用`this.$router.push()`方法进行路径跳转。

```vue
<template>
  <div class="wrap">
    <h1>{{message}}</h1>
    <button @click="goEvent('/home')">首页</button>
    <button @click="goEvent('/about')">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"app",
    data(){
        return {
            message:'这里是路由相关知识'
        }
    },
    methods:{
        goEvent(path){
            this.$router.replace(path);
        }
    }
}
</script>
```

**6、动态路由：**

在某些情况下，我们需要使用动态路由来获取指定页面。

在动态路由下，可以通过`this.$route`来获取相关的动态参数和查询参数。

```vue
const routes=[
    {
        path:"",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/user/:id',
        component:User
    }
];
<template>
  <div class="user-info">
      这里是<strong>{{$route.params.id}}</strong>的个人主页
  </div>
</template>
```

**7、路由懒加载：**

路由懒加载其实质就是借助于ES6中的`import`动态引入模块的概念，将组件使用时再去引入。

```vue
const User =()=>import('../component/user');
const routes=[
    {
        path:'/user/:id',
        component:User
    }
];
```

**8、路由嵌套：**

对于多重路由，我们可以在路由定义中再次定义`children`属性，该属性为一个数组，数组中定义不同的子路由。

```vue
const UserDetail =()=>import('../component/user-detail');
const UserRelate = ()=>import('../component/user-relate');
const routes=[
    {
        path:'/user/:id',
        component:User,
        children:[
            {
                path:"",
                redirect:"detail"
            },
            {
                path:"detail",
                component:UserDetail
            },
            {
                path:"relate",
                component:UserRelate
            }
        ]
    }
];
```

