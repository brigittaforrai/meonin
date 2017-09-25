<template>
  <div id="graphics" v-bind:class="time">
    <icon class="icon nomad" v-on:mouseleave.native="mouseOut()" v-on:mouseover.native="mouseOver('nomad')" @click.native="selectProduct('nomad')" :glyph="'#nomad_'+time"></icon>
    <icon class="icon contour" v-on:mouseleave.native="mouseOut()" v-on:mouseover.native="mouseOver('contour')" @click.native="selectProduct('contour')" :glyph="'#contour_'+ time"></icon>
    <icon class="icon uhuu" v-on:mouseleave.native="mouseOut()" v-on:mouseover.native="mouseOver('uhuu')" @click.native="selectProduct('uhuu')" :glyph="'#uhuu_'+ time"></icon>
    <icon class="icon sideboard" v-on:mouseleave.native="mouseOut()" v-on:mouseover.native="mouseOver('sideboard')" @click.native="selectProduct('sideboard')" :glyph="'#sideboard_'+ time"></icon>
    <icon class="icon whole" v-on:mouseleave.native="mouseOut()" v-on:mouseover.native="mouseOver('whole')" @click.native="selectProduct('whole')" :glyph="'#whole_'+ time"></icon>
    <icon class="icon nana" v-on:mouseleave.native="mouseOut()" v-on:mouseover.native="mouseOver('nana')" @click.native="selectProduct('nana')" :glyph="'#nana_'+ time"></icon>
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
      let icons = document.querySelectorAll('.icon');
      icons.forEach((icon) => {
        if (icon.classList.contains(productName)) {
          icon.classList.add('active');
          icon.classList.remove('inactive');
        } else {
          icon.classList.add('inactive');
          icon.classList.remove('active');
        }
      });
    },
    mouseOut () {
      console.log('leave');
      let icons = document.querySelectorAll('.icon');
      icons.forEach((icon) => {
        icon.classList.remove('active');
        icon.classList.remove('inactive');
      });
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
    opacity: 1;
    width: 280px;
    height: 280px;
    transition: opacity 0.5s;
  }
  .active {
    opacity: 1;
  }
  .inactive {
    opacity: 0.2;
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
