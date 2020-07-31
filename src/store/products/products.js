import axios from 'axios'

export default {
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_TO_CART(state, product) {
      product.quantity = 1
      let isProductExist = false
      state.cart.map((item) => {
        if (item.id === product.id) {
          isProductExist = true
          item.quantity++
        }
      })
      isProductExist || state.cart.push(product)
    },
    UNSET_ITEM_CART(state, idx) {
      state.cart.splice(idx, 1)
    },
  },
  actions: {
    async FETCH_PRODUCTS({ commit }) {
      try {
        const productFetch = await axios('http://localhost:8080/products', {
          method: 'GET',
        })
        const products = productFetch.data
        commit('SET_PRODUCTS', products)
        return products
      } catch (error) {
        console.log(error)
      }
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_TO_CART', product)
    },
    DEL_FROM_CART({ commit }, idx) {
      commit('UNSET_ITEM_CART', idx)
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
  },
}
