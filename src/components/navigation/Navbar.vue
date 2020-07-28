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
        a {
          text-decoration: none;
          font-size: 18px;
          color: #000;
          transition: color 0.3s linear;
        }
        &.active {
          a {
            color: #fff;
          }
        }
      }
    }
  }
</style>
