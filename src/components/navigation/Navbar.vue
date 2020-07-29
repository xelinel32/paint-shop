<template>
  <div class="navbar">
    <div class="navbar__logo">
      <router-link to="/"
        ><img src="../../assets/logo.png" alt="logo"
      /></router-link>
    </div>
    <ul class="navbar__menu">
      <router-link
        tag="li"
        active-class="active"
        class="navbar__menu-item"
        to="/onepage"
        ><a href="#">OnePage</a></router-link
      >
      <router-link
        tag="li"
        active-class="active"
        class="navbar__menu-item"
        to="/twopage"
        ><a href="#">TwoPage</a></router-link
      >
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
  }
</script>

<style lang="scss">
  .navbar {
    background-color: #0984e3;
    padding: 8px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 1px 10px -1px black;
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
      &-item {
        margin: 0 10px;
        background-color: #fff;
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
            color: #fff;
          }
        }
      }
    }
  }
</style>
