<template>
  <div class="main-layout flex flex-col min-h-screen">
    <!-- Header -->
    <header>
      <MainNav />
    </header>

    <main class="flex-grow main-content container mx-auto pt-10 pb-10">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 p-4">
      <p class="text-white text-center">Vue Store @nolrm</p>
    </footer>
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  components: {
    MainNav,
  },
};
</script>
