<template>
  <div class="footer">
    <span class="footer__copy">&copy; All right reserved 2020</span>
    <span class="footer__author">Artemy</span>
  </div>
</template>

<script>
  export default {
    name: 'FooterMain',
  }
</script>

<style lang="scss">
  .footer {
    background-color: #0984e3;
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: $white;
      font-size: 18px;
    }
  }
</style>
