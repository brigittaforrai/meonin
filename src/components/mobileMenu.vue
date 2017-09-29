<template>
  <div id="mobile-menu" v-bind:class="home ? time : page">

    <ul class="menu" v-if="open">
      <!-- PRODUCTS -->
      <li class="menu-elem" v-for="link in links" v-if="links && !home" @click="select(link)">
        <router-link v-bind:class=" active(link) ? 'active' : 'inactive'" :to="{ name: 'Products', params: { productId: link } }">{{link}}</router-link>
      </li>
      <li class="menu-elem divider" v-for="link in links" v-if="!home">-</li>
      <!-- ABOUT -->
      <div class="br"></div>
      <li class="menu-elem">
        <router-link v-bind:class=" active('about') ? 'active' : 'inactive'" to="/about" class="link">about</router-link>
      </li><div class="br"></div>
      <!-- CONTACT -->
      <li class="menu-elem">
        <router-link v-bind:class=" active('contact') ? 'active' : 'inactive'" to="/contact" class="link">contact</router-link>
      </li>
      <div class="br"></div>
      <!-- LANGUAGE -->
      <li class="menu-elem lang">
        <span class="lang" @click="setLanguage()">{{language}}</span>
      </li>
      <div class="br"></div>

    </ul>
    <!-- LOGO -->
    <router-link to="/home" class="link home">
      <div class="logo">
        <icon class="logo-svg" width="45" height="45" :glyph="logo"></icon>
      </div>
    </router-link>
    <!-- HAMBURGER -->
    <div class="hamburger" @click="toggleMenu()"></div>
  </div>
</template>

<script>
import icon from './icon.vue';
import logo from "./../assets/meonin-logo2.svg";

export default {
  name: 'mobileMenu',
  props: ['home'],
  data () {
    return {
      logo,
      page: 'product',
      open: false
    }
  },
  computed: {
    links: function() {
      return this.$store.getters.g_menuList;
    },
    // TODO a language-et cs egyszer kene lekerdezni es utana propsal leadogatni...de lehet h megsem
    language: function() {
      return this.$store.getters.g_language;
    },
    // TODO timeot is valamelyik szulotol kerni, es pollozni
    time: function() {
      return this.$store.getters.g_time;
    }
  },
  methods: {
    toggleMenu () {
      this.open = !this.open;
    },
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
#mobile-menu {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  flex-direction: row;
  z-index: 15;
  .hamburger {
    width: 50px;
    height: 50px;
  }
  .home, .hamburger {
    z-index: 20;
  }
  ul {
    /*display: none;*/
    position: absolute;
    width: 100%;
    height: 100vh;
    padding: 20px;
    padding-top: 60px;
    text-align: center;
    top: 0px;
    left: 0px;
    background-color: white;
    opacity: 0.5;
    .br {
      background-color: rgb(230, 230, 230);
      width: 100%;
      height: 1px;
    }
    li a {
      color: black;
      text-decoration: none;
      font-size: 1.5em;
    }
    li {
      padding: 7px;
      color: black;
      list-style-type: none;
    }
  }
}

@media only screen and (min-width: 568px) and (max-width: 992px){
  #mobile-menu {
    display: none;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1200px){
  #mobile-menu {
    display: none;
  }
}

@media only screen and (min-width: 1200px){
  #mobile-menu {
    display: none;
  }
}

</style>
