<template>
    <div>
      <ProductList :products="products" />
    </div>
  </template>
  
  <script>
  // import axios from 'axios';
  import ProductList from '@/components/ProductList.vue';
  
  export default {
    components: {
      ProductList,
    },
    data() {
      return {
        products: [],
      };
    },
    mounted() {
        this.fetchProducts();
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await this.axios.get('https://fakestoreapi.com/products');
                this.products = response.data.slice(0, 5); // Using only the first 5 items for simplicity
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
    },
  };
  </script>