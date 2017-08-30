<template>
  <div id="contact">
    <side-menu></side-menu>
    <contact-form></contact-form>
  </div>
</template>

<script>
import SideMenu from './SideMenu.vue';
import ContactForm from './ContactForm.vue';

export default {
  name: 'contact',
  data () {
    return {
    }
  },
  components: {
    SideMenu,
    ContactForm
  }
}
</script>

<style lang='postcss' scoped>
#contact {
  width: 100%;
  min-height: 100%;
}
</style>
