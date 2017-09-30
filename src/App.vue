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
  min-height: 100%;
  height: 100%;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  font-size: 16px;
}
html, body {
  width: 100%;
  min-height: 100%;
  margin: 0px;
  padding: 0px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
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
}
* > svg {
  transform-origin: left bottom;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease-in;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
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
    color: white;
  }
  a:visited {
    color: white;
  }
  a:hover {
    color: gray;
  }
}
.night .logo svg {
  fill: white;
}
.night .hamburger, .night .hamburger div {
  background-color: white;
  border: 1px solid white;
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
.day .hamburger, .day .hamburger div {
  background-color: black;
  border: 1px solid black;
}
</style>
