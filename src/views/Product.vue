<template>
  <div class="product">
    <div class="catalog-item__pic">
      <img
        :src="require('../assets/images/' + product.image)"
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
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'Product',
    props: {
      viewName: String,
    },
    computed: {
      ...mapGetters(['PRODUCTS']),
      product() {
        let res = {}
        this.PRODUCTS.find((p) => {
          if (p.name === this.viewName) {
            res = p
          }
        })
        return res
      },
    },
    methods: {
      ...mapActions(['FETCH_PRODUCTS']),
    },
    async mounted() {
      await this.FETCH_PRODUCTS()
    },
  }
</script>

<style lang="scss"></style>
