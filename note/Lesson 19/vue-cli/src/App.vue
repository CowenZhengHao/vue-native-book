<template>
  <div id="app">
    <h2>{{message}}</h2>
    <Counter />
    <p>当前计数值为：{{$store.state.counts}}</p>
  </div>
</template>

<script>
import Counter from './components/counter';
export default {
  name: 'App',
  data(){
    return {
      message:"这里是VUE应用"
    }
  },
  components:{
    Counter
  }
}
</script>

<style>
#app{
  padding-top: 60px;
}
</style>
