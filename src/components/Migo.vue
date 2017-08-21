<template>
  <div id="migo">
    <side-menu></side-menu>
  </div>
</template>

<script>
import SideMenu from './SideMenu.vue';
export default {
  name: 'migo',
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
#migo {}
</style>
