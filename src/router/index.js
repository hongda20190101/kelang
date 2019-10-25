import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import kelang from '../views/kelang/';
import kelangHome from '../views/kelang/home';
import profile from '../views/kelang/profile';
import biya from '../views/biya';
import biyaHome from '../views/biya/home';
import biyaInfo from '../views/biya/info';
import jidian from '../views/jidian';
import jidianHome from '../views/jidian/home';
import jidianProfile from '../views/jidian/profile';
const defaultPath = window.location.origin.indexOf('biyamed') > -1 ? '/biya/' :  window.location.origin.indexOf('singularitymed') > -1 ? '/jidian' : '/kelang/';
const routes = [{
    path: '/',
    redirect: defaultPath,
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
}, {
    path: '/jidian',
    component: jidian,
    children: [{
        path: '/',
        component: jidianHome,
    }, {
        path: 'profile',
        component: jidianProfile
    }]
}];
const router = new VueRouter({
  routes,
});

export default router;
