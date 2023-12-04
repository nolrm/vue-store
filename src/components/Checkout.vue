<template>
  <div>
    <form @submit.prevent="checkout">
      <!-- Your checkout form fields here -->

      <h2>Select your preference</h2>

      <h2>Your Details</h2>

      <ul class="list-disc pl-4">
        <li>No cash accepted and No eftpos facility for online orders.</li>
        <li>Estimate made to order cooking time is minimum 60mins.</li>
        <li>Please don't submit same order twice, wait for a confirmation message.</li>
        <li>No refund/cancellation policy.</li>
        <li>We do not accept orders in advance. Kindly place your order for same day!</li>
      </ul>

      <button
        type="submit"
        class="mt-6 w-40 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700"
      >
        Place Order
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    methods: {
      checkout() {
        // Handle checkout logic
      },
    },
  };
</script>
