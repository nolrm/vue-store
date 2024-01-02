<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div>
        <!-- <a href="/">
          <img src="/logo.svg" alt="Vue Store" class="w-12 h-12" />
        </a> -->
      </div>
      <div class="space-x-4">
        <!-- Menu Links -->
        <!-- <a href="/" class="text-white">Home</a> -->
        <a href="/menu" class="text-white">Order menu</a>
        <a href="/menu/checkout" class="text-white">Cart ({{ totalQty }})</a>
        <a href="/menu/checkout" class="text-white">Checkout</a>
        <a href="/menu/trackorder" class="text-white">Track Order</a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      totalQty() {
        // Access the getter from the store
        return this.$store.getters['cartTotalItems'] || 0;
      }
    },
    methods: {
      test() {
        // Handle links logic
      }
    }
  };
</script>
