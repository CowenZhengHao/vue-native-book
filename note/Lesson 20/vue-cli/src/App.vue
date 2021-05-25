<template>
  <div id="app">
    <h2>{{message}}</h2>
    <Counter />
    <Student />
    <Module />
  </div>
</template>

<script>
import Counter from './components/counter';
import Student from './components/student';
import Module from './components/module';
export default {
  name: 'App',
  data(){
    return {
      message:"VUE APPLICATION"
    }
  },
  components:{
    Counter,
    Student,
    Module
  }
}
</script>

<style>
#app{
  padding-top: 60px;
}
</style>
