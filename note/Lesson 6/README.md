## 计算属性和过滤器

计算属性和过滤器是存在于组件option配置中的。

**1、计算属性：**

在某些情况下，我们可能需要对数据进行一些转换后显示，或者需要将多个数据结合起来进行显示，计算属性就是为了处理这种需求而存在的。

```html
<div id="app">
    <ul>
        <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
    <p>共有{{size}}个课程</p>
</div>
<script>
    var app = new Vue({
        el: "#app",
        data:{
            list:["JavaScript高级编程","CSS世界","NodeJs实战"]
        },
        computed:{
            size(){
                return this.list.length
            }
        }
    })
</script>
```

**2、过滤器：**

`v-on`用于定义事件，也可以使用`@`符号作为简写语法糖进行定义。

```html
<div id="app">
    <p>当前时间：{{time}}</p>
    <button @:click="getTime">获取时间</button>
</div>
<script>
    var app = new Vue({
        el:"#app",
        data:{
            time:new Date().getTime()
        },
        methods:{
            getTime(){
                this.time=new Date().getTime();
            }
        }
    })
</script>
```

