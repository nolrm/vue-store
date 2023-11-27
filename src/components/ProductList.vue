<template>
    <div>
      <h2>Product List</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
            <div class="bg-white p-4 mb-4 shadow-md rounded-md">
                <h2 class="text-xl font-semibold">{{ product.name }}</h2>
                <p class="text-gray-600">{{ product.description }}</p>
                <p class="text-gray-800 font-bold mt-2">${{ product.price }}</p>
                <button @click="addToCart(product)">Add to Cart</button>
            </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['products'],
    methods: {
      addToCart(product) {
        console.log('Adding to cart..', product)
        this.$store.commit('addToCart', product);
      },
    },
  };
  </script>