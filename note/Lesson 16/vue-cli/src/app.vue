<template>
  <div class="wrap">
    <h1>{{message}}</h1>
    <router-link to="/user/cowen">用户信息</router-link>
    <router-link :to="{path:'/profile',query:{name:'cowen',age:33}}">用户档案</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"app",
    data(){
        return {
            message:'这里是路由相关知识'
        }
    }
}
</script>

<style scoped>
body,h1{
    margin: 0px;
    padding: 0px;
}
h1{
    background: rgb(223, 111, 13);
    color: #fff;
    padding: 30px;
    font-size: 16px;
}
</style>