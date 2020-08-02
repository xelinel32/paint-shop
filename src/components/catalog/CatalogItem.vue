<template>
  <div class="catalog-item">
    <div class="catalog-item__pic">
      <img
        :src="require('../../assets/images/' + product.image)"
        :alt="product.name"
      />
    </div>
    <ul class="catalog-item__desc">
      <li>
        Name: <strong>{{ product.name }}</strong>
      </li>
      <li>
        Price: <strong>{{ product.price | priceFormat }}</strong>
      </li>
      <li>
        Category: <strong>{{ product.category }}</strong>
      </li>
      <li>
        Availability:
        <strong :class="product.available ? 'active' : 'no-active'">{{
          product.available ? 'Yes' : 'No'
        }}</strong>
      </li>
    </ul>
    <p>{{ product.description }}</p>
    <div class="catalog-item__group">
      <button @click="addToCart(product.id)" class="primary-btn">
        <i class="material-icons">add_shopping_cart</i>
      </button>
      <button class="catalog-item__btn primary-btn">
        Подробнее <i class="material-icons">arrow_right_alt</i>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CatalogItem',
    props: {
      product: {
        type: Object,
        required: true,
        default: () => {},
      },
    },
    methods: {
      addToCart() {
        this.$store.dispatch('ADD_TO_CART', this.product)
      },
    },
  }
</script>

<style lang="scss">
  .catalog-item {
    flex: 0 1 calc(33.33% - 30px);
    box-shadow: 0 0 8px 0 #e0e0e0;
    margin: 0 15px;
    padding: 30px;
    margin-bottom: 30px;
    &__pic {
      max-width: 250px;
      margin-bottom: 20px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
    &__desc {
      list-style-type: none;
      margin-bottom: 20px;
      li {
        line-height: 25px;
        font-size: 16px;
        strong {
          font-weight: 700;
          &.active {
            background: greenyellow;
            padding: 2px 5px;
            border-radius: 3px;
          }
          &.no-active {
            background: indianred;
            padding: 2px 5px;
            border-radius: 3px;
          }
        }
      }
    }
    &__btn {
      width: auto !important;
      height: auto !important;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      i {
        line-height: 0 !important;
        margin-left: 5px;
      }
    }
    &__group {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
