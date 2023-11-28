<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div>
        <!-- Your Logo -->
        <img src="/logo.svg" alt="Logo" class="w-12 h-12" />
      </div>
      <div class="space-x-4">
        <!-- Menu Links -->
        <a href="/" class="text-white">Home</a>
        <a href="/cart" class="text-white">Cart</a>
        <a href="/checkout" class="text-white">Checkout</a>
        <a href="#" class="text-white">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    methods: {
      test() {
        // Handle links logic
      },
    },
  }
</script>
