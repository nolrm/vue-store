<template>
  <MainLayout>
    <div class="page-home">
      <h1 class="text-3xl font-semibold mb-4">Our Menu</h1>

      <div class="flex space-x-8">
        <div>
          <h2 class="text-xl mb-3">Categories</h2>
          <ul>
            <li
              v-for="(category, index) in categories"
              :key="category"
              class="mb-3 capitalize"
            >
              <a :href="`#category-${index}`">
                {{ category }}
              </a>
            </li>
          </ul>
        </div>

        <div class="flex-1">
          <div class="mb-8">
            <input
              v-model="search"
              placeholder="Search by title"
              class="border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div
            v-for="(category, index) in categories"
            :id="`category-${index}`"
            :key="category"
            class="mb-10"
          >
            <h2 class="text-xl capitalize mb-3">{{ category }}</h2>
            <ProductList :products="getProductsByCategory(category)" />
          </div>
        </div>

        <div class="w-280 max-w-sm">
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
      OrderSummary
    },
    data() {
      return {
        products: [],
        categories: [],
        search: ''
      };
    },
    computed: {
      filteredProducts() {
        return this.products.filter((product) =>
          product.title.toLowerCase().includes(this.search.toLowerCase())
        );
      }
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
          this.categories = this.getCategories();
          console.log('tesat sdf hello there');
          console.log('asdf ');
          console.log('asdf asdf asdf');

          console.log('asdf ');
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
      getCategories() {
        return Array.from(
          new Set(this.filteredProducts.map((product) => product.category))
        );
      },
      getProductsByCategory(category) {
        // Filter products based on the selected category
        return this.filteredProducts.filter(
          (product) => product.category === category
        );
      }
    }
  };
</script>
