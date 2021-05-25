## VUEX的基本配置

Vuex是一个专门为vue.js应用程序开发的状态管理模式。

**1、基本使用：**

类似于vue-router，vuex的使用也是需要引入、定义store和导出store。

```vue
// store定义
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({});
export default store

// store引入并使用
import Vue from 'vue'
import App from './App.vue'
import store from './store';
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
```

**2、state：**

vuex定义的实例中，通过state配置管理整个应用的参数值，state管理的值在应用下的所有组件中都能被获取：

- 模板中获取使用`$store.state`对象获取；
- js中使用`this.$store.state`对象获取。

```vue
// state定义
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        counts:0
    }
});
export default store

// state获取
<h4>{{$store.state.counts}}</h4>
```

**3、mutation：**

mutation是更改store状态的唯一方式，在vuex修改state的值，要通过mutation定义的方法进行修改，这些修改都是同步的。

mutation中定义的方法中会包含一个`state`参数，该参数就是用来获取当前应用的`state`对象值。

mutation中定义的方法在组件中通过`this.$store.commit(eventname)`进行调用。

```vue
// mutation定义的方法
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
        },
        descEvent(state){
            state.counts--;
        }
    }
});
export default store

// mutation中方法的调用
export default {
    name:'counter',
    methods:{
      addEvent(){
        this.$store.commit('addEvent');
      },
      descEvent(){
        this.$store.commit('descEvent')
      }
    }
}
```

**4、getters：**

vuex中的getters类似于组件中的计算属性，可以对当前应用中state的值进行加工处理再返回给应用。

getters的使用`#store.getters`对象中获取。

getters不但可以定义为属性，也可以定义为函数，直接返回一个函数。

```vue
import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        list:[
            {
                name:"Kebe Byrant",
                age:33
            },
            {
                name:"Paul Jamas",
                age:30
            },
            {
                name:"Tim James",
                age:15
            }
        ]
    },
    getters:{
		// 默认参数为state和getters,可以拿到定义的其他getters的值
        getlitter(state,getters){
            return state.list.filter(item=>item.age<=30);
        },
        getmore(state){
            return (age)=>{
                return state.list.filter(item=>item.age>age)
            }
        }
    }
});

export default store
```

> `getters`中的定义的属性中，默认参数为state和getters，不但可以拿到当前vuex实例的state，也可以拿到当前vuex的getters属性值。

