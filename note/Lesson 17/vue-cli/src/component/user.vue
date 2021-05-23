<template>
  <div class="user-info">
      这里是<strong>{{$route.params.id}}</strong>的个人主页<br/>
      {{userid}}
  </div>
</template>

<script>
export default {
    name:'user',
    computed:{
        userid(){
            return this.$route.params.id;
        }
    }
}
</script>

<style>
.user-info{
    padding: 60px;
}
strong{
    padding: 0px 6px;
}
</style>