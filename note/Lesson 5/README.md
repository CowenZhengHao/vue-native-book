## 组件的使用

单个应用是由多个小的功能块组成的，把功能单个拆分就是组件的价值。

**1、全局组件：**

使用`Vue.component()`可以注册一个全局组件，全局组件可以在多个实例中使用。

```html
<div id="app">
    <title-component title="这里是标题"></title-component>
</div>
<script>
    // 注册全局组件
    Vue.component('title-component',{
        props:['title'],
        template:`<h2>{{title}}</h2>`
    })
    var app = new Vue({
        el:"#app"
    })
</script>
```

**2、局部组件：**

很多时候，定义的组件只属于某一个父组件，这就需要使用定义的组件是局部的，只属于某个父组件。

```html
<div id="app">
    <titlecomponent title="这里是标题"></titlecomponent>
</div>
<script>
    // 注册局部组件
    const titlecomponent=Vue.extend({
        props:['title'],
        template:`<h2>{{title}}</h2>`
    })
    var app = new Vue({
        el:"#app",
        components:{
            titlecomponent
        }
    })
</script>
```

**3、父子组件：**

组件的定义不仅可以在vue实例中定义，也可以在组件中定义，这样就使得两个组件有了从属关系。

```html
<div id="app">
    <parentcon></parentcon>
</div>
<script>
    // 注册子组件
    const sonCon = Vue.extend({
        props: ['content'],
        template: `<div class="son">{{content}}</div>`
    });
    // 注册父组件
    const parentCon = Vue.extend({
        template: `<div class="parent">
                <soncon content="这里是子组件的内容"></soncon>
            </div>`,
        components: {
            soncon: sonCon
        }
    })
    var app = new Vue({
        el: "#app",
        components: {
            parentcon: parentCon
        }
    })
</script>
```

**4、模板抽离：**

组件在定义时，可以在`template`中定义组件的模板字符串，也可以将模板与js代码进行分离。

- 第一种方法：使用<script type="text/x-template"></script>标签：

```html

<div id="app">
    <con content="这里是组件内容"></con>
</div>
// 定义模板
<script type="text/x-template" id="temp">
    <div class="con-wrap">
        {{content}}
    </div>
</script>
<script>
    // 注册组件
    const con = Vue.extend({
        props: ['content'],
        template: "#temp"
    })
    var app = new Vue({
        el: "#app",
        components: {
            con
        }
    })
</script>
```

- 第二种方法：使用`<template></template>`标签定义模板内容：

```html
<div id="app">
    <con content="这里是组件内容"></con>
</div>
<template id="temp">
    <div class="con-wrap">
        {{content}}
    </div>
</template>
<script>
    // 注册组件
    const con = Vue.extend({
        props: ['content'],
        template: "#temp"
    })
    var app = new Vue({
        el: "#app",
        components: {
            con
        }
    })
</script>
```

**5、组件中的data必须是函数：**

在vue实例中，数据的定义是一个对象，但是在组件中，无法访问到实例的数据，组件有自己的数据data，但是不是个对象，只能是一个函数。

**6、父组件与子组件通信：**

父组件向子组件通信，是通过`props`向子组件传递的。

```html
<div id="app">
    <ul>
        <con v-for="(name,index) in list" :key="index" :name="name"></con>
    </ul>
</div>
<template id="con">
    <li>当前人物名称为：{{name}}</li>
</template>
<script>
    // 注册组件
    const con = Vue.extend({
        props:["name"],
        template:"#con"
    })
    var app = new Vue({
        el:"#app",
        data:{
            list:["小敏","小明","小梅"]
        },
        components:{
            con
        }
    })
</script>
```

**7、子组件与父组件通信：**

子组件通过自定义事件通知父组件触发相关操作。子组件通过`this.$emit()`触发父组件事件完成回调。

```html
<div id="app">
    <con @getlist="getlistevent" v-for="(category,index) in categorys" :key="index" :category="category"></con>
</div>
<template id="con">
    <button @click="getlist(category)">{{category}}</button>
</template>
<script>
    // 注册子组件
    const con = Vue.extend({
        props: {
            category: {
                type: String
            }
        },
        template: "#con",
        methods: {
            getlist(category) {
                this.$emit('getlist', category)
            }
        }
    });
    var app = new Vue({
        el: "#app",
        data: {
            categorys: ["家电", "汽车", "食品"]
        },
        components: {
            con
        },
        methods: {
            getlistevent(name) {
                console.log(`父组件----` + name)
            }
        }
    })
</script>
```

**8、父子组件的访问方式：**

有时候我们需要父组件直接访问子组件，子组件直接访问父组件，或者子组件访问根组件。

- 父组件访问子组件：使用`$children`或者`$refs`。
- 子组件访问父组件：使用`$parent`。

```javascript
// 注册子组件
const titlecon=Vue.extend({
    name:"title",
    template:"#title",
    props:['title']
});
const menucon=Vue.extend({
    title:"menu",
    template:"#menu",
    props:['menu']
});
var app = new Vue({
    el:"#app",
    components:{
        titlecon,
        menucon
    },
    methods: {
        getson(){
            console.log(this.$children[1]);
            console.log(this.$refs.menu)
        }   
    }
})
```





