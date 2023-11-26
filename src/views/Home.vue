<template>
  <MainLayout>
    <div class="page-home">
      <div class="container mx-auto p-8">
        <h1 class="text-3xl font-semibold mb-4">Our Menu</h1>
        
        <ProductList :products="products" />
      </div>
    </div>
  </MainLayout>
</template>
  
<script>
  import MainLayout from '@/layouts/MainLayout.vue';
  import ProductList from '@/components/ProductList.vue';

  export default {
    components: {
      MainLayout,
      ProductList
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