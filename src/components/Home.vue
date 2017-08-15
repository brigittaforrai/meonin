<template>
  <div id="home">

    <div class="header">
      <div class="logo-container">
        <div class="logo"></div>
        <div class="logo-text">
          <p>collection<br>of<br>simple<br>elements</p>
        </div>
      </div>
      <ul class="home-menu about">
        <li class="menu-elem">
          <router-link to="/about" class="link">about</router-link>
        </li>
        <li class="menu-elem contact">
          <router-link to="/contact" class="link">contact</router-link>
        </li>
        <li class="menu-elem lang">
          hun
        </li>
      </ul>
    </div>

    <canvas @click="selectProduct('sideboard')"></canvas>

    <div class="description-box" v-if="datatext">
      <h2 class="title">{{datatext.title}}</h2>
      <p class="text">{{datatext.text}}</p>
    </div>

  </div>
</template>

<script>
import DATA from './../data/texts.js';

export default {
  name: 'Home',
  computed: {
    datatext: function() {
      return DATA.pages.home.content[0];
    }
  },
  methods: {
    selectProduct: function(productName) {
      // this.$store.commit('m_selectProduct', productName);
      this.$router.push('products/' + productName);
    }
  },
}
</script>

<style scoped lang="postcss">
  #home {
    height: 100%;
    background-color: black;
    padding-bottom: 50px;
    .header {
      height: 150px;
      width: 85%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .logo-container {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .logo {
          width: 75px;
          background-color: white;
          height: 100%;
          background-image: url("./../assets/meonin-logo2.svg");
          background-position: 50% 95%;
          background-size: 85%;
          background-repeat: no-repeat;
        }
        .logo-text {
          width: 100px;
          height: 100%;
          padding-top: 85px;
          margin-left: 25px;
          vertical-align: bottom;
          box-sizing: content-box;
          p {
            color: white;
            text-align: left;
            text-transform: uppercase;
            font-size: 16px;
            display: block;
            line-height: 100%;
          }
        }
      }
      .home-menu {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 50%;
        height: 100%;
        padding-top: 75px;
        li {
          color: white;
          font-size: 16px;
          font-weight: normal;
          text-transform: uppercase;
          .link {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    canvas {
      width: 100%;
      height: 300px;
      display: block;
      margin-top: 80px;
      margin-left: auto;
      margin-right: auto;
      background-color: black;
      background-image: url('./../assets/temp/home-graphics2.jpg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50% 100%;
    }
    .description-box {
      margin-left: 7.5%;
      margin-top: 80px;
      width: 33%;
      height: 50px;
      color: white;
    }
  }
</style>
