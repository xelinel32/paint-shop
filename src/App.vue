<template>
  <div id="app">
    <div class="wrapper">
      <navbar></navbar>
      <main-wrapper></main-wrapper>
    </div>
  </div>
</template>

<script>
  import MainWrapper from '@/layouts/MainWrapper'
  import Navbar from '@/components/navigation/Navbar'
  export default {
    name: 'App',
    components: {
      MainWrapper,
      Navbar,
    },
  }
</script>

<style lang="scss"></style>
