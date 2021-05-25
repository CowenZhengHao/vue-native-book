## VUEX的异步处理和模块

通常的情况下，vuex要求mutation中的方法必须是同步方法，而对于异步参照则是要求我们定义在**`actions`**中去。

**1、基本使用：**

actions类似于mutation，但是是用来代替mutation进行异步操作的。

actions异步更改state中的值，首先还是要触发mutation中的事件，在组件中则是通过`this.$store.dispatch(actionname)`进行异步触发

```vue
// actions的定义
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        counts:0
    },
    mutations:{
        addEvent(state){
            state.counts++;
        }
    },
    actions:{
        syncaddEvent(context){
            setTimeout(()=>{
                context.commit('addEvent');
            },2000)
        }
    }
});
export default store

// 组件中使用dispatch触发异步操作
export default {
    name:'counter',
    methods:{
      addEvent(){
        this.$store.dispatch('syncaddEvent');
      }
    }
}
```

> actions中定义的异步函数，默认参数**`context`**其实质就是**`$store`**对象，所以可以直接使用**`context.commit('mutation')`**触发mutation中的同步操作。

**2、异步回调：**

在`actions`中定义的异步函数，可以在异步操作完成后执行回调函数，回调函数可以使用Promise对象进行定义。

```vue
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        counts: 0
    },
    mutations: {
        addEvent(state) {
            state.counts++;
        }
    },
    actions: {
        syncaddEvent(context) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    context.commit('addEvent');
                    resolve();
                }, 2000)
            })
        }
    }
});
export default store

// 组件中使用async完成回调
export default {
  name: "counter",
  methods: {
    async addEvent() {
      await this.$store.dispatch("syncaddEvent");
      console.log(`异步操作完成`);
    }
  }
};
```

**3、module模块：**

在**`store`**文件中可以定义`modules`对象，`modules`中定义的state可以直接从`$store.state.modulename`对象中获取。

```vue
// 定义modules
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        counts: 0
    },
    modules: {
        moudleA: {
            state: {
                title: "这里是moduleA中的数据"
            },
            mutations: {
                moduleAddEvent(state) {
                    state.title += " change";
                }
            }
        }
    }
});
export default store;

// 组件中使用modules
<h4 class="mb-2">{{$store.state.moudleA.title}}</h4>
export default {
    name:'module',
    methods:{
        moduleAddEvent(){
            this.$store.commit('moduleAddEvent');
        }
    }
}
```

