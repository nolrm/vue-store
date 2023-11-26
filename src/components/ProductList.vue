<template>
    <div>
      <h2>Product List</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - ${{ product.price }}
          <button @click="addToCart(product)">Add to Cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['products'],
    methods: {
      addToCart(product) {
        this.$store.commit('addToCart', product);
      },
    },
  };
  </script>