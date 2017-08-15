<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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
  color: white;
  font-size: 18px;
  text-align: left;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 15px;
}
p {
  font-size: 13px;
  color: white;
  text-align: left;
  font-weight: normal;
  line-height: 120%;
}
</style>
