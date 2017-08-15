<template>
  <div id="product" v-if="product">
    <side-menu></side-menu>

    <div class="container">
      <div class="productCategory">
        <h1 class="categoryName">{{product.title}}</h1>

      </div>
      <div class="content" v-if="product.title == 'sideboard'">
        <article v-for="image in product.images">
          <img class="image" :src="imagePath(image)"></img>
          <div class="text">
            <h2></h2>
            <p></p>
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
  data: function() {
    return {
    }
  },
  computed: {
    product: function() {
      return this.$store.getters.g_productObjects;
    },
  },
  methods: {
    imagePath: function(image) {
      return require('./../assets/images/sideboard/' + image);
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
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
