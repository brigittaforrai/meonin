<template>
  <div id="product" v-if="product">

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
          <section class="text" v-bind:id="item.id" @click="toggleExpand()"">
            <h2 v-bind:id="item.id">{{item[language].title}}</h2>
            <p v-bind:id="item.id">{{item[language].text}}</p>
            <div v-bind:id="item.id" v-bind:class="['plus', 'plus' + item.id]">
              <icon v-bind:id="item.id" :glyph="plus"></icon>
            </div>
          </section>
          <section v-bind:class="['expandable', 'expandable' + item.id]">
            <p>
              A Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban; mikor egy ismeretlen nyomdász összeállította a betûkészletét és egy példa-könyvet vagy szöveget nyomott papírra, ezt használta.
            </p>
          </section>
        </article>
      </div>
    </div>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import SideMenu from './SideMenu.vue';
import icon from './icon.vue';
import plus from './../assets/plus.svg';
import footerComp from './footer.vue';

export default {
  name: 'product',
  data: function() {
    return {
      plus
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
    icon,
    footerComp
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
            display: none;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 2;
            /*background: linear-gradient(to bottom,  rgba(245,245,245,0) 90%,rgba(245,245,245,1) 100%), linear-gradient(to top,  rgba(245,245,245,0) 90%,rgba(245,245,245,1) 100%);*/
          }
          img {
            width: 100%;
            height: auto;
            opacity: 80%;
            /*box-shadow: 25px 25px 50px 0 black inset; */
          }
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
            right: 52%;
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
            bottom: -70px;
            svg {
              fill: black;
            }
          }
        }
        .expandable {
          background-color: white;
          color: gray;
          width: 100%;
          height: auto;
          max-height: 0px;
          transition: all 1s ease;
          padding-top: 0px;
          padding-bottom: 0px;
          p {
            width: 400px;
            height: auto;
            margin-left: 55%;
            padding-top: 100px;
            padding-bottom: 50px;
            opacity: 0;
            transition: all .7s ease;
          }
        }
        .expandable.open {
          max-height: 500px;
          animation-name: test;
          animation-duration: 5s;
          p {
            opacity: 1;
          }
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
