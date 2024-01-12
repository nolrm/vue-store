<template>
  <div>
    <h2
      class="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 mb-8"
    >
      Orders
    </h2>

    <table class="border-collapse table-auto w-full">
      <thead>
        <tr>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Status
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            OrderID
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            OrderItem
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            OrderStatusHistory
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.OrderID">
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
          >
            {{ order.Status }}
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
          >
            {{ order.OrderID }}
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
          >
            {{ order.OrderItem }}
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
          >
            <ul>
              <li
                v-for="(history, index) in order.OrderStatusHistory"
                :key="index"
              >
                {{ history }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'AdminOrders',
    data() {
      return {
        orders: [
          {
            Status: 'Shipped',
            OrderID: 1,
            OrderItem: 'Product A',
            OrderStatusHistory: ['Order Placed', 'Processing', 'Shipped']
          },
          {
            Status: 'Delivered',
            OrderID: 2,
            OrderItem: 'Product B',
            OrderStatusHistory: [
              'Order Placed',
              'Processing',
              'Shipped',
              'Delivered'
            ]
          }
          // Add more orders as needed
        ]
      };
    }
  };
</script>

<style scoped></style>
