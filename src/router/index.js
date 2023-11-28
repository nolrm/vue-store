import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CartView from '@/views/CartView.vue'
import CheckoutView from '@/views/CheckoutView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: CartView },
  { path: '/checkout', component: CheckoutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
