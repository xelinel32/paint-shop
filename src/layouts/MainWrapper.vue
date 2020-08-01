<template>
  <div class="main-wrapper">
    <div class="container">
      <keep-alive>
        <router-view></router-view>
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
