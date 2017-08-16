<template>
  <div id="product" v-if="product">
    <side-menu></side-menu>

    <div class="container">
      <div class="productCategory">
        <h1 class="categoryName">{{product.title}}</h1>
      </div>

      <div class="content">
        <article v-for="item in product.content">
          <div class="image-container">
            <img class="image" :src="imagePath(item.image, product.title)"></img>
            <div class="shadow"></div>
          </div>
          <div class="text">
            <h2>{{item[language].title}}</h2>
            <p>{{item[language].text}}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from './SideMenu.vue';

export default {
  name: 'product',
  computed: {
    product: function() {
      return this.$store.getters.g_productObject;
    },
    language: function() {
      return this.$store.getters.g_language;
    }
  },
  methods: {
    imagePath: function(image, title) {
      return require('./../assets/images/' + title + '/' + image);
    },
  },
  components: {
    SideMenu,
  }
}
</script>

<style lang="postcss" scoped>
#product {
  background-color: rgba(245, 245, 245);
  min-height: 100%;
  height: auto;
  width: 100%;
  .container {
    width: 100%;
    height: auto;
    padding-top: 200px;
    min-height: 100%;
    .productCategory {
      height: 70vh;
      h1 {
        font-size: 36px;
        width: 100%;
        text-align: center;
        color: gray;
        font-weight: normal;
        text-transform: uppercase;
      }
    }
    .content {
      article {
        color: gray;
        .image-container {
          width: auto;
          height: auto;
          position: relative;
          .shadow {
            position: absolute;
            top: 0px;
            left: 0px;
            height: 100%;
            width: 100%;
            /*box-shadow: inset 0px 0px 80px 80px rgba(245,245,245);*/
          }
        }
        img {
          width: 100%;
          height: auto;
          opacity: 80%;
        }
        .text {
          margin-left: 200px;
          padding-bottom: 50px;
          padding-top: 50px;
          h2 {
            color: gray;
            font-weight: bold;
            text-transform: none;
            font-size: 22px;
            width: 200px;
          }
          p {
            color: gray;
            width: 400px;
            line-height: 140%;
          }
        }
      }
    }
  }
}
</style>
