<template>
  <div class="row">
      <div class="col">
        <h4>{{$store.state.counts}}</h4>
      <button class="btn btn-primary mr-4" @click="addEvent">增加</button>
      <button class="btn btn-danger mr-4" @click="descEvent">减少</button>
      <button class="btn btn-info" @click="mutifyEvent(2)">乘2</button>
      </div>
      <p>当前计数值为：{{$store.state.counts}}，平方值为：{{$store.getters.powercounts}}</p>
  </div>
</template>

<script>
export default {
    name:'counter',
    methods:{
      addEvent(){
        this.$store.commit('addEvent');
      },
      descEvent(){
        this.$store.commit('descEvent')
      },
      mutifyEvent(num){
        // this.$store.commit('mutifyEvent',num);
        this.$store.commit({type:'mutifyEvent',num})
      }
    }
}
</script>

<style scoped>
.row{
  margin-bottom: 30px;
}
</style>