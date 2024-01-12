<template>
  <AdminLayout>
    <AdminOrders />
  </AdminLayout>
</template>

<script>
  import AdminLayout from '@/layouts/AdminLayout.vue';
  import AdminOrders from '@/components/admin/AdminOrders.vue';

  export default {
    components: {
      AdminLayout,
      AdminOrders
    }
  };
</script>
