<template>
  <div id="product" v-if="product">
    <side-menu></side-menu>

    <div class="container">
      <div class="productCategory">
        <h1 class="categoryName">{{product.title}}</h1>
      </div>

      <div class="content">
        <article v-for="item in product.content">
          <img class="image" :src="imagePath(item.image, product.title)"></img>
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
    SideMenu
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
        img {
          width: 100%;
          height: auto;
        }
        .text {
          h2 {
            color: gray;
          }
          p {
            color: gray;
          }
        }
      }
    }
  }
}
</style>
