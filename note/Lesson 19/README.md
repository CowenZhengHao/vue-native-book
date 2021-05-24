## KEEP-ALIVE保持组件状态

keep-alive是vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。

**1、基本使用：**

`keep-alive`组件包裹`router-view`，使得`router-view`包裹的组件不会被重复创建和销毁，提高应用的性能。

```vue
<template>
  <div class="wrap">
    <h1>{{message}}</h1>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于我们</router-link>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>
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

