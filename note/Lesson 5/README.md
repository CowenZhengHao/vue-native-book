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

