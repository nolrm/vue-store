<template>
  <MainLayout>
    <div class="page-home">
      <h1 class="text-3xl font-semibold mb-4">Our Menu</h1>

      <div class="flex space-x-4">
        <div>
          <div>Categories</div>
          <ul>
            <li v-for="category in categories" :key="category" class="mb-3 capitalize">
              {{ category }}
            </li>
          </ul>
        </div>

        <div class="flex-1">
          <div v-for="category in categories" :key="category" class="mb-3">
            <h2 class="capitalize">{{ category }}</h2>
            <ProductList :products="getProductsByCategory(category)" />
          </div>
        </div>

        <div class="w-280">
          <order-summary>
            <a
              href="/checkout"
              class="block mt-6 w-full bg-gray-800 text-white text-center py-2 rounded-md hover:bg-gray-700"
            >
              Checkout
            </a>
          </order-summary>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
  import MainLayout from '@/layouts/MainLayout.vue';
  import ProductList from '@/components/ProductList.vue';
  import OrderSummary from '@/components/OrderSummary.vue';

  export default {
    components: {
      MainLayout,
      ProductList,
      OrderSummary,
    },
    data() {
      return {
        products: [],
        categories: [],
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await this.axios.get('https://fakestoreapi.com/products');
          this.products = response.data.slice(0, 15); // Using only the first 10 items for simplicity
          this.categories = this.getCategories(this.products);
          console.log(this.categories);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
      getCategories(products) {
        return Array.from(new Set(this.products.map((product) => product.category)));
      },
      getProductsByCategory(category) {
        // Filter products based on the selected category
        return this.products.filter((product) => product.category === category);
      },
    },
  };
</script>
