import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import OrderView from "@/views/OrderView.vue";
import TrackOrder from "@/views/TrackOrder.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/menu/cart", component: CartView },
  { path: "/menu/checkout", component: CheckoutView },
  { path: "/menu", component: OrderView },
  { path: "/menu/trackorder", component: TrackOrder },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
