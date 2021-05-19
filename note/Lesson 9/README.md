## 插槽的使用

组件中的插槽是为了让我们封装的组件更加具有扩展性。

**1、基本使用：**

使用`slot`预留插槽，让组件更具有扩展性。插槽定义的原则是保留共性，预留不同，插槽里面还可以预留默认值。

```html
<div id="app">
    <titlecon></titlecon>
    <titlecon>
        <button>按钮</button>
    </titlecon>
</div>
<template id="con">
    <!-- 定义的插槽 默认值为span -->
    <h1>标题<slot><span>默认值</span></slot></h1>
</template>
<script>
    const titlecon=Vue.extend({
        template:'#con'
    });
    var app = new Vue({
        el:"#app",
        components:{
            titlecon
        }
    })
</script>
```

**2、具名插槽：**

单个组件中往往存在多个插槽，当我们需要改变某个指定位置的插槽内容时，就需要利用具名插槽进行占位处理。

```html
<div id="app">
    <titlecon>
        <span slot="txt">修改文本</span>
    </titlecon>
    <titlecon>
        <b slot="icon">$</b>
    </titlecon>
</div>
<template id="con">
    <h1>
        标题
        <slot name="txt">
            <span>默认值</span>
        </slot>
        <slot name="icon">
            <i>*</i>
        </slot>
    </h1>
</template>
<script>
    const titlecon=Vue.extend({
        template:'#con'
    });
    var app = new Vue({
        el:"#app",
        components:{
            titlecon
        }
    })
</script>
```

**3、作用域插槽：**

所谓作用域插槽其实就是父组件替换插槽的标签，但是内容由子组件提供。

```html
<div id="app">
    <!-- 作用域显示 -->
    <con>
        <ul slot-scope="slot">
            <li v-for="(item,index) in slot.data" :key="index">{{item}}</li>
        </ul>
    </con>
    <!-- 默认显示 -->
    <con></con>
</div>
<template id="con">
    <div class="con-wrap">
        <slot :data="list">
            <h4 v-for="(item,index) in list" :key="index">{{item}}</h4>
        </slot>
    </div>
</template>
<script>
    const con = Vue.extend({
        template: '#con',
        data() {
            return {
                list: ["应用", "小程序", "网页"]
            }
        }
    });
    var app = new Vue({
        el: "#app",
        components: {
            con
        }
    })
</script>
```

