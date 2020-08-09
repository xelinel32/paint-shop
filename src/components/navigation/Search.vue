<template>
  <div class="search">
    <div class="search__block">
      <span @click="closeSearch" class="search__block-close"
        ><i class="material-icons">close</i></span
      >
      <form class="search__form" @submit.prevent="getDataForm(searchName)">
        <input
          type="text"
          name="search-text"
          id="search-text"
          placeholder="Input search query"
          required
          v-model="searchName"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data: () => ({
      searchName: '',
    }),
    methods: {
      closeSearch() {
        this.$emit('closeSearch')
      },
      getDataForm(value) {
        if (value) {
          this.$router.push({ name: 'catalog', query: { searchName: value } })
          this.closeSearch()
          this.$router.go(this.$router.currentRoute)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .search {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(#000000, 0.7);
    z-index: 20;
    &__block {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      &-close {
        position: fixed;
        top: 2%;
        right: 2%;
        i {
          font-size: 70px;
          color: $white;
          cursor: pointer;
        }
      }
    }
    &__form {
      display: flex;
    }
    input {
      width: 600px;
      padding: 10px 15px;
      outline: none;
      font-size: 18px;
      font-family: Segoe UI;
      margin-right: 15px;
    }
    button {
      font-size: 18px;
      padding: 10px 15px;
      cursor: pointer;
      background-color: coral;
      border: none;
      color: $white;
      transition: opacity 0.3s ease;
      &:hover {
        opacity: 0.9;
      }
    }
  }
</style>
