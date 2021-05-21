import Vue from 'vue';
import VueRouter from 'vue-router';
// 1、vue.use(插件)安装插件
Vue.use(VueRouter);
// 2、创建VueRouter对象
const router = new VueRouter({
    routes:[

    ],
    mode:'hash'
});
// 3、导出router配置
export default router;



