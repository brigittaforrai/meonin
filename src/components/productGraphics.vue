<template>
  <div id="graphics" v-bind:class="time">
    <icon class="nomad" v-on:mouseover.native="mouseOver('nomad')" @click.native="selectProduct('nomad')" :glyph="'#nomad_'+time"></icon>
    <icon class="contour" v-on:mouseover.native="mouseOver('contour')" @click.native="selectProduct('contour')" :glyph="'#contour_'+ time"></icon>
    <icon class="sideboard" v-on:mouseover.native="mouseOver('sideboard')" @click.native="selectProduct('sideboard')" :glyph="'#sideboard_'+ time"></icon>
    <icon class="nana" v-on:mouseover.native="mouseOver('nana')" @click.native="selectProduct('nana')" :glyph="'#nana_'+ time"></icon>
    <icon class="uhuu" v-on:mouseover.native="mouseOver('uhuu')" @click.native="selectProduct('uhuu')" :glyph="'#uhuu_'+ time"></icon>
    <icon class="whole" v-on:mouseover.native="mouseOver('whole')" @click.native="selectProduct('whole')" :glyph="'#whole_'+ time"></icon>
  </div>
</template>

<script>
import icon from './icon.vue';
import nomad_day from './../assets/graphics/nomad_day.svg';
import contour_day from './../assets/graphics/contour_day.svg';
import sideboard_day from './../assets/graphics/sideboard_day.svg';
import nana_day from './../assets/graphics/nana_day.svg';
import uhuu_day from './../assets/graphics/uhuu_day.svg';
import whole_day from './../assets/graphics/whole_day.svg';
import nomad_night from './../assets/graphics/nomad_night.svg';
import contour_night from './../assets/graphics/contour_night.svg';
import sideboard_night from './../assets/graphics/sideboard_night.svg';
import nana_night from './../assets/graphics/nana_night.svg';
import uhuu_night from './../assets/graphics/uhuu_night.svg';
import whole_night from './../assets/graphics/whole_night.svg';

export default {
  name: 'graphics',
  data: function() {
    return {
      nomad_day,
      contour_day,
      sideboard_day,
      nana_day,
      uhuu_day,
      whole_day,
      nomad_night,
      contour_night,
      sideboard_night,
      nana_night,
      uhuu_night,
      whole_night,
    }
  },
  computed: {
    time: function() {
      return this.$store.getters.g_time;
    }
  },
  methods: {
    selectProduct: function(productName) {
      this.$emit('select', productName);
    },
    mouseOver: function(productName) {
      this.$store.commit('m_hoverProduct', productName);
      this.$emit('hover', productName);
    }
  },
  components: {
    icon
  }
}
</script>

<style lang='postcss' scoped>
#graphics {
  min-width: 100%;
  width: auto;
  height: 250px;
  position: relative;
  svg {
    position: absolute;
    opacity: 0.3;
    width: 280px;
    height: 280px;
  }
  svg:hover {
    opacity: 1;
  }
  .nomad {
    left: 10px;
    bottom: 0px;
  }
  .contour {
    left: 210px;
    bottom: -47px;
  }
  .uhuu {
    left: 395px;
    bottom: -118px;
  }
  .sideboard {
    left: 650px;
    bottom: -98px;
  }
  .whole {
    left: 890px;
    bottom: -108px;
  }
  .nana {
    left: 1135px;
    bottom: -87px;
  }
}
</style>
