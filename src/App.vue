<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    setTime() {
      this.$store.dispatch('a_localTime');
    }
  },
  beforeMount() {
    this.setTime();
  }
}
</script>

<style lang="postcss">
#app {
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

</style>
