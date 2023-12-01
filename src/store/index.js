import { createStore } from "vuex";

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
};

const mutations = {
  updateProperty(state, payload) {
    // Common logic to be applied to mutations
    console.log("Common logic executed");

    // Your specific mutation logic
    state[payload.property] = payload.value;
  },

  setPropertyA(state, value) {
    // Call the common mutation
    mutations.updateProperty(state, { property: "propertyA", value });
  },

  setPropertyB(state, value) {
    // Call the common mutation
    mutations.updateProperty(state, { property: "propertyB", value });
  },
};

const store = createStore({
  state: initialState,

  mutations: {
    updateCartTotals(state) {
      // const totalQty = state.cart.items.reduce(
      //   (total, item) => total + item.quantity,
      //   0
      // );
      // state.cart.totalItems = totalQty;

      // console.log("state.cart -- ", totalQty);
      console.log("Update cart tooo --- ");
    },

    addToCart(state, product) {
      const cartItem = state.cart.items.find((item) => item.id === product.id);

      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cart.items.push({ ...product, quantity: 1 });
      }

      mutations.updateCartTotals(state);
    },

    removeFromCart(state, product) {
      const index = state.cart.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        if (state.cart.items[index].quantity > 1) {
          state.cart.items[index].quantity--;
        } else {
          state.cart.items.splice(index, 1);
        }
      }

      this.mutations.updateCartTotals();
    },
  },

  actions: {
    // Action to load data from session storage
    loadDataFromSessionStorage({ commit }) {
      const savedState = sessionStorage.getItem("vueStore");
      console.log("On mount - getting data from storage", commit);
      console.log("Session storage - ", savedState);

      if (savedState) {
        console.log("session storage here -- ");
        // this.state = { ...JSON.parse(savedState) };
        store.replaceState({ ...JSON.parse(savedState) });

        console.log("Current State", this.state.cart);
      }
    },
  },

  modules: {},

  plugins: [
    // A Vuex plugin to save the state to session storage on each mutation
    (store) => {
      // Save the state to session storage whenever the state changes
      store.subscribe((mutation, state) => {
        sessionStorage.setItem("vueStore", JSON.stringify(state));
      });

      // Optionally, load the initial state from session storage
      const savedState = sessionStorage.getItem("vueStore");
      if (savedState) {
        store.replaceState(JSON.parse(savedState));
      }
    },
  ],

  getters: {
    cartTotal: (state) => {
      const totalQty = state.cart.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      // state.cart.totalItems = totalQty;

      console.log("state.cart -- ", totalQty);

      return totalQty;
    },
  },
});

export default store;
