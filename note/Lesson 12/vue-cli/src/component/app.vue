<template>
  <h1>{{message}}</h1>
</template>

<script>
export default {
    name:"app",
    data(){
        return {
            message:'这里是一段静态文本SSSS'
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