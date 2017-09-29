<template>
  <div id="product" v-if="product">

    <div class="container">
      <div class="product-category">
        <h1 class="category-name">{{product.title}}</h1>
        <h1 v-if="product.head" class="head">{{product.head}}</h1>
        <h1 v-if="product.subhead" class="subhead" v-html="product.subhead"></h1>
      </div>

      <div class="content">
        <article v-for="item in product.content">
          <div class="image-container">
            <!-- <img class="image" v-bind:class="(item.image).split('.')[0]" :src="imagePath(item.image, product.title)"></img> -->
            <picture>
              <source media="(min-width: 1200px)" :srcset="'http://res.cloudinary.com/meonin/image/upload/c_scale,w_1600/' + item.image + ' , http://res.cloudinary.com/meonin/image/upload/c_scale,w_2500/' + item.image + ' 2x'">
              <source media="(min-width: 992px)" :srcset="'http://res.cloudinary.com/meonin/image/upload/c_scale,w_1000/' + item.image + ' , http://res.cloudinary.com/meonin/image/upload/c_scale,w_2000/' + item.image + ' 2x'">
              <source media="(min-width: 569px)" :srcset="'http://res.cloudinary.com/meonin/image/upload/c_scale,w_800/' + item.image + ' , http://res.cloudinary.com/meonin/image/upload/c_scale,w_1600/' + item.image + ' 2x'">
              <img src="http://res.cloudinary.com/meonin/image/upload/c_scale,w_1000/NANA1.jpg" srcset="http://res.cloudinary.com/meonin/image/upload/c_scale,w_2000/NANA1.jpg 2x" alt="a head carved out of wood">
            </picture>
            <div class="shadow"></div>
          </div>

          <section v-if="item[language].title || item[language].text" class="text" v-bind:id="item.id" @click="toggleExpand(item.subContent[language].length)"">
            <h2 v-bind:id="item.id">{{item[language].title}}</h2>
            <p v-bind:id="item.id">{{item[language].text}}</p>
            <div v-if="item.subContent[language].length" v-bind:id="item.id" v-bind:class="['plus', 'plus' + item.id]">
              <icon v-bind:id="item.id" :glyph="plus"></icon>
            </div>
          </section>

          <section v-if="item.subContent[language].length" v-bind:class="['expandable', 'expandable' + item.id]">
            <p>{{item.subContent[language]}}</p>
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
      plus,
      size: 500
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
    imagePath: function(image, size) {
      return 'http://res.cloudinary.com/meonin/image/upload/c_scale,w_' + size + '/' + image;
      // return require('./../assets/images/' + title + '/' + image);
    },
    toggleExpand(show) {
      if (show) {
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

<style lang="postcss">
/*@import './../variables.css';*/


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
    .product-category {
      height: 70vh;
      .category-name {
        font-size: 22px;
        width: 100%;
        text-align: center;
        color: gray;
        font-weight: normal;
        text-transform: uppercase;
      }
      .head {
        font-size: 60px;
        width: 100%;
        text-align: center;
        color: #666666;
        font-weight: bold;
        text-transform: lowercase;
      }
      .subhead {
        font-size: 34px;
        width: 100%;
        padding-right: 10%;
        margin-top: 30px;
        text-align: right;
        color: #666666;
        font-weight: bold;
        text-transform: lowercase;
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

@media only screen and (max-width: 569px) {
  #product .container {
    padding-top: 100px;
  }
  #product .container .product-category .category-name {
    font-size: 22px;
    width: 100%;
    text-align: center;
    color: gray;
    font-weight: normal;
    text-transform: uppercase;
  }
  #product .container .product-category .head {
    font-size: 60px;
  }
  #product .container .product-category .subhead {
    font-size: 18px;
  }
  #product .container .product-category .subhead p {
    font-size: 16px !important;
    margin-top: 5px;
  }
  #product .container .content article .text {
    margin-left: 30px;
    margin-right: 20px;
    padding-bottom: 70px;
  }
  #product .container .content article .text h2 {
    width: 80%;
  }
  #product .container .content article .text p {
    width: 100%;
  }
  #product .container .content article .text .plus {
    right: 10%;
    bottom: 15px;
  }
  #product .container .content article .text .plus.close {
    bottom: -50px;
  }
  #product .container .content article .text .plus svg {
    width: 30px;
    height: 30px;
  }
  #product .container .content article .expandable p {
    width: 100%;
    margin-left: 0px;
    padding-top: 70px;
  }
  #product .container .content article .expandable.open {
    padding-left: 30px;
    padding-right: 20px;
  }
  #product .container .content article .expandable {
    padding-left: 30px;
    padding-right: 20px;
  }
}

@media only screen and (min-width: 569px) and (max-width: 992px){
  #product {
    /*background-color: red;*/
    width: 100%;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1200px){
  #product {
    /*background-color: blue;*/
    width: 100%;
  }
}

@media only screen and (min-width: 1200px){
  #product {
    /*background-color: yellow;*/
    width: 100%;
  }
}






</style>
