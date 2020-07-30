<template>
  <div class="cart">
    <router-link to="/cart">
      <i class="material-icons">shopping_cart</i>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
  }
</script>

<style lang="scss">
  .cart {
    margin-left: 30px;
    i {
      color: #fff;
    }
  }
</style>
