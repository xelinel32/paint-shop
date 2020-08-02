<template>
  <div class="main-wrapper">
    <div class="container">
      <keep-alive>
        <vue-page-transition name="overlay-left">
          <router-view />
        </vue-page-transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainWrapper',
  }
</script>

<style lang="scss"></style>
