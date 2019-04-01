import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import kelang from '../views/kelang/';
import kelangHome from '../views/kelang/home';
import profile from '../views/kelang/profile';
import biya from '../views/biya';
import biyaHome from '../views/biya/home';
import biyaInfo from '../views/biya/info';

const routes = [{
    path: '/',
    redirect: '/kelang/',
}, { 
    path: '/kelang',
    component: kelang,
    children: [{
        path: '/',
        component: kelangHome,
    }, {
        path: 'profile',
        component: profile
    }] 
}, {
    path: '/biya',
    component: biya,
    children: [{
        path: '/',
        component: biyaHome,
    }, {
        path: 'info',
        component: biyaInfo
    }]
}];
const router = new VueRouter({
  routes,
});

export default router;
