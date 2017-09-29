import Vue from 'vue';
import store from './../vuex/store.js';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Product from '@/components/Product';

Vue.use(Router)

export default new Router({
  routes: [
    {
      alias: '/',
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/products/:productId',
      name: 'Products',
      component: Product,
      beforeEnter: (to, from, next) => {
        store.commit('m_selectProduct', to.params.productId);
        next();
      }
    }
  ]
})
