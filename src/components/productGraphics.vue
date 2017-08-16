<template>
  <div id="graphics">
    <icon @click.native="selectProduct('nomad')" :glyph="nomadVector"></icon>
    <icon @click.native="selectProduct('contour')" :glyph="contourVector"></icon>
    <icon @click.native="selectProduct('sideboard')" :glyph="sideboardVector"></icon>
    <icon @click.native="selectProduct('nana')" :glyph="nanaVector"></icon>
    <icon @click.native="selectProduct('uhuu')" :glyph="uhuuVector"></icon>
    <icon @click.native="selectProduct('whole')" :glyph="wholeVector"></icon>
  </div>
</template>

<script>
import icon from './icon.vue';
import nomadVector from './../assets/graphics/nomad_w.svg';
import contourVector from './../assets/graphics/contour_w.svg';
import sideboardVector from './../assets/graphics/sideboard_w.svg';
import nanaVector from './../assets/graphics/nana_w.svg';
import uhuuVector from './../assets/graphics/uhuu_w.svg';
import wholeVector from './../assets/graphics/whole_w.svg';

export default {
  name: 'graphics',
  data: function() {
    return {
      nomadVector,
      contourVector,
      sideboardVector,
      nanaVector,
      uhuuVector,
      wholeVector
    }
  },
  methods: {
    selectProduct: function(productName) {
      this.$emit('select', productName);
    }
  },
  components: {
    icon
  }
}
</script>

<style lang='postcss' scoped>
#graphics {
  position: absolute;
  min-width: 100%;
  width: auto;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: bottom;
  padding-top: 70px;
  left: 0px;
  svg {
    width: 200px;
    height: 200px;
  }
}
</style>
