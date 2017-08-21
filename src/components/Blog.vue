<template>
  <div id="blog">
    <side-menu></side-menu>
  </div>
</template>

<script>
import SideMenu from './SideMenu.vue';
export default {
  name: 'blog',
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
#blog {}
</style>
