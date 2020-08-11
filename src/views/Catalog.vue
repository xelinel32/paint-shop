<template>
  <div class="catalog">
    <notification :messages="messages"></notification>
    <h1 class="catalog__title primary-title">Catalog</h1>
    <div class="catalog__controls">
      <v-select
        label="name"
        :options="options"
        v-model="selectValue"
        @input="sortByCategories"
      ></v-select>
      <vue-slider
        v-model="sliderValue"
        :tooltip="'always'"
        :tooltip-formatter="sliderValueFormatter"
        :min="0"
        :max="10000"
        :width="280"
        @change="setSliderRange"
      ></vue-slider>
    </div>
    <div class="catalog__wrapper">
      <loader v-if="isLoading"></loader>
      <catalog-item
        v-else
        v-for="product in sortedProducts"
        :key="product.id"
        :product="product"
        @setMessage="setMessage"
      >
      </catalog-item>
    </div>
    <promotion :products="PRODUCTS"></promotion>
  </div>
</template>

<script>
  import CatalogItem from '@/components/catalog/CatalogItem'
  import VueSlider from 'vue-slider-component'
  import vSelect from 'vue-select'
  import Notification from '@/components/notification/Notification'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'Catalog',
    components: {
      CatalogItem,
      vSelect,
      VueSlider,
      Notification,
    },
    data: () => ({
      isLoading: true,
      options: [
        {
          name: 'All',
          value: 'all',
        },
        {
          name: 'Red',
          value: 'red',
        },
        {
          name: 'Blue',
          value: 'blue',
        },
        {
          name: 'Black',
          value: 'black',
        },
      ],
      messages: [],
      products: [],
      selectValue: { name: 'All', value: 'all' },
      sliderValue: [0, 10000],
      sliderValueFormatter: '{value} USD',
    }),
    computed: {
      ...mapGetters(['PRODUCTS']),
      sortedProducts() {
        return this.products
      },
    },
    methods: {
      ...mapActions(['FETCH_PRODUCTS']),
      setSliderRange() {
        if (this.products.length) {
          this.products = this.products.filter((product) => {
            return (
              product.price >= this.sliderValue[0] &&
              product.price <= this.sliderValue[1]
            )
          })
        }
      },
      sortByCategories(catData) {
        this.products = []
        this.PRODUCTS.map((product) => {
          if (product.category === catData.value) {
            this.products.push(product)
          } else if (catData.value === 'all') {
            this.products = this.PRODUCTS
          }
        })
      },
      setMessage(data) {
        this.messages.unshift(data)
      },
      sortBySearchName() {
        let valueSearch = this.$route.query.searchName
        if (valueSearch) {
          this.products = this.PRODUCTS.filter((item) => {
            return item.name.toLowerCase().includes(valueSearch.toLowerCase())
          })
        } else {
          this.products = this.PRODUCTS
        }
      },
    },
    mounted() {
      this.FETCH_PRODUCTS().then((data) => {
        if (data.length) {
          this.sortBySearchName()
          this.isLoading = false
        }
      })
    },
  }
</script>

<style lang="scss">
  @import 'vue-select/src/scss/vue-select.scss';
  @import '~vue-slider-component/lib/theme/antd.scss';
  .catalog {
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }
    .catalog__controls {
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .v-select {
        cursor: pointer;
        width: 280px;
      }
    }
  }
</style>
