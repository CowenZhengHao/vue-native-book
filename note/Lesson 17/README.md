## 导航守卫

**1、全局守卫：**

在router中可以定义全局守卫用来完成对整个路由控制的操作，常见的全局守卫有：

- `router.beforeEach：`前置钩子
- `router.afterEach：`后置钩子

每个守卫方法接收三个参数：

- **`to: Route`**: 即将要进入的目标 [路由对象](https://router.vuejs.org/zh/api/#路由对象)
- **`from: Route`**: 当前导航正要离开的路由
- **`next: Function`**: 一定要调用该方法来 **resolve** 这个钩子。执行效果依赖 `next` 方法的调用参数。
  - **`next()`**: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 **confirmed** (确认的)。
  - **`next(false)`**: 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 `from` 路由对应的地址。
  - **`next('/')` 或者 `next({ path: '/' })`**: 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 `next` 传递任意位置对象，且允许设置诸如 `replace: true`、`name: 'home'` 之类的选项以及任何用在 [`router-link` 的 `to` prop](https://router.vuejs.org/zh/api/#to) 或 [`router.push`](https://router.vuejs.org/zh/api/#router-push) 中的选项。
  - **`next(error)`**: (2.4.0+) 如果传入 `next` 的参数是一个 `Error` 实例，则导航会被终止且该错误会被传递给 [`router.onError()`](https://router.vuejs.org/zh/api/#router-onerror) 注册过的回调。

```vue
// 全局前置守卫更改每个组件的页面title
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    next();
})
```

**2、路由独享守卫：**

查询参数的获取是通过`$route.query`对象进行获取的，在组件JavaScript中则是通过`this.route.query`对象进行获取的。

使用事件跳转时，也可以在事件中定义参数传递。

```vue
<router-link :to="{path:'/profile',query:{name:'cowen',age:33}}">用户档案</router-link>
<li>名字：{{$route.query.name}}</li>
<li>年龄：{{$route.query.age}}</li>
// 使用事件跳转
this.$router.push({
	path:'profile',
	{
		name:"cowen",
	    age:33
	}
})
```

**3、组件独享守卫：**

