<template>
  <div class="main-wrapper">
    <div class="container">
      <keep-alive>
        <vue-page-transition name="fade-in-up">
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

<style lang="scss">
  .main-wrapper {
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
