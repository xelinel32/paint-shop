<template>
  <div class="catalog">
    <h1 class="catalog__title primary-title">Catalog</h1>
    <div class="catalog__wrapper">
      <catalog-item
        v-for="product in products"
        :key="product.id"
        :product="product"
        @addToCart="addToCart"
      >
      </catalog-item>
    </div>
  </div>
</template>

<script>
  import CatalogItem from '@/components/catalog/CatalogItem'
  export default {
    name: 'Catalog',
    components: {
      CatalogItem,
    },
    data: () => ({
      products: [
        {
          id: 0,
          image: '1.jpg',
          name: 'T-shirt 1',
          price: 2100.234234234,
          available: true,
          category: 'Мужские',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          id: 1,
          image: '2.jpg',
          name: 'T-shirt 2',
          price: 3150.12312412,
          available: true,
          category: 'Женские',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          id: 2,
          image: '3.jpg',
          name: 'T-shirt 3',
          price: 4200.51524,
          available: false,
          category: 'Женские',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          id: 3,
          image: '4.jpg',
          name: 'T-shirt 4',
          price: 5300.1245512,
          available: true,
          category: 'Мужские',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          id: 4,
          image: '5.jpg',
          name: 'T-shirt 5',
          price: 6500.3522314,
          available: false,
          category: 'Женские',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          id: 5,
          image: '6.jpg',
          name: 'T-shirt 6',
          price: 8700.4124123,
          available: true,
          category: 'Женские',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
      ],
    }),
    methods: {
      addToCart(id) {
        console.log('Identifier elements ' + id)
      },
    },
  }
</script>

<style lang="scss">
  .catalog {
    padding: 50px 0;
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }
  }
</style>
