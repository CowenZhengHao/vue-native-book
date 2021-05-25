<template>
    <div class="row">
        <div class="col">
            <h4 class="mb-2">{{$store.state.moudleA.title}}</h4>
            <button @click="moduleAddEvent" class="btn btn-primary">模块内mutation</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'module',
    methods:{
        moduleAddEvent(){
            this.$store.commit('moduleAddEvent');
        }
    }
}
</script>
<style scoped>
.row{
    padding: 30px 0px;
}
</style>