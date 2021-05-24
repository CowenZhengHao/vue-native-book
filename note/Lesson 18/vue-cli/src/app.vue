<template>
  <div class="wrap">
    <h1>{{message}}</h1>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于我们</router-link>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
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
.active{
    background: red;
    color: #fff;
}
</style>