import { createStore } from 'vuex'

const initialState = {
  cart: [],
}

const store = createStore({
  state: initialState,
  mutations: {
    addToCart(state, product) {
      const cartItem = state.cart.find((item) => item.id === product.id)
      if (cartItem) {
        cartItem.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(state, product) {
      const index = state.cart.findIndex((item) => item.id === product.id)

      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--
        } else {
          state.cart.splice(index, 1)
        }
      }
    },
  },
  actions: {
    // Action to load data from session storage
    loadDataFromSessionStorage({ commit }) {
      console.log('On mount - getting data from storage')
      const savedState = sessionStorage.getItem('vueStore')
      if (savedState) {
        this.state.cart = [...JSON.parse(savedState).cart]
      }
    },
  },
  modules: {},
  plugins: [
    // A Vuex plugin to save the state to session storage on each mutation
    (store) => {
      // Save the state to session storage whenever the state changes
      store.subscribe((mutation, state) => {
        sessionStorage.setItem('vueStore', JSON.stringify(state))
      })

      // Optionally, load the initial state from session storage
      const savedState = sessionStorage.getItem('vueStore')
      if (savedState) {
        store.replaceState(JSON.parse(savedState))
      }
    },
  ],
})

export default store
