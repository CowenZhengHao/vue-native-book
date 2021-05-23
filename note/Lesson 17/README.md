## 导航守卫

导航守卫

```vue
const routes=[
    {
        path:'/user/:id',
        component:User
    }
];
<template>
  <div class="user-info">
      这里是<strong>{{$route.params.id}}</strong>的个人主页<br/>
      {{userid}}
  </div>
</template>

<script>
export default {
    name:'user',
    computed:{
        userid(){
            return this.$route.params.id;
        }
    }
}
</script>
```

**2、查询参数传递：**

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

