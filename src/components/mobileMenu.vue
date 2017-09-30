<template>
  <div id="mobile-menu" v-bind:class="time">
    <b-navbar toggleable="md" :type="time === 'day' ? 'dark' : 'light'" variant="info">
      <!-- home -->
      <b-navbar-brand :to="{name: 'Home'}" class="link home">
         <icon class="mobile-logo-svg" width="34" height="34" :glyph="logo"></icon>
      </b-navbar-brand>
      <!-- hamburger -->
      <b-nav-toggle target="nav_collapse" @click.native="toggleMenuButton()">
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

          <b-nav-item :to="{name: 'About'}" v-bind:class=" active('about') ? 'active' : 'inactive'" @click="toggleMenuButton()">about</b-nav-item>

          <b-nav-item :to="{name: 'Contact'}" v-bind:class=" active('contact') ? 'active' : 'inactive'" @click="toggleMenuButton()">contact</b-nav-item>

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
      page: 'product',
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
    // TODO time-ot egyszer kerjuk le az app-ban aztan bindoljuk le
    time: function() {
      return this.$store.getters.g_time;
    }
  },
  methods: {
    toggleMenuButton() {
      let line1 = document.querySelector('.line1');
      let line2 = document.querySelector('.line2');
      if (line1.classList.contains('open') && line2.classList.contains('open')) {
        line1.classList.remove('open');
        line2.classList.remove('open');
      } else {
        line1.classList.add('open');
        line2.classList.add('open');
      }
    },
    active (path) {
      return this.$route.path === '/products/' + path || this.$route.path === '/' + path ? true : false;
    },
    select: function(product) {
      this.removeClasses();
      this.$store.commit('m_selectProduct', product);
      this.toggleMenuButton();
    },
    setLanguage: function() {
      this.$store.commit('m_changeLanguage');
      this.toggleMenuButton();
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
  z-index: 100;
}
.navbar {
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  padding: 0px;
}
.navbar-toggler {
  color: rgba(0, 0, 0, 0);
  border: rgba(0, 0, 0 ,0);
}
button:focus {
  outline: 0px auto rgba(0, 0, 0, 0);
}
.mobile-logo-svg {
  margin: 10px;
}
.navbar-brand {
  padding: 0px;
  margin: 0px;
  height: 54px;
}
.hamburger {
  width: 30px;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  background-color: rgba(0, 0, 0, 0);
  transition: .5s ease-in-out;
  cursor: pointer;
  .line1, .line2 {
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0px;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    transform-origin: center center;
  }
  .line1 {
    top: 35%;
  }
  .line2 {
    top: 55%;
  }
}
.line1.open {
  transform: rotate(45deg);
  top: 45%;
}
.line2.open {
  transform: rotate(135deg);
  top: 45%;
}
ul.navbar-nav  {
    width: 100%;
    height: 100vh;
    padding: 20px;
    text-align: center;
    li a {
      text-decoration: none;
      font-size: 1.5em;
    }
    li {
      padding: 7px;
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
