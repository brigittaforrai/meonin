<template>
  <div id="side-menu" v-bind:class="home ? time : page">
    <router-link to="/home" class="link">
      <div class="logo">
        <icon class="logo-svg" width="45" height="45" :glyph="logo"></icon>
      </div>
    </router-link>
    <ul class="menu">
      <li class="menu-elem" v-for="link in links" v-if="links && !home" @click="select(link)">
        <router-link :to="{ name: 'Products', params: { productId: link } }">{{link}}</router-link>
      </li>
      <li class="menu-elem divider" v-if="!home">-</li>
      <li class="menu-elem" v-if="home">
        <router-link to="/migo" class="link">migo</router-link>
      </li>
      <li class="menu-elem" v-if="home">
        <router-link to="/blog" class="link">blog</router-link>
      </li>
      <li class="menu-elem">
        <router-link to="/about" class="link">about</router-link>
      </li>
      <li class="menu-elem">
        <router-link to="/contact" class="link">contact</router-link>
      </li>
      <li class="menu-elem lang">
        <span class="lang" @click="setLanguage()">{{language}}</span>
      </li>

    </ul>
  </div>
</template>

<script>
import icon from './icon.vue';
import logo from "./../assets/meonin-logo2.svg";

export default {
  name: 'sideMenu',
  props: ['home'],
  data () {
    return {
      logo,
      page: 'product'
    }
  },
  computed: {
    links: function() {
      return this.$store.getters.g_menuList;
    },
    language: function() {
      return this.$store.getters.g_language;
    },
    time: function() {
      return this.$store.getters.g_time;
    }
  },
  methods: {
    select: function(product) {
      this.removeClasses();
      this.$store.commit('m_selectProduct', product);
    },
    setLanguage: function() {
      this.$store.commit('m_changeLanguage');
    },
    removeClasses() {
      if(this.$parent.$el) {
        for(let id=1; id<10; id++) {
          let elem = this.$parent.$el.querySelector('.expandable' + id);
          if(elem) {
            elem.classList.remove('open');
          }
        }
      }
    }
  },
  components: {
    icon
  }
}
</script>

<style scoped lang="postcss">
#side-menu {
  width: auto;
  min-width: 50px;
  height: auto;
  min-height: 100px;
  position: absolute;
  left: 50px;
  top: 50px;
  .logo {
    width: 45px;
    height: 45px;
    margin-bottom: 50px;
  }
  ul {
    width: 100%;
    height: 100%;
    .lang {
      cursor: pointer;
    }
    li, .lang {
      padding-top: 7px;
      padding-bottom: 7px;
      list-style-type: none;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      a:link {
        text-decoration: none;
      }
      a:visited {
        text-decoration: none;
      }
      a:hover {
        text-decoration: none;
      }
    }
    .divider {
      padding-left: 15px;
    }
  }
}
.night ul li {
  .lang {
    color: white;
  }
  .lang:hover {
    color: gray;
  }
  a:link {
    color: white;
  }
  a:visited {
    color: white;
  }
  a:hover {
    color: gray;
  }
}
.night .logo svg {
  fill: white;
}

.day ul li, .product ul li  {
  .lang {
    color: black;
  }
  .lang:hover {
    color: gray;
  }
  a:link {
    color: black;
  }
  a:visited {
    color: black;
  }
  a:hover {
    color: gray;
  }
}
.day .logo svg {
  fill: black;
}
</style>
