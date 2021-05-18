## VUE中的数据绑定

vue中的数据绑定是双向的，我们可以使用`v-bind / v-model`等指令完成数据的双向绑定。

**1、v-bind：**

使用v-bind可以轻松实现数据的双向绑定，绑定的数据来源于vue实例中的data。

```html
<div id="app">
    <a href="#" :title="message">{{message}}</a>
</div>
<script>
    var app = new Vue({
        el:"#app",
        data:{
            message:"这里是一段信息"
        }
    })
</script>
```

**2、v-model：**

对于用户输入的数据，可以使用v-model轻松实现双向绑定。

```html
<div id="app">
    <p>当前输入：{{message}}</p>
    <input type="text" v-model="message" placeholder="请输入内容" />
</div>
<script>
    var app = new Vue({
        el:"#app",
        data:{
            message:""
        }
    })
</script>
```





