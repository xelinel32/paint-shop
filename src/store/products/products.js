import axios from 'axios'

export default {
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
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
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
  },
}
