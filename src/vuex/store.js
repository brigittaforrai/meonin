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
    productNames: ['nana', 'nomad', 'contour', 'sideboard', 'whole', 'uhuu'],
    language: 'eng'
  },

  getters: {
    g_selectedProduct(state) {
      return state.selectedProduct;
    },
    g_productObject(state) {
      return state.productObject;
    },
    g_menuList(state) {
      let menuList = [];
      if(state.selectedProduct) {
        state.productNames.forEach(function(elem) {
          if(elem !== state.selectedProduct) {
            menuList.push(elem);
          }
        });
        return menuList;
      } else {
        return state.productNames;
      }
    },
    g_language: (state) => {
      return state.language;
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
    m_changeLanguage: (state) => {
      state.language = state.language === 'eng' ? 'hun' : 'eng';
    }
  },

  actions: {
    // a_addBuilding: (context, data) => {
    //   fb.saveBuilding(data);
    // }
  },
});
