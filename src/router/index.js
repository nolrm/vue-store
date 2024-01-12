import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CartView from '@/views/CartView.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import OrderView from '@/views/OrderView.vue';
import TrackOrder from '@/views/TrackOrder.vue';

import Admin from '@/views/admin/Admin.vue';
import OrdersView from '@/views/admin/OrdersView.vue';
import CategoryView from '@/views/admin/CategoryView.vue';
import ProductView from '@/views/admin/ProductView.vue';
import UsersView from '@/views/admin/UsersView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: CartView },
  { path: '/checkout', component: CheckoutView },
  { path: '/order', component: OrderView },
  { path: '/track-order', component: TrackOrder },

  { path: '/admin', component: Admin },
  { path: '/admin/orders', component: OrdersView },
  { path: '/admin/category', component: CategoryView },
  { path: '/admin/product', component: ProductView },
  { path: '/admin/users', component: UsersView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
