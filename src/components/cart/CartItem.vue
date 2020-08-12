<template>
  <div class="cart-item">
    <router-link
      :to="{ name: 'product', params: { viewName: cartSingle.name } }"
    >
      <img
        :src="require('../../assets/images/' + cartSingle.image)"
        :alt="cartSingle.name"
      />
    </router-link>
    <ul class="cart-item__info">
      <li>
        Name: <strong>{{ cartSingle.name }}</strong>
      </li>
      <li>
        Price: <strong>{{ cartSingle.price | priceFormat }}</strong>
      </li>
      <li>
        Category: <strong>{{ cartSingle.category }}</strong>
      </li>
      <li>
        Availability: <strong>{{ cartSingle.available ? 'Yes' : 'No' }}</strong>
      </li>
    </ul>
    <div class="cart-item__quantity">
      <span @click="minusProd">-</span>
      <input
        @keypress.enter="plusProd"
        type="text"
        :value="cartSingle.quantity"
        disabled
      />
      <span @click="plusProd">+</span>
    </div>
    <button class="cart-item__btn" @click="deleteCartItem">
      <i class="material-icons">highlight_off</i>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'CartItem',
    props: {
      cartSingle: {
        type: Object,
        required: true,
        default: () => {},
      },
    },
    methods: {
      deleteCartItem() {
        this.$emit('deleteFromCart')
      },
      plusProd() {
        this.$store.dispatch('PLUS_PROD', this.cartSingle.id)
      },
      minusProd() {
        this.$store.dispatch('MINUS_PROD', this.cartSingle.id)
      },
    },
  }
</script>

<style lang="scss">
  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 30px;
    margin-bottom: 30px;
    img {
      width: 200px;
    }
    &__btn {
      outline: none;
      background: transparent;
      border: none;
      cursor: pointer;
    }
    &__info {
      li {
        line-height: 25px;
        font-size: 16px;
        strong {
          font-weight: 700;
        }
      }
    }
    &__quantity {
      input {
        width: 30px;
        text-align: center;
        margin: 0 10px;
        border-radius: 5px;
        border: none;
        background: transparent;
      }
      span {
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
</style>
