<template>
  <div class="main-wrapper">
    <div class="container">
      <vue-page-transition name="fade-in-up">
        <keep-alive>
          <router-view />
        </keep-alive>
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainWrapper',
    created() {
      this.$router.beforeEach((to, from, next) => {
        this.$Progress.start()
        next()
      })
      this.$router.afterEach((to, from) => {
          this.$Progress.finish()
      })
    },
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
