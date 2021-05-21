import Vue from 'vue';
import App from './component/app';
import router from './router';
new Vue({
    el: "#app",
    router,
    render: h => h(App)
})