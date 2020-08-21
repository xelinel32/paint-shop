<template>
  <div id="app">
    <div class="wrapper">
      <vue-progress-bar></vue-progress-bar>
      <navbar></navbar>
      <main-wrapper></main-wrapper>
      <footer-main></footer-main>
    </div>
  </div>
</template>

<script>
  import MainWrapper from '@/layouts/MainWrapper'
  import Navbar from '@/components/navigation/Navbar'
  import FooterMain from '@/components/navigation/Footer'
  export default {
    name: 'App',
    components: {
      MainWrapper,
      Navbar,
      FooterMain,
    },
  }
</script>

<style lang="scss"></style>
