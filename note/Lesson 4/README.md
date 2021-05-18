## 事件处理

vue中的事件处理使用指令`v-on`来定义，而事件行数则是定义在vue实例中的`methods`中。

**1、事件处理：**

`v-for` 指令可以绑定数组的数据来渲染一个项目列表，在渲染过程中，必须要指定key值作为当前项的唯一标识符。

```html
<div id="app">
    <p>当前时间：{{time}}</p>
    <button v-on:click="getTime">获取时间</button>
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

**2、语法糖：**

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

**3、参数传递：**

定义在`methods`中的函数，如果不需要传递参数时，直接调用函数名即可，需要传递函数参数时，调用时要传递参数，否则会把当前触发事件的对象传递过来，对于既需要传递参数，又需要传递事件对象的情况，我们只需要使用`$event`固定事件对象即可。

```html
<div id="app">
    <button @click="clickEvent">不传递参数</button>
    <button @click="clickEvent2('打印文本')">传递参数</button>
    <button @click="clickEvent3('打印文本',$event)">传递参数/事件对象</button>
</div>
<script>
    var app = new Vue({
        el:"#app",
        methods:{
            clickEvent(){
                console.log('不需要传递参数');
            },
            clickEvent2(str){
                console.log(str)
            },
            clickEvent3(str,event){
                console.log(str);
                console.log(event);
            }
        }
    })
</script>
```

**4、事件修饰符：**

事件中的修饰符可以用于阻止事件冒泡等操作，常见的修饰符如下：

- `.stop`：阻止事件向父级冒泡。
- `.prevent`：阻止默认事件的触发。
- `.native`：监听组件根元素的原生事件。
- `.once`：只触发一次回调。

```html
<div id="app">
    <a href="http://www.baidu.com" @click.prevent="clickEvent">链接跳转</a>
</div>
<script>
    var app = new Vue({
        el:"#app",
        methods:{
            clickEvent(){
                console.log('阻止默认事件');
            }
        }
    })
</script>
```

