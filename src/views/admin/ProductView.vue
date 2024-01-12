<template>
  <AdminLayout>
    <AdminProduct :products="products" />
  </AdminLayout>
</template>

<script>
  import AdminLayout from '@/layouts/AdminLayout.vue';
  import AdminProduct from '@/components/admin/AdminProduct.vue';

  export default {
    components: {
      AdminLayout,
      AdminProduct
    },
    data() {
      return {
        products: []
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await this.axios.get(
            'https://fakestoreapi.com/products'
          );
          this.products = response.data.slice(0, 15); // Using only the first 10 items for simplicity
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
    }
  };
</script>
