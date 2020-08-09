<template>
  <div class="navbar">
    <div class="navbar__logo">
      <router-link to="/">
        <img src="../../assets/logo.png" alt="logo" />
      </router-link>
    </div>
    <ul class="navbar__menu">
      <router-link tag="li" class="navbar__menu-item" to="/managment">
        <a href="#">Managment</a></router-link
      >
      <router-link tag="li" class="navbar__menu-item" to="/contact">
        <a href="#">Contact</a></router-link
      >
      <cart :cart="CART"></cart>
    </ul>
    <button class="navbar__search" @click="isOpenSearch">
      <i class="material-icons">search</i>
    </button>
    <transition name="search-fade-in">
      <search v-if="isOpenSearchField" @closeSearch="isOpenSearch"></search>
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Cart from '@/components/cart/Cart'
  import Search from '@/components/navigation/Search'
  export default {
    name: 'Navbar',
    components: {
      Cart,
      Search,
    },
    data: () => ({
      isOpenSearchField: false,
    }),
    computed: {
      ...mapGetters(['CART']),
    },
    methods: {
      isOpenSearch() {
        this.isOpenSearchField = !this.isOpenSearchField
      },
    },
  }
</script>

<style lang="scss">
  .navbar {
    background-color: #0984e3;
    padding: 8px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 1px 10px -1px $black;
    &__logo {
      width: 48px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__menu {
      display: flex;
      align-items: center;
      margin-left: auto;
      &-item {
        margin: 0 10px;
        padding: 10px 15px;
        transition: background-color 0.3s linear;
        a {
          text-decoration: none;
          font-size: 18px;
          color: $white;
          transition: color 0.2s linear;
        }
        &.active {
          background-color: #74b9ff;
          border-radius: 4px;
          a {
            color: $white;
          }
        }
      }
    }
    &__search {
      background-color: transparent;
      border: none;
      outline: none;
      margin-left: 15px;
      cursor: pointer;
      i {
        color: $white;
      }
    }
  }
  .search-fade-in-enter-active,
  .search-fade-in-leave-active {
    transition: opacity 0.5s;
  }
  .search-fade-in-enter,
  .search-fade-in-leave-to {
    opacity: 0;
  }
</style>
