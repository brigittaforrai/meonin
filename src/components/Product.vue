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
            <!-- <img class="image" v-bind:src="path + product.title + '/' + item.image"></img> -->
            <img class="image" :src="imagePath(item.image, product.title)"></img>
            <div class="shadow"></div>
          </div>
          <div class="text" v-bind:id="item.id" @click="toggleExpand()"">
            <h2 v-bind:id="item.id">{{item[language].title}}</h2>
            <p v-bind:id="item.id">{{item[language].text}}</p>
            <div v-bind:id="item.id" v-bind:class="['plus', 'plus' + item.id]">
              <icon v-bind:id="item.id" :glyph="plus"></icon>
            </div>
          </div>
          <section v-bind:class="['expandable', 'expandable' + item.id]">
            <p>
              A Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban; mikor egy ismeretlen nyomdász összeállította a betûkészletét és egy példa-könyvet vagy szöveget nyomott papírra, ezt használta.
            </p>
          </section>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from './SideMenu.vue';
import icon from './icon.vue';
import plus from "./../assets/plus.svg";

export default {
  name: 'product',
  data: function() {
    return {
      plus,
      path: '/src/assets/images/'
    }
  },
  computed: {
    product: function() {
      return this.$store.getters.g_productObject;
    },
    language: function() {
      return this.$store.getters.g_language;
    },
  },
  methods: {
    imagePath: function(image, title) {
      return require('./../assets/images/' + title + '/' + image);
    },
    toggleExpand() {
      let id = event.target.id || event.target.parentNode.id;
      let selector = '.expandable' + id;
      let target = this.$el.querySelector(selector);
      let plus = this.$el.querySelector('.plus'+id);
      console.log(plus);
      if(target.classList.contains('open')) {
        target.classList.remove('open')
        plus.classList.remove('close')
      } else {
        target.classList.add('open');
        plus.classList.add('close');
      }
    },
  },
  components: {
    SideMenu,
    icon
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
        }
        img {
          width: 100%;
          height: auto;
          opacity: 80%;
        }
        .text {
          margin-left: 200px;
          margin-right: 100px;
          padding-bottom: 100px;
          padding-top: 50px;
          position: relative;
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
          .plus {
            position: absolute;
            right: 50%;
            bottom: 50px;
            width: auto;
            height: auto;
            cursor: pointer;
            transform: rotate(0deg);
            transition: all .5s ease;
            svg {
              transition: all .5s ease;
              width: 20px;
              height: 20px;
              fill: gray;
            }
          }
          .plus.close {
            transform: rotate(45deg);
            bottom: -50px;
            svg {
              fill: white;
            }
          }
        }
        .expandable {
          background-color: black;
          color: white;
          width: 100%;
          height: auto;
          max-height: 0px;
          padding-left: 10%;
          padding-right: 10%;
          transition: all 1s ease;
          padding-top: 0px;
          padding-bottom: 0px;
          p {
            width: 50%;
            height: auto;
            padding-top: 50px;
            padding-bottom: 50px;
          }
        }
        .expandable.open {
          max-height: 500px;
          animation-name: test;
          animation-duration: 5s;

        }
      }
    }
  }
}
@keyframes test {
  /*0% {height: 0px;}*/
  /*100% {height: 200px;}*/
}
</style>
