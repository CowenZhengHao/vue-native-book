## 列表渲染和逻辑判断

vue中的列表渲染使用`v-for`循环列表，而逻辑判断则是使用`v-if / v-else`等完成。

**1、列表渲染：**

`v-for` 指令可以绑定数组的数据来渲染一个项目列表，在渲染过程中，必须要指定key值作为当前项的唯一标识符。

```html
<ul>
    <li v-for="(item,index) in list" key="index">
        <dl>
            <dt>{{item.name}}</dt>
            <dd>年龄：{{item.age}}</dd>
            <dd>籍贯：{{item.address}}</dd>
        </dl>
    </li>
</ul>
<script>
    var app = new Vue({
        el:"#app",
        data:{
            list:[
                {
                    name:"cowen",
                    age:33,
                    address:"上海市浦东新区"
                },
                {
                    name:"Jim",
                    age:26,
                    address:"北京东直门"
                },
                {
                    name:"MeiMie",
                    age:22,
                    address:"东京"
                }
            ]
        }
    })
</script>
```

**2、v-if：**

`v-if`结合`v-else`可以轻松完成逻辑判断。

```html
<div id="app">
    <div v-if="show">显示</div>
</div>
<script>
    var app = new Vue({
        el:"#app",
        data:{
            show:true
        }
    })
</script>
```



