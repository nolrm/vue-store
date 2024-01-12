<template>
  <div class="main-layout flex flex-col min-h-screen">
    <!-- Header -->
    <header>
      <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex items-center justify-between">
          <div>
            <a href="/admin" class="text-white"> Admin logo </a>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-grow main-content container mx-auto pt-10 pb-10">
      <div class="flex">
        <div class="sidebar mr-5">
          <router-link to="/admin/orders">Orders</router-link>
          <router-link to="/admin/category">Category</router-link>
          <router-link to="/admin/product">Product</router-link>
          <router-link to="/admin/users">Users</router-link>
        </div>

        <div class="flex-1">
          <slot />
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 p-4">
      <p class="text-white text-center">Vue Store Admin</p>
    </footer>
  </div>
</template>

<script>
  import MainNav from '@/components/MainNav.vue';
  import Notification from '@/components/Notification.vue';

  export default {
    components: {
      MainNav,
      Notification
    }
  };
</script>

<style scoped>
  .sidebar {
    width: 200px;
    height: 100%;
    background-color: #333;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .sidebar a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 10px;
  }

  .sidebar a:hover {
    text-decoration: underline;
  }
</style>
