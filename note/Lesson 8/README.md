## PROPS的使用

作为单项数据流，props可以很好的把数据从父组件往子组件传递。

**1、基本使用：**

所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。

```html
<div id="app">
    <h4 :class="{active:isactive,padding:ispadding}">这里是一个标题</h4>
    <button @click="switchEvent">切换</button>
</div>
<script>
    var app = new Vue({
        el: "#app",
        data:{
            isactive:false,
            ispadding:true
        },
        methods:{
            switchEvent(){
                this.isactive=!this.isactive;
                this.ispadding=!this.ispadding;
            }
        }
    })
</script>
```

**2、数组类名：**

v-bind也可以使用数组类名，数组中存放的直接是类名字符串。

```html
<div id="app">
    <h4 :class="[active,padding]">这里是一个标题</h4>
    <button @click="switchEvent">切换</button>
</div>
<script>
    var app = new Vue({
        el: "#app",
        data:{
            active:"",
            padding:""
        },
        methods:{
            switchEvent(){
                this.active="active";
                this.padding="padding";
            }
        }
    })
</script>
```

**3、绑定style：**

v-bind也可以直接绑定style，style绑定的是一个对象`v-bind:style="{属性名：属性值}"`。

```html
<div id="app">
    <h2 :style="{fontSize:fontsize}">{{message}}</h2>
    <button @click="addSize">增加大小</button>
</div>
<script>
    var app = new Vue({
        el: "#app",
        data:{
            message:"这里是一段标题",
            size:16
        },
        methods:{
            addSize(){
                this.size=this.size*2;
            }
        },
        computed:{
            fontsize(){
                return this.size+"px";
            }
        }
    })
</script>
```

