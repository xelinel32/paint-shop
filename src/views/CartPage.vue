<template>
  <div class="cart-page">
    <div class="cart-page__head">
      <p v-if="!CART.length">Корзина пуста</p>
      <p>
        Сумма: <b>{{ cartCost | priceFormat }}</b>
      </p>
    </div>
    <transition-group name="search-fade-in">
      <cart-item
        v-for="(i, idx) in CART"
        :key="i.id"
        :cartSingle="i"
        @deleteFromCart="deleteFromCart(idx)"
      >
      </cart-item>
    </transition-group>
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
      cartCost() {
        if (this.CART.length) {
          let resultCost = []
          resultCost = this.CART.map((item) => {
            return item.price * item.quantity
          }).reduce((all, item) => {
            return all + item
          }, 0)
          return resultCost
        } else {
          return 0
        }
      },
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
