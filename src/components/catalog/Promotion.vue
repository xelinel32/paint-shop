<template>
  <div class="promotion">
    <h2 class="primary-title">Promotion</h2>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="prod in products" :key="prod.id">
        <router-link
          active-class=""
          :to="{ name: 'product', params: { viewName: prod.name } }"
        >
          <div class="promotion__pic">
            <img
              :src="require('../../assets/images/' + prod.image)"
              :alt="prod.name"
            />
          </div>
        </router-link>
        <ul class="promotion__list">
          <li>{{ prod.name }}</li>
          <li>{{ prod.price }}</li>
        </ul>
        <p>{{ prod.description }}</p>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'Promotion',
    props: {
      products: {
        type: Array,
        required: true,
        default: () => [],
      },
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    data: () => ({
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    }),
  }
</script>

<style lang="scss">
  @import '~swiper/css/swiper.min.css';
  .promotion {
    position: relative;
    padding-bottom: 50px;
    &__list {
      list-style-type: none;
      margin-bottom: 20px;
      li {
        line-height: 25px;
        font-size: 16px;
      }
    }
    .swiper-button-next {
      outline: none;
    }
    .swiper-button-prev {
      outline: none;
    }
    .swiper-pagination {
      left: 0;
      right: 0;
      margin-top: 30px;
    }
    .swiper-pagination-bullet {
      margin: 0 2px;
      outline: none;
    }
  }
</style>
