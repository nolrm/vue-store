<template>
  <div class="product-list">
    <h2 class="mb-10">Product List</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <div class="bg-white p-4 mb-4 shadow-md rounded-md">
          <div class="flex">
            <div>
              <h2 class="text-xl font-semibold">
                {{ product.title }}
              </h2>
              <p class="text-gray-600">
                {{ product.description }}
              </p>
              <p class="text-gray-800 font-bold mt-2">${{ product.price }}</p>
            </div>
            <div>
              <button @click="addToCart(product)">ADD</button>
              <button @click="removeFromCart(product)" class="mr-5">
                REMOVE
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["products"],
  methods: {
    addToCart(product) {
      console.log("Adding to cart..", product);
      this.$store.commit("addToCart", product);
    },
    removeFromCart(product) {
      console.log("Adding to cart..", product);
      this.$store.commit("removeFromCart", product);
    },
  },
};
</script>
