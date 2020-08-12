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
      <vue-tabs activeTabColor="#000" @tab-change="handleTabChange">
        <v-tab title="Information">
          {{ product.description }}
        </v-tab>

        <v-tab title="Specification">
          Second tab content
        </v-tab>

        <v-tab title="Feedback">
          Third tab content
        </v-tab>
      </vue-tabs>
      <!-- tabs end -->
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { VueTabs, VTab } from 'vue-nav-tabs/dist/vue-tabs'
  export default {
    name: 'Product',
    props: {
      viewName: String,
    },
    components: {
      VueTabs,
      VTab,
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
      handleTabChange(tabIndex) {
        console.log(tabIndex)
      },
    },
    async mounted() {
      await this.FETCH_PRODUCTS()
    },
  }
</script>

<style lang="scss">
  @import '~vue-nav-tabs/themes/material.scss';
  .product {
    &__block {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-desc {
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
    }
    .vue-tabs {
      width: 100%;
      .nav-tabs {
        background-color: #0984e3;
        & > li {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
