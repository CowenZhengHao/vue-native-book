import Vue from 'vue';
import VueRouter from 'vue-router';
// import User from '../component/user';
const User =()=>import('../component/user');
const Profile=()=>import('../component/profile');
// 1、vue.use(插件)安装插件
Vue.use(VueRouter);
// 2、创建VueRouter对象
const routes=[
    {
        path:'/user/:id',
        component:User
    },
    {
        path:'/profile',
        component:Profile
    }
];
const router = new VueRouter({
    routes,
    mode:'hash',
    linkActiveClass:"active"
});
// 3、导出router配置
export default router;



