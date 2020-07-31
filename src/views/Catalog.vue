<template>
  <div class="catalog">
    <h1 class="catalog__title primary-title">Catalog</h1>
    <div class="catalog__wrapper">
      <loader v-if="isLoading"></loader>
      <catalog-item
        v-else
        v-for="product in PRODUCTS"
        :key="product.id"
        :product="product"
      >
      </catalog-item>
    </div>
  </div>
</template>

<script>
  import CatalogItem from '@/components/catalog/CatalogItem'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'Catalog',
    components: {
      CatalogItem,
    },
    data: () => ({
      isLoading: true,
    }),
    computed: {
      ...mapGetters(['PRODUCTS']),
    },
    methods: {
      ...mapActions(['FETCH_PRODUCTS']),
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
  .catalog {
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }
  }
</style>
