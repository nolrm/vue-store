import { createStore } from 'vuex';

const initialState = {
  products: [],
  cart: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },
  isAuthenticated: false,
  user: null,
  checkout: {
    shippingInfo: {},
    paymentDetails: {},
    orderSummary: {},
  },
  ui: {
    isLoading: false,
    showModal: false,
  },
  notification: {
    isVisible: false,
    message: '',
    type: '',
  },
};

const store = createStore({
  state: initialState,

  mutations: {
    addToCart(state, product) {
      const cartItem = state.cart.items.find((item) => item.id === product.id);

      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cart.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(state, product) {
      const index = state.cart.items.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        if (state.cart.items[index].quantity > 1) {
          state.cart.items[index].quantity--;
        } else {
          state.cart.items.splice(index, 1);
        }
      }
    },

    showNotification(state, { message, type }) {
      state.notification.isVisible = true;
      state.notification.message = message;
      state.notification.type = type;
    },

    hideNotification(state) {
      state.notification.isVisible = false;
    },
  },

  actions: {
    // Action to load data from session storage
    loadDataFromSessionStorage({ commit }) {
      const savedState = sessionStorage.getItem('vueStore');
      console.log('On mount - getting data from storage', commit);
      console.log('Session storage - ', savedState);

      if (savedState) {
        console.log('session storage here -- ');
        // this.state = { ...JSON.parse(savedState) };
        store.replaceState({ ...JSON.parse(savedState) });

        console.log('Current State', this.state.cart);
      }
    },

    showNotification({ commit }, payload) {
      commit('showNotification', payload);

      // Automatically hide the notification after a certain time (e.g., 3 seconds)
      setTimeout(() => {
        commit('hideNotification');
      }, 5000);
    },
  },

  modules: {},

  plugins: [
    // A Vuex plugin to save the state to session storage on each mutation
    (store) => {
      // Save the state to session storage whenever the state changes
      store.subscribe((mutation, state) => {
        sessionStorage.setItem('vueStore', JSON.stringify(state));
      });

      // Optionally, load the initial state from session storage
      const savedState = sessionStorage.getItem('vueStore');
      if (savedState) {
        store.replaceState(JSON.parse(savedState));
      }
    },
  ],

  getters: {
    cartTotalItems: (state) => {
      const totalItems = state.cart.items.reduce((total, item) => total + item.quantity, 0);

      state.cart.totalItems = totalItems;

      return totalItems;
    },
    cartTotalPrice: (state) => {
      let totalPrice = state.cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );

      // Round to 2 decimal
      totalPrice = Math.round(totalPrice * 100) / 100;

      state.cart.totalPrice = totalPrice;

      return totalPrice;
    },
  },
});

export default store;
