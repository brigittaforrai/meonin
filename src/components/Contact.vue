<template>
  <div id="contact">
    <contact-form></contact-form>
    <google-map :name="'meonin'"></google-map>
  </div>
</template>

<script>
import ContactForm from './ContactForm.vue';
import GoogleMap from './googleMap.vue';

export default {
  name: 'contact',
  data () {
    return {
    }
  },
  components: {
    ContactForm,
    GoogleMap
  }
}
</script>

<style lang='postcss' scoped>
#contact {
  width: 100%;
  min-height: 100%;
}
</style>
