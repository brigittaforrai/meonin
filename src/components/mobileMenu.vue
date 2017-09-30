<template>
  <div id="mobile-menu" v-bind:class="home ? time : page">

    <b-navbar toggleable="md" type="light" variant="info">

      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#">Disabled</b-nav-item>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#">Disabled</b-nav-item>
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
}
.navbar {
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  padding: 0px;
}
.bg-info {
  background-color: rgba(0, 0, 0, 0) !important;
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
