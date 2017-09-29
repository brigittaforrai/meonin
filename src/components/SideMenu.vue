<template>
  <div id="side-menu" v-bind:class="home ? time : page">

    <!-- LOGO -->
    <router-link to="/home" class="link">
      <div class="logo">
        <icon class="logo-svg" width="45" height="45" :glyph="logo"></icon>
      </div>
    </router-link>

    <ul class="menu">
      <!-- PRODUCTS -->
      <li class="menu-elem" v-for="link in links" v-if="links && !home" @click="select(link)">
        <router-link v-bind:class=" active(link) ? 'active' : 'inactive'" :to="{ name: 'Products', params: { productId: link } }">{{link}}</router-link>
      </li>
      <li class="menu-elem divider" v-if="!home">-</li>

      <!-- ABOUT -->
      <li class="menu-elem">
        <router-link v-bind:class=" active('about') ? 'active' : 'inactive'" to="/about" class="link">about</router-link>
      </li>
      <!-- CONTACT -->
      <li class="menu-elem">
        <router-link v-bind:class=" active('contact') ? 'active' : 'inactive'" to="/contact" class="link">contact</router-link>
      </li>
      <!-- LANGUAGE -->
      <li class="menu-elem lang">
        <span class="lang" @click="setLanguage()">{{languageSwitch}}</span>
      </li>

    </ul>
  </div>
</template>

<script>
import icon from './icon.vue';
import logo from "./../assets/meonin-logo2.svg";

export default {
  name: 'sideMenu',
  props: ['home'],
  data () {
    return {
      logo,
      page: 'product'
    }
  },
  computed: {
    links: function() {
      return this.$store.getters.g_menuList;
    },
    language: function() {
      return this.$store.getters.g_language;
    },
    languageSwitch () {
      return this.language === 'eng' ? 'hun' : 'eng';
    },
    time: function() {
      return this.$store.getters.g_time;
    }
  },
  methods: {
    active (path) {
      return this.$route.path === '/products/' + path || this.$route.path === '/' + path ? true : false;
    },
    select: function(product) {
      this.removeClasses();
      this.$store.commit('m_selectProduct', product);
    },
    setLanguage: function() {
      this.$store.commit('m_changeLanguage');
    },
    removeClasses() {
      if(this.$parent.$el) {
        let elems = this.$parent.$el.querySelectorAll('.expandable');
        let icons = this.$parent.$el.querySelectorAll('.plus');
        elems.forEach((elem) => {
          elem.classList.remove('open');
        });
        icons.forEach((icon) => {
          icon.classList.remove('close');
        });
      }
    }
  },
  components: { icon }
}
</script>

<style scoped lang="postcss">
#side-menu {
  width: auto;
  min-width: 50px;
  height: auto;
  min-height: 100px;
  position: absolute;
  left: 50px;
  top: 50px;
  .logo {
    width: 45px;
    height: 45px;
    margin-bottom: 50px;
  }
  ul {
    width: 100%;
    height: 100%;
    .lang {
      cursor: pointer;
    }
    li, .lang {
      padding-top: 7px;
      padding-bottom: 7px;
      list-style-type: none;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      a:visited {
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
        color: black;
      }
      a:link.active {
        text-decoration: underline;
      }
      a:link.inactive {
        text-decoration: none;
      }
    }
    .divider {
      padding-left: 15px;
    }
  }
}

@media only screen and (max-width: 568px) {
  #side-menu {
    display: none;
  }
}
</style>
