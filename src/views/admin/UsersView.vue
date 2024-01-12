<template>
  <AdminLayout>
    <AdminUsers />
  </AdminLayout>
</template>

<script>
  import AdminLayout from '@/layouts/AdminLayout.vue';
  import AdminUsers from '@/components/admin/AdminUsers.vue';

  export default {
    components: {
      AdminLayout,
      AdminUsers
    }
  };
</script>
