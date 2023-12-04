<template>
  <MainLayout>
    <div class="page-checkout">
      <h1 class="text-3xl font-semibold mb-4">Checkout</h1>

      <div class="flex space-x-4">
        <div class="flex-1">
          <Checkout />
        </div>

        <div class="w-280">
          <order-summary></order-summary>

          <div class="text-center mt-5 px-4">
            <p>
              <small>All prices are in NZD and GST inclusive</small>
            </p>
            <p>Pickup and Delivery available Delivery within 9kms</p>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
  import MainLayout from '@/layouts/MainLayout.vue';
  import Checkout from '@/components/Checkout.vue';
  import OrderSummary from '@/components/OrderSummary.vue';

  export default {
    components: {
      MainLayout,
      Checkout,
      OrderSummary,
    },
  };
</script>
