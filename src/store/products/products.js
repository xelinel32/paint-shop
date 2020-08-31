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
      state.cart.forEach((item) => {
        if (item.id === product.id) {
          isProductExist = true
          item.quantity++
        }
      })
      isProductExist || state.cart.push({ ...product, quantity: 1 })
    },
    UNSET_ITEM_CART(state, idx) {
      state.cart.splice(idx, 1)
    },
    PLUS_PROD_IN_CART(state, id) {
      state.cart.find((item) => {
        if (item.id === id) {
          item.quantity++
        }
      })
    },
    MINUS_PROD_IN_CART(state, id) {
      state.cart.find((item) => {
        if (item.id === id) {
          item.quantity > 1 ? item.quantity-- : (item.quantity = 1)
        }
      })
    },
  },
  actions: {
    async FETCH_PRODUCTS({ commit }) {
      try {
        const productFetch = await axios.get('http://localhost:8080/products')
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
    PLUS_PROD({ commit }, id) {
      commit('PLUS_PROD_IN_CART', id)
    },
    MINUS_PROD({ commit }, id) {
      commit('MINUS_PROD_IN_CART', id)
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
