<template>
  <div class="cart-page">
    <div class="cart-page__head">
      <p v-if="!CART.length">Корзина пуста</p>
      <p>Сумма: <b>0 USD</b></p>
    </div>
    <cart-item
      v-for="(i, idx) in CART"
      :key="idx"
      :cartSingle="i"
      @deleteFromCart="deleteFromCart(idx)"
    ></cart-item>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CartItem from '@/components/cart/CartItem'
  export default {
    name: 'cart',
    components: {
      CartItem,
    },
    computed: {
      ...mapGetters(['CART']),
    },
    methods: {
      deleteFromCart(idx) {
        this.$store.dispatch('DEL_FROM_CART', idx)
      },
    },
  }
</script>

<style lang="scss">
  .cart-page {
    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      p {
        font-size: 18px;
      }
    }
  }
</style>
