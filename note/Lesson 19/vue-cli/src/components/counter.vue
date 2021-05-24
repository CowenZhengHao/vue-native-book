<template>
  <div class="row">
      <h4>{{$store.state.counts}}</h4>
      <button class="btn btn-primary">增加</button>
      <button class="btn btn-danger">减少</button>
  </div>
</template>

<script>
export default {
    name:'counter'
}
</script>

<style>

</style>