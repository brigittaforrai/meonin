import Vue from 'vue';
import Vuex from 'vuex';
import router from './../router';
import DATA from './../data/texts.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: DATA.pages.products,
    selectedProduct: '',
    productObject: {},
    productDesc: {},
    productNames: ['nana', 'nomad', 'contour', 'sideboard', 'whole', 'uhuu'],
    language: 'eng',
    time: 'day'
  },

  getters: {
    g_selectedProduct(state) {
      return state.selectedProduct;
    },
    g_productObject(state) {
      return state.productObject;
    },
    g_productDesc(state) {
      return state.productDesc;
    },
    g_menuList(state) {
      // let menuList = [];
      // if(state.selectedProduct) {
      //   state.productNames.forEach(function(elem) {
      //     if(elem !== state.selectedProduct) {
      //       menuList.push(elem);
      //     }
      //   });
      //   return menuList;
      // } else {
        return state.productNames;
      // }
    },
    g_language: (state) => {
      return state.language;
    },
    g_time: (state) => {
      return state.time;
    }
  },

  mutations: {
    m_selectProduct: (state, productName) => {
      state.selectedProduct = productName;
      Object.keys(state.products).forEach((key) => {
        if(state.products[key].title === productName) {
          state.productObject = state.products[key];
        }
      })
    },
    m_hoverProduct: (state, productName) => {
      Object.keys(state.products).forEach((key) => {
        if(state.products[key].title === productName) {
          state.productDesc = state.products[key].desc;
        }
      })
    },
    m_changeLanguage: (state) => {
      state.language = state.language === 'eng' ? 'hun' : 'eng';
    },
    m_setNight: (state) => {
      state.time = 'night';
    },
    m_setDay: (state) => {
      state.time = 'day';
    }
  },

  actions: {
    a_localTime: (context) => {
      let time = new Date().getHours();
      if(time < 19 && time > 6 ) {
        context.commit('m_setDay');
      } else {
        context.commit('m_setNight');
      }
    }
  }
});
