<template>
  <MainLayout>
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }} - Quantity: {{ item.quantity }}
          <button @click="removeFromCart(item)">Remove</button>
        </li>
      </ul>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  components: {
    MainLayout,
  },
  computed: {
    cart() {
      console.log('this.$store.state', this.$store.state)
      console.log('this.$store.state', this.$store.state.cart)
      return this.$store.state.cart
    },
  },
  methods: {
    removeFromCart(item) {
      this.$store.commit('removeFromCart', item)
    },
  },
}
</script>
