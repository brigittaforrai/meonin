<template>
  <div id="footer">
    <p>footer content</p>
    <p>footer content</p>
    <p>footer content</p>
    <p>footer content</p>
  </div>
</template>

<script>
import SideMenu from './SideMenu.vue';

export default {
  name: 'footer',
  data () {
    return {
    }
  },
}
</script>

<style lang='postcss' scoped>
#footer {
  width: 100%;
  height: 150px;
  background-color: white;
  padding-left: 50px;
  padding-right: 5px;
  padding-top: 25px;
  padding-bottom: 25px;
  p {
    margin-bottom: 0px;
    padding: 3px;
  }
}
</style>
