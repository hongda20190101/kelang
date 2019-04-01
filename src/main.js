import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import App from './App.vue';
import AOS from 'aos'
import "aos/dist/aos.css";

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init({once: true});
  },
  router,
  render: h => h(App),
}).$mount('#app')
