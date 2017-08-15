<template>
  <div id="sideMenu">
    <router-link to="/home" class="link">
      <div class="logo"></div>
    </router-link>
    <ul class="menu">
      <li class="menu-elem" v-for="link in links" v-if="links" @click="select(link)">
        <router-link :to="{ name: 'Products', params: { productId: link } }">{{link}}</router-link>
      </li>
      <li class="menu-elem divider">-</li>
      <li class="menu-elem">
        <router-link to="/about" class="link">about</router-link>
      </li>
      <li class="menu-elem">
        <router-link to="/contact" class="link">contact</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'sideMenu',
  data () {
    return {

    }
  },
  computed: {
    links: function() {
      return this.$store.getters.g_menuList;
    }
  },
  methods: {
    select: function(product) {
      this.$store.commit('m_selectProduct', product);
    }
  }
}
</script>

<style lang="postcss" scoped>
#sideMenu {
  width: auto;
  min-width: 50px;
  height: auto;
  min-height: 100px;
  position: absolute;
  left: 70px;
  top: 120px;
  .logo {
    width: 45px;
    height: 45px;
    background-image: url('./../assets/meonin-logo2.svg');
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 30px;
  }
  ul {
    width: 100%;
    height: 100%;
    li {
      padding-top: 7px;
      padding-bottom: 7px;
      list-style-type: none;
      text-transform: uppercase;
      color: gray;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      a:link {
        text-decoration: none;
      }
      a:visited {
        color: gray;
        text-decoration: none;
      }
      a:hover {
        color: black;
        text-decoration: none;
      }
    }
    .divider {
      padding-left: 15px;
    }
  }
}
</style>
