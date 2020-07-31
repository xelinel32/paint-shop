<template>
  <div class="cart">
    <router-link to="/cart">
      <i class="material-icons">shopping_cart</i>
    </router-link>
    <span v-if="cart.length" class="cart__sum">{{ cart.length }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    props: {
      cart: {
        type: Array,
        required: true,
        default: () => [],
      },
    },
  }
</script>

<style lang="scss">
  .cart {
    margin-left: 30px;
    position: relative;
    i {
      color: #fff;
    }
    &__sum {
      position: absolute;
      top: -10px;
      right: -8px;
      display: block;
      background: $black;
      width: 20px;
      height: 20px;
      border-radius: 50px;
      color: #fff;
      font-size: 10px;
      text-align: center;
      line-height: 20px;
    }
  }
</style>
