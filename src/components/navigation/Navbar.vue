<template>
  <div class="navbar">
    <div class="navbar__logo">
      <router-link to="/">
        <img src="../../assets/logo.png" alt="logo" />
      </router-link>
    </div>
    <ul class="navbar__menu">
      <router-link
        tag="li"
        active-class="active"
        class="navbar__menu-item"
        to="/managment"
      >
        <a href="#">Managment</a></router-link
      >
      <router-link
        tag="li"
        active-class="active"
        class="navbar__menu-item"
        to="/contact"
      >
        <a href="#">Contact</a></router-link
      >
      <cart :cart="CART"></cart>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Cart from '@/components/cart/Cart'
  export default {
    name: 'Navbar',
    computed: {
      ...mapGetters(['CART']),
    },
    components: {
      Cart,
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
      &-item {
        margin: 0 10px;
        background-color: $white;
        padding: 10px 15px;
        transition: background-color 0.3s linear;
        a {
          text-decoration: none;
          font-size: 18px;
          color: #000;
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
  }
</style>
