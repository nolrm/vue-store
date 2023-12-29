<template>
  <div class="product-list">
    <ul>
      <li v-for="product in products" :key="product.id">
        <div class="bg-white p-4 mb-4 shadow-md rounded-md">
          <div class="flex space-x-6">
            <div class="w-20">
              <img :src="product.image" :alt="product.title" />
            </div>
            <div class="flex-1">
              <h2 class="text-xl font-semibold">
                {{ product.title }}
              </h2>
              <p class="text-gray-600">
                {{ product.description }}
              </p>
              <p class="text-gray-800 font-bold mt-2">${{ product.price }}</p>
            </div>
            <div>
              <button
                @click="addToCart(product)"
                class="bg-gray-800 text-white rounded hover:bg-gray-700 px-2 py-1"
              >
                ADD
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
    props: ['products'],
    methods: {
      addToCart(product) {
        console.log('Adding to cart..', product);
        this.$store.commit('addToCart', product);
        this.$store.dispatch('showNotification', {
          message: 'Added to cart',
          type: 'success'
        });
      }
    }
  };
</script>
