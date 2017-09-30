<template>
  <div id="mobile-menu" v-bind:class="home ? time : page">
    <b-navbar toggleable="md" type="light" variant="info">
      <!-- home -->
      <b-navbar-brand to="/home" class="link home">
         <icon class="logo-svg" width="45" height="45" :glyph="logo"></icon>
      </b-navbar-brand>
      <!-- hamburger -->
      <b-nav-toggle target="nav_collapse">
        <div class="hamburger">
          <div class="line1"></div>
          <div class="line2"></div>
        </div>
      </b-nav-toggle>
      <!-- menu -->
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
            <b-nav-item
            v-for="link in links"
            :to="{ name: 'Products', params: { productId: link } }"
            class="menu-elem"
            v-bind:class=" active(link) ? 'active' : 'inactive'"
            @click="select(link)"
            v-if="links"
            >{{link}}</b-nav-item>

          <b-nav-item to="/about" v-bind:class=" active('about') ? 'active' : 'inactive'">about</b-nav-item>

          <b-nav-item to="/contact" v-bind:class=" active('about') ? 'active' : 'inactive'">contact</b-nav-item>

          <b-nav-item class="lang" @click="setLanguage()">{{languageSwitch}}</b-nav-item>
        </b-nav>

      </b-collapse>
    </b-navbar>
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
#mobile-menu {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
}
.navbar {
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  padding: 0px;
}
.bg-info {
  background-color: rgba(0, 0, 0, 0) !important;
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0);
  border: rgba(0, 0, 0 ,0);
}
button:focus {
  outline: 0px auto rgba(0, 0, 0, 0);
}
.hamburger {
  width: 30px;
  height: 30px;
  /*background-color: pink;*/
  position: relative;
  .line1, .line2 {
    background-color: black;
    width: 80%;
    height: 1px;
    position: absolute;
    left: 10%;
  }
  .line1 {
    top: 37%;
  }
  .line2 {
    top: 53%;
  }
}
ul.navbar-nav  {
    width: 100%;
    height: 100vh;
    padding: 20px;
    /*padding-top: 60px;*/
    text-align: center;
    background-color: white;
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
