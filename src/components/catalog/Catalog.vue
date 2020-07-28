<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <catalog-item v-for="i in 5" :key="i"></catalog-item>
  </div>
</template>

<script>
  import CatalogItem from '@/components/catalog/CatalogItem'
  export default {
    name: 'Catalog',
    components: {
      CatalogItem,
    },
    data: () => ({}),
  }
</script>

<style lang="scss"></style>
