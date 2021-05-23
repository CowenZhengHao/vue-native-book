import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../component/home';
import About from '../component/about';
// import User from '../component/user';
const User =()=>import('../component/user');
const UserDetail =()=>import('../component/user-detail');
const UserRelate = ()=>import('../component/user-relate');
// 1、vue.use(插件)安装插件
Vue.use(VueRouter);
// 2、创建VueRouter对象
const routes=[
    {
        path:"",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/user/:id',
        component:User,
        children:[
            {
                path:"",
                redirect:"detail"
            },
            {
                path:"detail",
                component:UserDetail
            },
            {
                path:"relate",
                component:UserRelate
            }
        ]
    }
];
const router = new VueRouter({
    routes,
    mode:'hash',
    linkActiveClass:"active"
});
// 3、导出router配置
export default router;



