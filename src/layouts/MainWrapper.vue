<template>
  <div class="main-wrapper">
    <div class="container">
      <h1>Hello World</h1>
      <catalog></catalog>
      <cart></cart>
    </div>
  </div>
</template>

<script>
  import Catalog from '@/components/catalog/Catalog'
  import Cart from '@/components/cart/Cart'
  export default {
    name: 'MainWrapper',
    components: {
      Catalog,
      Cart,
    },
  }
</script>

<style lang="scss"></style>
