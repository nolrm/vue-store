<template>
  <div class="order-summary bg-gray-100 p-8 rounded-md">
    <h2 class="text-2xl font-semibold mb-4">Shopping Cart Summary</h2>

    <ul>
      <li class="mb-4" v-for="product in cartItems" :key="product.id">
        <div>
          <p class="text-md font-semibold">{{ product.title }}</p>
          <p class="text-sm text-gray-500">Price: ${{ product.price }}</p>

          <div class="flex items-center space-x-2 mt-3">
            <m-button
              @click="removeFromCart(product)"
              size="small"
              class="text-red-500 bg-gray-200 rounded"
            >
              <i class="ion-ios-remove"></i>
            </m-button>

            <span class="text-md font-semibold">{{ product.quantity }}</span>

            <m-button
              @click="addToCart(product)"
              size="small"
              class="bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              <i class="ion-ios-add"></i>
            </m-button>
          </div>
        </div>
      </li>
    </ul>

    <!-- Total -->
    <div
      class="flex justify-between items-center border-t border-gray-300 pt-4"
    >
      <h2 class="text-lg font-semibold">Total</h2>
      <span class="text-xl font-semibold">$ {{ totalPrice }}</span>
    </div>

    <slot />
  </div>
</template>

<script>
  import MButton from '@/components/MButton.vue';

  export default {
    components: {
      MButton
    },
    computed: {
      cartItems() {
        // Access the getter from the store
        return this.$store.state.cart.items || [];
      },
      totalPrice() {
        return this.$store.getters['cartTotalPrice'] || 0;
      }
    },
    methods: {
      addToCart(product) {
        console.log('Adding to cart..', product);
        this.$store.commit('addToCart', product);
        this.$store.dispatch('showNotification', {
          message: 'Added to cart',
          type: 'success'
        });
      },
      removeFromCart(product) {
        console.log('Adding to cart..', product);
        this.$store.commit('removeFromCart', product);
        this.$store.dispatch('showNotification', {
          message: 'Removed from cart',
          type: 'error'
        });
      }
    }
  };
</script>
