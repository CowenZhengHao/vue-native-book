## 生命周期

vue每个组件都是独立的，每个组件都有一个属于它的生命周期，从一个组件**创建、数据初始化、挂载、更新、销毁**，这就是一个组件所谓的生命周期。

![](https://cn.vuejs.org/images/lifecycle.png)

**1、beforeCreate（创建前）：**

在实例初始化之后，数据观测和事件配置之前被调用，此时组件的选项对象还未创建，el和data并未初始化，因此无法访问methods、data、computed和filters等上面的方法和数据。beforeCreate只是简单的初始化this。

```javascript
var app = new Vue({
    el: "#app",
    data:{
        message:"这里是一段信息"
    },
    beforeCreate() {
        console.log("beforeCreate");
        console.log(this.message) // undefined   
    }
})
```

> **适用场景：** 常用于初始化非响应式变量。

**2、created（组件被创建）：**

created组件被创建，可以访问data，methods，computed等方法和属性。

```javascript
var app = new Vue({
    el: "#app",
    data: {
        message: "这里是一段信息"
    },
    created() {
        // 组件被创建，可以访问到this、methods、computed等方法和属性
        // 无法访问到实例挂载对象 this.$el
        console.log(this)   
    }
})
```

> **适用场景：** 常用于简单的ajax请求，页面的初始化，注意此时的元素并未显示在网页上，所以一旦ajax请求过多，那么就会出现长时间的白屏现象。

**3、beforeMount（组件被挂载前）：**

初始化实例时检查发现有el字段，或者组件定义中有template时才会进入这个生命周期。在这个阶段可以访问data、methods、computed等属性或方法，仍然无法访问到$el元素。

在这个生命周期内，开始解析template或者挂载的元素节点。

**4、mounted（组件被挂载后）：**

挂在完成，也就是模板中的HTML渲染到HTML页面中，此时一般可以做一些ajax操作，mounted只会执行一次。

> **适用场景：** 常用于获取VNode信息和操作，ajax请求，此时元素已经显示在网页上，可以发送一些大量数据的请求。

**5、beforeUpdate（组件被更新前）：**

在数据更新之前被调用，发生在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，不会触发附加地重渲染过程。

**6、beforeDestroy（组件被销毁前）：**

在实例销毁之前调用，实例仍然完全可用。

- 这一步还可以用this来获取实例。
- 一般在这一步做一些重置的操作，比如清除掉组件中的定时器 和 监听的dom事件。

**7、destroyed（组件被销毁后）：**

在实例销毁之后调用，调用后，所以的事件监听器会被移出，所有的子实例也会被销毁，该钩子在服务器端渲染期间不被调用。





