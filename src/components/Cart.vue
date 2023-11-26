<template>
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }} - Quantity: {{ item.quantity }}
          <button @click="removeFromCart(item)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cart() {
        return this.$store.state.cart;
      },
    },
    methods: {
      removeFromCart(item) {
        this.$store.commit('removeFromCart', item);
      },
    },
  };
  </script>