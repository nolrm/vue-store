import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CartView from '@/views/CartView.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import OrderView from '@/views/OrderView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: CartView },
  { path: '/checkout', component: CheckoutView },
  { path: '/order', component: OrderView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
