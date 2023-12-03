<template>
  <MainLayout>
    <div class="page-home">
      <h1 class="text-3xl font-semibold mb-4">Our Menu</h1>

      <div class="flex space-x-4">
        <div>Categories</div>

        <div class="flex-1">
          <ProductList :products="products" />
        </div>

        <div class="w-300">
          <order-summary />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import ProductList from "@/components/ProductList.vue";
import OrderSummary from "@/components/OrderSummary.vue";

export default {
  components: {
    MainLayout,
    ProductList,
    OrderSummary,
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
        const response = await this.axios.get(
          "https://fakestoreapi.com/products"
        );
        this.products = response.data.slice(0, 5); // Using only the first 5 items for simplicity
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
};
</script>
