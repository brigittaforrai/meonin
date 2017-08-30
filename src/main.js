import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store.js';
import VueLocalStorage from 'vue-ls';
import VeeValidate from 'vee-validate';
import VueResource from 'vue-resource';

let options = {
  namespace: 'vuejs__'
};

Vue.use(VueResource);
Vue.use(VeeValidate);
Vue.use(VueLocalStorage, options);
Vue.config.productionTip = false;

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted: function() {
     Vue.ls.set('foo', 'boo');
     //Set expire for item
     Vue.ls.set('foo', 'boo', 60 * 60 * 1000); //expiry 1 hour
     Vue.ls.get('foo');
     Vue.ls.get('boo', 10); //if not set boo returned default 10

     let callback = (val, oldVal, uri) => {
       console.log('localStorage change', val);
     }

     Vue.ls.on('foo', callback) //watch change foo key and triggered callback
     Vue.ls.off('foo', callback) //unwatch

     Vue.ls.remove('foo');
 }
})
