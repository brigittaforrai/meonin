<template>
  <div v-if="time" id="home" v-bind:class="time">
    <!-- <side-menu :home="home"></side-menu> -->

    <div class="description-box" v-if="description.title">
      <h2 class="title">{{description.title}}</h2>
      <p class="text">{{description[language]}}</p>
      <div @click="selectProduct(description.title)" class="plus">
        <icon :glyph="plus"></icon><span>more</span>
      </div>
    </div>

    <div class="graphics-container">
      <button class="left" v-bind:class="time" @click="next"><</button>
      <graphics v-on:select="productInfo" :position="position"></graphics>
      <button class="right" v-bind:class="time" @click="prev">></button>
    </div>
    <div class="line"></div>

  </div>
</template>

<script>
import DATA from './../data/texts.js';
import icon from './icon.vue';
import graphics from './productGraphics.vue';
import logo from "./../assets/meonin-logo2.svg";
import plus from "./../assets/plus.svg";

export default {
  name: 'Home',
  data: function() {
    return {
      logo,
      plus,
      description: {},
      position: 0
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
    next () {
      let move = window.innerWidth;
      let min = -5 * move;
      if (this.position > min) {
        this.position = this.position - move;
      } else {
        this.position = 0;
      }
    },
    prev () {
      let move = window.innerWidth;
      let min = -5 * move;
      if (this.position < 0) {
        this.position = this.position + move;
      } else {
        this.position = min;
      }
    },
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
    // TODO atlatszo layerre rakni az eventet inkabb!!!
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
  components: { graphics, icon }
}
</script>

<style scoped lang="postcss">
  @media (--fk-extra-small-screen), (--fk-small-screen) {
    #home {
      height: 20%;
      min-height: 20%;
    }
  }
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
    button {
      background-color: rgba(0, 0, 0, 0);
      outline: none;
      border: 0px solid white;
      font-size: 2em;
      width: 40px;
      height: 40px;
      position: absolute;
      margin-top: 60px;
      z-index: 1;
      display: none;
    }
    button.left {
      left: 5px;
    }
    button.right {
      right: 5px;
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
    .description-box, button {
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
    .description-box, button {
      color: white;
      svg {
        fill: white;
      }
    }
    .line {
      background-color: white;
    }
  }

  @media only screen and (max-width: 568px) {
    #home {
      height: auto;
      overflow: auto;
      position: static;
    }
    #home .description-box {
      width: 100%;
      height: auto;
      left: 0px;
      top: 0px;
      padding-top: 100px;
      padding-left: 17%;
      padding-bottom: 50px;
      padding-right: 20px;
      position: fixed;
      background-color: white;
      z-index: 5;
      /*border-bottom: 1px solid lightgray;*/
    }
    #home .graphics-container {
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 200px;
      overflow: hidden;
    }
    #home .graphics-container button {
      display: inline-block;
    }
    #home .line {
      bottom: 20px;
      height: 2px;
      width: 100%;
    }
  }
</style>
