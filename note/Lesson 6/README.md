## 计算属性和过滤器

计算属性和过滤器是存在于组件option配置中的。

**1、计算属性：**

在某些情况下，我们可能需要对数据进行一些转换后显示，或者需要将多个数据结合起来进行显示，计算属性就是为了处理这种需求而存在的。计算属性其实质就是一对`getter / setter`，一般情况下我们我们只使用`getter`

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

> 计算属性和方法都能实现对数据的加工处理，但是计算属性只有数据发生变化时才会触发执行，而方法是调用即执行，计算属性是有缓存的，性能会更好。

**2、过滤器：**

过滤器实质就是对数据进行二次加工处理，使用`|`进行分割。

```html
<div id="app">
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <h4>{{item.name}}</h4>
            <p>{{item.price | getprice}}</p>
        </li>
    </ul>
</div>
<script>
    var app = new Vue({
        el: "#app",
        data:{
            list:[
                {
                    name:"JavaScript高级编程",
                    price:45
                },
                {
                    name:"CSS世界",
                    price:55
                }
            ]
        },
        filters:{
            getprice:function(price){
                return price.toFixed(2);
            }
        }
    })
</script>
```

