<template>
  <div id="app">
    <h2>{{message}}</h2>
    <Counter />
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
</style>
