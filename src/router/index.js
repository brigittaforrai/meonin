import Vue from 'vue';
import store from './../vuex/store.js';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Product from '@/components/Product';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      alias: '/meonin/',
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      alias: '/meonin/about',
      path: '/about',
      name: 'About',
      component: About
    },
    {
      alias: '/meonin/contact',
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      alias: '/meonin/products/:productId',
      path: '/products/:productId',
      name: 'Products',
      component: Product,
      beforeEnter: (to, from, next) => {
        store.commit('m_selectProduct', to.params.productId);
        next();
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
