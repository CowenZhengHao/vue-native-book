<template>
  <div class="user-info">
      这里是<strong>{{$route.params.id}}</strong>的个人主页
      <ul>
          <li><router-link to="/user/cowen/detail">用户详情</router-link></li>
          <li><router-link to="/user/cowen/relate">用户相关</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'user',
    mounted(){
        console.log(this.$route)
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