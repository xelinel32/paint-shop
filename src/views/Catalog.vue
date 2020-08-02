<template>
  <div class="catalog">
    <h1 class="catalog__title primary-title">Catalog</h1>
    <div class="catalog__controls">
      <v-select
        label="name"
        placeholder="Chose paint category"
        v-model="optionValue"
        :options="options"
        @input="sortByCategories(optionValue.value)"
      ></v-select>
    </div>
    <div class="catalog__wrapper">
      <loader v-if="isLoading"></loader>
      <catalog-item
        v-else
        v-for="product in sortedProducts"
        :key="product.id"
        :product="product"
      >
      </catalog-item>
    </div>
  </div>
</template>

<script>
  import CatalogItem from '@/components/catalog/CatalogItem'
  import vSelect from 'vue-select'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'Catalog',
    components: {
      CatalogItem,
      vSelect,
    },
    data: () => ({
      isLoading: true,
      options: [
        {
          name: 'All',
          value: 'all',
        },
        {
          name: 'Red',
          value: 'red',
        },
        {
          name: 'Blue',
          value: 'blue',
        },
        {
          name: 'Black',
          value: 'black',
        },
      ],
      optionValue: '',
      products: [],
    }),
    computed: {
      ...mapGetters(['PRODUCTS']),
      sortedProducts() {
        if (this.products.length && this.optionValue) {
          return this.products
        } else {
          return this.PRODUCTS
        }
      },
    },
    methods: {
      ...mapActions(['FETCH_PRODUCTS']),
      sortByCategories(cat) {
        this.products = this.PRODUCTS.filter((i) => cat === i.category)
      },
    },
    mounted() {
      this.FETCH_PRODUCTS().then((data) => {
        if (data.length) {
          this.isLoading = false
        }
      })
    },
  }
</script>

<style lang="scss">
  @import 'vue-select/src/scss/vue-select.scss';
  .catalog {
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }
    .catalog__controls {
      max-width: 280px;
      margin-bottom: 40px;
      .v-select {
        cursor: pointer;
      }
      .vs__search {
        z-index: 0;
      }
    }
  }
</style>
