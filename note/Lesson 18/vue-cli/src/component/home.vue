<template>
    <div class="home">
        <router-link to="/home/detail">首页详情</router-link>
        <router-link to="/home/link">首页链接</router-link>
        <h4>这里是Home页面</h4>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"about",
    data(){
        return {
            path:'/home/detail'
        }
    },
    created(){
        console.log("home is created");
    },
    destroyed(){
        console.log("home is destroyed")
    },
    activated(){
        // 该函数只有组件被keep-alive保持状态时才会有效
        this.$router.push(this.path);
    },
    beforeRouteLeave (to, from, next) {
        this.path=this.$route.path;
        next();
    }
}
</script>
<style scoped>
    .home{
        min-height: 600px;
        border:1px solid #ff0000;
        text-align: center;
    }
    .active{
        background: green;
        color: #fff;
    }
</style>