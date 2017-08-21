<template>
  <div v-if="time" id="home" v-bind:class="time">
    <side-menu :home="home"></side-menu>

    <div class="graphics-container">
      <graphics v-on:hover="productInfo" v-on:select="selectProduct"></graphics>
    </div>
    <div class="line"></div>

    <div class="description-box" v-if="description.title">
      <h2 class="title">{{description.title}}</h2>
      <p class="text">{{description[language]}}</p>
      <div @click="selectProduct(description.title)" class="plus">
        <icon :glyph="plus"></icon>
      </div>
    </div>

  </div>
</template>

<script>
import DATA from './../data/texts.js';
import icon from './icon.vue';
import graphics from './productGraphics.vue';
import logo from "./../assets/meonin-logo2.svg";
import sideMenu from "./SideMenu.vue";
import plus from "./../assets/plus.svg";

export default {
  name: 'Home',
  data: function() {
    return {
      logo,
      plus,
      home: true,
      description: {}
    }
  },
  computed: {
    datatext: function() {
      return DATA.pages.home.content[0];
    },
    language: function() {
      return this.$store.getters.g_language;
    },
    time: function() {
      return this.$store.getters.g_time;
    }
  },
  methods: {
    selectProduct: function(productName) {
      if(productName) {
        this.$router.push('products/' + productName);
      }
    },
    productInfo: function(productName) {
      this.description = this.$store.getters.g_productDesc;
    },
    setLanguage: function() {
      this.$store.commit('m_changeLanguage');
    }
  },
  mounted() {
    // TODO
    let template = this.$el;
    let slider = template.querySelector('#graphics');
    let position = 0;
    slider.addEventListener('mousemove', (event) => {
      let x = event.clientX;
      let y = event.clientY;
      let width = window.innerWidth;
      if(x < 50) {
        position = position+10;
      } else if(x > (width-50)) {
        position = position-10;
      }
      slider.style.left = position + 'px';
    })

  },
  components: {
    graphics,
    icon,
    sideMenu
  }
}
</script>

<style scoped lang="postcss">
  #home {
    height: 100%;
    min-height: 700px;
    width: 100%;
    padding-bottom: 50px;
    overflow: hidden;
    position: fixed;
    .graphics-container {
      position: absolute;
      bottom: 150px;
      left: 0px;
      width: 100%;
    }
    .line {
      position: absolute;
      bottom: 150px;
      height: 2px;
      width: 100%;
    }
    .description-box {
      position: absolute;
      top: 120px;
      left: 50%;
      width: 33%;
      height: 50px;
      .plus {
        width: 15px;
        height: 15px;
        margin-top: 25px;
        cursor: pointer;
        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  .day {
    background-color: white;
    .description-box {
      color: black;
      svg {
        fill: black;
      }
    }
    .line {
      background-color: black;
    }
  }
  .night {
    background-color: black;
    .description-box {
      color: white;
      svg {
        fill: white;
      }
    }
    .line {
      background-color: white;
    }
  }
</style>
