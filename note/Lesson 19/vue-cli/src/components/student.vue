<template>
  <ul class="list-group">
    <li v-for="(item,index) in $store.getters.getmore(10)" :key="index" class="list-group-item">{{item.name}}:{{item.age}}</li>
  </ul>
</template>
<script>
export default {
  name: "student"
};
</script>
<style scoped>
</style>