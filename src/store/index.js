import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      const cartItem = state.cart.find((item) => item.id === product.id);

      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, product) {
      const index = state.cart.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--;
        } else {
          state.cart.splice(index, 1);
        }
      }
    },
  },
  actions: {},
  modules: {},
});
