<template>
  <div class="order-summary bg-gray-100 p-8 rounded-md">
    <h2 class="text-2xl font-semibold mb-4">Shopping Cart Summary</h2>

    <ul>
      <li class="mb-4" v-for="product in cartItems" :key="product.id">
        <div>
          <p class="text-md font-semibold">{{ product.title }}</p>
          <p class="text-sm text-gray-500">Price: ${{ product.price }}</p>

          <div class="flex items-center space-x-2 mt-3">
            <button @click="removeFromCart(product)" class="text-red-500 bg-gray-200 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
              </svg>
            </button>
            <span class="text-md font-semibold">{{ product.quantity }}</span>
            <button
              @click="addToCart(product)"
              class="bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            </button>
          </div>
        </div>
      </li>
    </ul>

    <!-- Total -->
    <div class="flex justify-between items-center border-t border-gray-300 pt-4">
      <h2 class="text-lg font-semibold">Total</h2>
      <span class="text-xl font-semibold">$ {{ totalPrice }}</span>
    </div>

    <slot />
  </div>
</template>

<script>
  export default {
    computed: {
      cartItems() {
        // Access the getter from the store
        return this.$store.state.cart.items || [];
      },
      totalPrice() {
        return this.$store.getters['cartTotalPrice'] || 0;
      },
    },
    methods: {
      addToCart(product) {
        console.log('Adding to cart..', product);
        this.$store.commit('addToCart', product);
        this.$store.dispatch('showNotification', {
          message: 'Added to cart',
          type: 'success',
        });
      },
      removeFromCart(product) {
        console.log('Adding to cart..', product);
        this.$store.commit('removeFromCart', product);
        this.$store.dispatch('showNotification', {
          message: 'Removed from cart',
          type: 'error',
        });
      },
    },
  };
</script>
