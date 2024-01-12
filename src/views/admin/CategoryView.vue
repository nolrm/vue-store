<template>
  <AdminLayout>
    <AdminCategory :categories="categories" />
  </AdminLayout>
</template>

<script>
  import AdminLayout from '@/layouts/AdminLayout.vue';
  import AdminCategory from '@/components/admin/AdminCategory.vue';

  export default {
    components: {
      AdminLayout,
      AdminCategory
    },
    data() {
      return {
        categories: []
      };
    },
    mounted() {
      this.fetchCategories();
    },
    methods: {
      async fetchCategories() {
        try {
          const response = await this.axios.get(
            'https://fakestoreapi.com/products/categories'
          );
          this.categories = response.data.slice(0, 15); // Using only the first 10 items for simplicity
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      }
    }
  };
</script>
