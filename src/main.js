import Vue from 'vue'
import { Carousel, CarouselItem, Button, Menu, MenuItem, Popover, Row, Col, Submenu, Header, Container, Main, Footer } from 'element-ui';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import App from './App.vue';
import AOS from 'aos'
import "aos/dist/aos.css";

Vue.use(Carousel).use(CarouselItem).use(Button).use(Menu).use(MenuItem).use(Popover)
.use(Row).use(Col).use(Submenu).use(Header).use(Container).use(Main).use(Footer)
Vue.component(CollapseTransition.name, CollapseTransition)

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init({once: true});
  },
  router,
  render: h => h(App),
}).$mount('#app')
