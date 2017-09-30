<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <side-menu :home="home"></side-menu>
    <mobile-menu :home="home"></mobile-menu>
  </div>
</template>

<script>
import sideMenu from "./components/SideMenu.vue";
import mobileMenu from "./components/mobileMenu.vue";
export default {
  name: 'app',
  components: { sideMenu, mobileMenu },
  computed: {
    home () {
      return this.$route.name === 'Home' ? true : false;
    }
  },
  methods: {
    // TODO maybe move this from app.js somewhere else
    setTime() {
      this.$store.dispatch('a_localTime');
    }
  },
  mounted() {
    this.setTime();
  }
}
</script>

<style lang="postcss">
#app {
  /*TODO fontokat eloszor betolteni*/
  height: 100%;
  font-family: 'Raleway', sans-serif;
  text-align: left;
  font-size: 16px;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
body {
  /*overflow-scrolling: touch;*/
}
html, body {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
html {
  height: 100%;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
h2 {
  font-size: 20px;
  text-align: left;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 15px;
  font-weight: bold;
}
p {
  font-size: 12px;
  text-align: left;
  font-weight: normal;
  line-height: 150%;
  margin-bottom: 0px;
}
* > svg {
  transform-origin: left bottom;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease-in;
  min-height: 100%;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
  min-height: 100%;
}
/*NIGHT*/
.night ul li {
  .lang {
    color: white;
  }
  .lang:hover {
    color: gray;
  }
  a:link {
    color: white
  }
  a:visited {
    color: white
  }
  a:hover {
    color: gray;
  }
}
.night .logo svg {
  fill: white;
}
.night .mobile-logo-svg {
  fill: black;
}
.night .bg-info {
  background-color: rgb(255, 255, 255) !important;
}
.night .hamburger .line1, .night .hamburger .line2 {
  background-color: black;
}
.night ul.navbar-nav {
  background-color: white;
}
.night ul.navbar-nav a,  {
  background-color: black;
}
/*DAY*/
.day ul li, .product ul li  {
  .lang {
    color: black;
  }
  .lang:hover {
    color: gray;
  }
  a:link {
    color: black;
  }
  a:visited {
    color: black;
  }
  a:hover {
    color: gray;
  }
}
.day .logo svg {
  fill: black;
}
.day .mobile-logo-svg {
  fill: white;
}
.day .bg-info {
  background-color: rgb(0, 0, 0) !important;
}
.day .hamburger .line1, .day .hamburger .line2 {
  background-color: white;
}
.day ul.navbar-nav {
  background-color: black;
}
.day ul.navbar-nav a,  {
  background-color: white;
}


</style>
