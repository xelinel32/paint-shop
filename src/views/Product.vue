<template>
  <div class="product">
    <div class="product__block">
      <div class="product__block-pic">
        <img
          :src="require('../assets/images/' + product.image)"
          :alt="product.name"
        />
      </div>
      <ul class="product__block-desc">
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
      <!-- tabs -->
      <vue-tabs>
        <v-tab title="First tab">
          First tab content
        </v-tab>

        <v-tab title="Second tab">
          Second tab content
        </v-tab>

        <v-tab title="Third tab">
          Third tab content
        </v-tab>
      </vue-tabs>
      <!-- tabs end -->
    </div>
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

<style lang="scss">
  .product {
    &__block {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
