<template>
  <div id="about">
    <side-menu></side-menu>
  </div>
</template>

<script>
import SideMenu from './SideMenu.vue';
export default {
  name: 'about',
  data () {
    return {
    }
  },
  components: {
    SideMenu
  }
}
</script>

<style lang='postcss' scoped>
#about {}
</style>
