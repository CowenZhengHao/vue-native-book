import Vue from 'vue';
import VueRouter from 'vue-router';
const Home=()=>import('../component/home');
const About=()=>import('../component/about');
const HomeLink=()=>import('../component/home-link');
const HomeDetail=()=>import('../component/home-detail');
// 1、vue.use(插件)安装插件
Vue.use(VueRouter);
// 2、创建VueRouter对象
const routes = [
    {
        path:"",
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'link',
                component:HomeLink
            },
            {
                path:'detail',
                component:HomeDetail
            }
        ]
    },
    {
        path:'/about',
        component:About
    }
];
const router = new VueRouter({
    routes,
    mode: 'hash',
    linkActiveClass: "active"
});
// 3、导出router配置
export default router;



