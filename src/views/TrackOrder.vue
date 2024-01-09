<template>
  <MainLayout>
    <div class="page-order">
      <div class="order-heading">
        <h1 class="text-3xl font-semibold mb-4">Order details</h1>
        <p>Order placed succesfully, preapring your order.</p>
      </div>
      
      <ul class="progress-container my-3">
        <li class="progress-step active">Order Placed</li>
        <li class="progress-step">In the Kitchen</li>
        <li class="progress-step">Ready to Pickup</li>
      </ul>

      <hr class="my-7">

      <div class="order-details">
        <dl>
          <dt>Order #:</dt>
          <dd>12345678</dd>
        </dl>

        <dl>
          <dt>Order Method: </dt>
          <dd>Pick up</dd>
        </dl>

        <dl>
          <dt>Order time: </dt>
          <dd>04/01/2024 16:58:31</dd>
        </dl>

        <dl>
          <dt>Transaction ID: </dt>
          <dd>ORDER123123123123</dd>
        </dl>
      </div>

      <hr class="my-7">

      <div class="order-items">
        <ul>
          <li class="mb-4" v-for="product in orderItems" :key="product.id">
            <div>
              <div class="flex justify-between">
                <div>
                  <p class="text-md font-semibold">{{ product.title }}</p>
                </div>
                <div class="text-right">
                  <p class="text-md font-semibold">${{ product.price }}</p>
                  <span class="text-sm text-gray-500 mt-3">x{{ product.quantity }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <hr class="my-7">

      <div class="order-details">
        <dl class="text-lg">
          <dt>Amount</dt>
          <dd>$35.00</dd>
        </dl>

        <dl>
          <dt>Payment Method: </dt>
          <dd>Visa/Mastercard</dd>
        </dl>

        <dl>
          <dt>Contact: </dt>
          <dd>0123456</dd>
        </dl>

        <p class="font-semibold">Note: </p>
        <p>NA</p>
      </div>
    </div>
  </MainLayout>
</template>

<script>
  import MainLayout from '@/layouts/MainLayout.vue';
  export default {
    components: {
      MainLayout
    },
    computed: {
      orderItems() {
        // Access the getter from the store
        return this.$store.state.cart.items || [];
      }
    },
  };
</script>

<style scoped lang="scss">
  .page-order {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  }

  .progress-container {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
  }

  .progress-step {
    flex: 1;
    text-align: center;
    position: relative;
  }

  .progress-step:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ccc;
    z-index: -1;
  }

  .progress-step.active {
    color: var(--m-secondary);
  }

  .progress-step.active:before {
    background-color: var(--m-secondary);
  }

  .order-details {
    dt {
      display: inline-block;
      padding-right: .5em;
      font-weight: 700;
    }
    dd {
      display: inline-block;
    }
  }
</style>
