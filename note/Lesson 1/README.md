## VUE初体验

vue是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。

在第一阶段，我们使用CDN的形式来引入vue。

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

使用`new Vue`实例化应用，便可以创建一个vue应用。

```html
<div id="app">
    {{message}}
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

