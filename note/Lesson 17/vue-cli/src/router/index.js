import Vue from 'vue';
import VueRouter from 'vue-router';
// import User from '../component/user';
const User = () => import('../component/user');
const Profile = () => import('../component/profile');
// 1、vue.use(插件)安装插件
Vue.use(VueRouter);
// 2、创建VueRouter对象
const routes = [
    {
        path: '/user/:id',
        meta: {
            title: "用户信息"
        },
        component: User,
        beforeEnter: (to, from, next) => {
            console.log(`用户信息进入`);
            next();
        }
    },
    {
        path: '/profile',
        meta: {
            title: "用户档案"
        },
        component: Profile
    }
];
const router = new VueRouter({
    routes,
    mode: 'hash',
    linkActiveClass: "active"
});
// 导航守卫【前置钩子】
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    next();
    console.log(`导航守卫【前置钩子】`)
})
// 导航守卫【后置钩子】
router.afterEach((to, from) => {
    console.log(`导航守卫【后置钩子】`)
})
// 3、导出router配置
export default router;



